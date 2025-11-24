import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Travel & Transport Assistance | NDIS Transport - Bright Support',
  description: 'NDIS assisted travel and transport services in Melbourne with wheelchair-accessible vehicles for appointments, social outings, and shopping.',
};

export default function TravelTransportPage() {
  return (
    <ServicePageTemplate
      title="Travel & Transport Assistance"
      subtitle="NDIS Assisted Travel And Transport Services Provider In Melbourne"
      description="Our Travel and Transport Assistance services help you get where you need to go safely and comfortably. Whether it's medical appointments, social outings, shopping, or community activities, we provide reliable, accessible transport with caring support workers who understand your needs."
      services={[
        'Transport to doctor\'s appointments and medical visits',
        'Social outings and community events',
        'Shopping trips and errands',
        'Wheelchair-accessible vehicle transport',
        'Support worker accompaniment (if required)',
        'Airport and long-distance travel',
        'School and work transport',
        'Family visits and social connections',
        'Recreational activities and day trips',
        'Support during travel and transitions',
      ]}
      features={[
        {
          title: 'Quick and Customized Services',
          description: 'Flexible scheduling and personalized transport solutions tailored to your specific needs.',
        },
        {
          title: 'NDIS Support Management',
          description: 'We help you understand and maximize your NDIS transport funding and benefits.',
        },
        {
          title: 'Professional Social Workers',
          description: 'Support workers with AASW professional membership, experienced in communication and support.',
        },
        {
          title: 'Transparent Communication',
          description: 'Open, honest communication about scheduling, costs, and any changes to arrangements.',
        },
      ]}
      benefits={[
        'Access to wheelchair-accessible vehicles when needed',
        'Reliable, punctual service for all appointments',
        'Support workers available to accompany you',
        'Flexible services supporting daily activities',
        'Better communication and interaction skills from staff',
        'Support for independent living and community access',
        'Door-to-door service for convenience',
        'Assistance with mobility aids and equipment',
        'Safe, comfortable travel experience',
        'Increased independence and community participation',
      ]}
      faqItems={[
        {
          question: 'Do you have wheelchair-accessible vehicles?',
          answer: 'Yes! We have wheelchair-accessible vehicles available for participants who require them. Please let us know your accessibility needs when booking.',
        },
        {
          question: 'Can a support worker travel with me?',
          answer: 'Absolutely! If you need assistance during travel, we can provide a support worker to accompany you, help with transitions, and support you at your destination.',
        },
        {
          question: 'How do I book transport?',
          answer: 'You can book transport by calling us at 1800 407 508 or through our online contact form. We recommend booking in advance, especially for medical appointments, but we can also accommodate urgent requests when possible.',
        },
      ]}
    />
  );
}
