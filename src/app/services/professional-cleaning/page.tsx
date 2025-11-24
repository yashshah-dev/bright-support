import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Professional Cleaning Services | NDIS House Cleaning - Bright Support',
  description: 'The best NDIS house cleaning services in Australia including general cleaning, laundry, kitchen, bathroom, and specialized cleaning by professional cleaners.',
};

export default function ProfessionalCleaningPage() {
  return (
    <ServicePageTemplate
      title="Professional Cleaning Services"
      subtitle="The Best NDIS House Cleaning In Australia"
      description="Our Professional Cleaning Services help you maintain a clean, healthy, and comfortable home environment. We understand that a clean home is essential for independent living and wellbeing. Our experienced, professional cleaners take pride in their work and understand the importance of meeting your specific requirements and preferences."
      services={[
        'General House Cleaning',
        'Dusting all surfaces and furniture',
        'Vacuuming carpets and floors',
        'Mopping hard floors',
        'Laundry washing, drying, and folding',
        'Linen changing and bed making',
        'Kitchen cleaning and sanitizing',
        'Fridge cleaning and organization',
        'Oven and stovetop cleaning',
        'Curtain cleaning',
        'Bathroom cleaning and sanitizing',
        'Window cleaning (interior)',
        'Organizing and tidying',
      ]}
      features={[
        {
          title: 'Understanding Your Requirements',
          description: 'We take time to understand your specific cleaning needs and preferences for your home.',
        },
        {
          title: 'Client Expectations Addressed',
          description: 'We ensure all your expectations are met and maintain consistent, high-quality service.',
        },
        {
          title: 'Professional Cleaners',
          description: 'Our cleaners are experienced, reliable, and genuinely love what they do.',
        },
        {
          title: 'Essential for Independence',
          description: 'A clean home supports your independence, health, and overall wellbeing.',
        },
      ]}
      benefits={[
        'Maintain a clean, healthy living environment',
        'Reduce stress and anxiety about housekeeping',
        'More time to focus on activities you enjoy',
        'Support for independent living at home',
        'Professional results you can rely on',
        'Flexible scheduling to suit your needs',
        'Regular or one-off cleaning services',
        'Safe cleaning products and methods',
        'Respect for your home and privacy',
        'Consistent, trustworthy service',
      ]}
      faqItems={[
        {
          question: 'What cleaning products do you use?',
          answer: 'We use high-quality, effective cleaning products that are safe for your home. If you have preferences for specific products or sensitivities to certain chemicals, please let us know and we can accommodate your needs.',
        },
        {
          question: 'How often can I have cleaning services?',
          answer: 'Cleaning frequency depends on your NDIS plan and funding. We offer flexible scheduling from weekly, fortnightly, monthly, or one-off deep cleans based on your needs.',
        },
        {
          question: 'Do I need to be home during cleaning?',
          answer: 'It\'s up to you! Some clients prefer to be home, while others are comfortable with us cleaning while they\'re out. We can arrange whatever works best for you.',
        },
      ]}
    />
  );
}
