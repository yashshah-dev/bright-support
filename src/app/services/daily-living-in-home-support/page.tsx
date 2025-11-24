import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Daily Living & In-Home Support | NDIS Services - Bright Support',
  description: 'Comprehensive daily living and in-home support services including personal care, household tasks, meal preparation, and assistance with activities of daily living.',
};

export default function DailyLivingPage() {
  return (
    <ServicePageTemplate
      title="Daily Living & In-Home Support"
      subtitle="Supporting your independence at home"
      description="Our Daily Living and In-Home Support services are designed to help you maintain your independence and quality of life in the comfort of your own home. We provide personalized assistance with daily activities, household tasks, and personal care, enabling you to live the life you choose with dignity and respect."
      services={[
        'Personal hygiene (toileting, bathing, showering)',
        'Cleaning and house maintenance',
        'Laundry and ironing drop-off/pick up',
        'Assist with pet care',
        'Help with personal meals and mealtime support',
        'Grocery shopping',
        'Attending appointments',
        'Walking around the house',
        'Medication reminders',
        'Light gardening and outdoor maintenance',
      ]}
      features={[
        {
          title: '24/7 Support Available',
          description: 'We have full capacity for all-day and overnight support to meet your needs around the clock.',
        },
        {
          title: 'Qualified Support Workers',
          description: 'Our team consists of experienced, trained support workers who understand your unique needs.',
        },
        {
          title: 'Person-Centered Approach',
          description: 'Your goals, preferences, and choices guide all the support we provide.',
        },
        {
          title: 'Flexible Service Delivery',
          description: 'Services can be tailored to your schedule and specific requirements.',
        },
      ]}
      faqItems={[
        {
          question: 'What is included in daily living support?',
          answer: 'Daily living support includes assistance with personal care, household tasks, meal preparation, shopping, and other activities that help you live independently. Services are customized to your individual needs and NDIS plan.',
        },
        {
          question: 'Can I choose my support worker?',
          answer: 'Yes! We believe in building strong relationships. We work to match you with support workers who share your interests and values, and you can request changes if needed.',
        },
        {
          question: 'How often can I receive support?',
          answer: 'Support frequency depends on your NDIS plan and funding. We offer flexible scheduling from a few hours per week to 24/7 support, depending on your needs.',
        },
      ]}
    />
  );
}
