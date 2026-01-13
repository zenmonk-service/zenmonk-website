'use server'

import { render } from '@react-email/render'
import fs from 'fs'
import path from 'path'
import { transporter } from '@/config/mailer'
import Contact from '@/models/contact'
import Application from '@/models/job-application'
import Subscriber from '@/models/subscriber'
import CareerTemplate from '@/shared/email-templates/CareerTemplate'
import ContactTemplate from '@/shared/email-templates/ContactTemplate'
import NewApplicant from '@/shared/email-templates/NewApplicant'
import NewContact from '@/shared/email-templates/NewContact'
import NewSubscriber from '@/shared/email-templates/NewSubscriber'
import SubscriberTemplate from '@/shared/email-templates/SubcriberTemplate'

const UPLOAD_DIR = path.resolve('public/uploads')

interface IContactFormData {
  first_name: string
  last_name: string
  phone: string
  email: string
  message: string
}

interface IJobApplicationData {
  name: string
  phone: string
  email: string
  message: string
  document: FileList[0]
}

export const createSubscriber = async (subscriberEmail: string) => {
  try {
    const existingSubscriber = await Subscriber.findOne({
      email: subscriberEmail,
    })

    if (existingSubscriber) {
      return {
        subscriber: existingSubscriber,
        status: 409,
        success: false,
        message: 'Subscriber Already Exist!',
      }
    }

    const newSubscriber = await Subscriber.create({
      email: subscriberEmail,
    })

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: subscriberEmail,
      subject: 'Team Zenmonk',
      html: await render(SubscriberTemplate()),
    }

    await transporter.sendMail(userMailOptions)

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Subscriber',
      html: await render(NewSubscriber(subscriberEmail)),
    }

    await transporter.sendMail(adminMailOptions)
    newSubscriber.save()

    return {
      subscriber: newSubscriber,
      status: 201,
      success: true,
      message: 'Subscriber Creation Sucessfull!',
    }
  } catch (error) {
    return {
      status: 500,
      success: false,
      message: 'Error while creating subscriber',
    }
  }
}

export const createContactDetails = async (payload: IContactFormData) => {
  let { email, first_name, last_name, phone, message } = payload
  try {
    const newContact = await Contact.create({
      first_name,
      last_name,
      email,
      phone,
      message,
    })
    await newContact.save()

    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Team Zenmonk',
      html: await render(ContactTemplate(first_name + ' ' + last_name)),
    }

    await transporter.sendMail(clientMailOptions)

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact',
      html: await render(
        NewContact(first_name + ' ' + last_name, email, phone, message)
      ),
    }

    await transporter.sendMail(adminMailOptions)

    return {
      contact: newContact,
      status: 201,
      success: true,
      message: 'Contact Creation Sucessfull!',
    }
  } catch (error) {
    console.log(error)
    return {
      status: 500,
      success: false,
      message: 'Error while creating contact',
    }
  }
}

export const fillJobApplicationDetails = async (
  formData: IJobApplicationData,
  job_posting_id: string
) => {
  let { email, name, message, phone, document } = formData

  try {
    const file = document as Blob
    let fileName = Date.now() + '_' + (file as File)?.name.replace(/\s+/g, '')

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer())
      if (!fs.existsSync(UPLOAD_DIR)) {
        fs.mkdirSync(UPLOAD_DIR)
      }
      fs.writeFileSync(path.resolve(UPLOAD_DIR, fileName), buffer)
    }

    const newApplication = await Application.create({
      name,
      email,
      phone,
      message,
      document: fileName,
      job_posting: job_posting_id,
    })
    console.log('newApplication: ', newApplication);
    const application = await newApplication.save()

    const careerMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Team Zenmonk',
      html: await render(CareerTemplate(name)),
    }

    await transporter.sendMail(careerMailOptions)

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Applicant',
      html: await render(
        NewApplicant(name, email, phone, message, application.document)
      ),
    }

    await transporter.sendMail(adminMailOptions)

    return {
      career: newApplication,
      status: 201,
      success: true,
      message: 'Career Details Creation Sucessfull!',
    }
  } catch (error) {
    console.log(error)
    return {
      status: 500,
      success: false,
      message: 'Error while creating career',
    }
  }
}
