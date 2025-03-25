import {
  CustomerSupport,
  MarketPlatform,
  OnlinePayment,
  ProductRecommendation,
  ShoppingMobile,
  ShoppingWebsite,
} from '../../assets'
import { Sector } from '../business-sectors.types'

export const sectorsList: Sector[] = [
  {
    sector: 'Health Care',
    id: 1,
    services: [
      {
        title: 'Patient Appointment System',
        image: CustomerSupport,
      },
      {
        title: 'Medication Reminder App',
        image: ShoppingWebsite,
      },
      {
        title: 'Health Tracker App',
        image: OnlinePayment,
      },

      {
        title: 'Medical Record Management System',
        image: ShoppingMobile,
      },

      {
        title: 'Telemedicine Platform',
        image: ProductRecommendation,
      },

      {
        title: 'Symptom Checker Chatbot',
        image: MarketPlatform,
      },
    ],
  },
  {
    id: 2,
    sector: 'E-commerce',
    services: [
      {
        title: 'Online Marketplace Platform',
        image: MarketPlatform,
      },
      {
        title: 'Subscription Shopping Website',
        image: ShoppingWebsite,
      },
      {
        title: 'Product Recommendation Tool',
        image: ProductRecommendation,
      },

      {
        title: 'Shopping Mobile App',
        image: ShoppingMobile,
      },

      {
        title: 'Online Payment Integration System',
        image: OnlinePayment,
      },

      {
        title: 'Customer Support Chatbot',
        image: CustomerSupport,
      },
    ],
  },
  {
    id: 3,
    sector: 'Retail',
    services: [
      {
        title: 'Inventory Management System',
        image: CustomerSupport,
      },
      {
        title: 'E-commerce Store',
        image: ShoppingWebsite,
      },
      {
        title: 'Customer Loyalty Program',
        image: OnlinePayment,
      },

      {
        title: 'Point of Sale (POS) System',
        image: ShoppingMobile,
      },

      {
        title: 'Retail Price Comparison Tool',
        image: ProductRecommendation,
      },

      {
        title: 'Product Recommendation Engine',
        image: MarketPlatform,
      },
    ],
  },
  {
    id: 4,
    sector: 'Real Estate',
    services: [
      {
        title: 'Property Listing Website',
        image: CustomerSupport,
      },
      {
        title: 'Price Estimator',
        image: ShoppingWebsite,
      },
      {
        title: 'Rental Property Management',
        image: OnlinePayment,
      },

      {
        title: 'Virtual Property Tour Application',
        image: ShoppingMobile,
      },

      {
        title: 'Investment Tracker',
        image: ProductRecommendation,
      },

      {
        title: 'Neighborhood Information Portal',
        image: MarketPlatform,
      },
    ],
  },
  {
    id: 5,
    sector: 'Education',
    services: [
      {
        title: 'Online Learning Platform',
        image: CustomerSupport,
      },
      {
        title: 'Student Attendance System',
        image: ShoppingWebsite,
      },
      {
        title: 'Complaint Management',
        image: OnlinePayment,
      },

      {
        title: 'Online Application Process',
        image: ShoppingMobile,
      },

      {
        title: 'Online Survey Management',
        image: ProductRecommendation,
      },

      {
        title: 'Quiz and Exam Platform',
        image: MarketPlatform,
      },
    ],
  },
  {
    id: 6,
    sector: 'Logistics',
    services: [
      {
        title: 'Package Tracking System',
        image: CustomerSupport,
      },
      {
        title: 'Order Management System',
        image: ShoppingWebsite,
      },
      {
        title: 'Supply Chain Analytics Dashboard',
        image: OnlinePayment,
      },

      {
        title: 'Delivery Route Finder Tool',
        image: ShoppingMobile,
      },

      {
        title: 'Fleet Management System',
        image: ProductRecommendation,
      },
    ],
  },
]
