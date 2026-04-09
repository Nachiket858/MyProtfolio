import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact | Nachiket Shinde',
  description: 'Hire an AI/ML Engineer and backend automation specialist. Open to new opportunities, collaborations, and freelance projects.',
};

export default function ContactPage() {
  return <ContactClient />;
}
