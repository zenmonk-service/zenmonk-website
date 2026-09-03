import Contact from '@/models/contact';

export class ContactRepository {
  async createContact(data: any) {
    const contact = new Contact(data);
    return await contact.save();
  }
}
