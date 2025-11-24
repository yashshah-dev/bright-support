import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Independent Living Accommodation (SIL) | NDIS Services - Bright Support',
  description: 'Supported Independent Living services providing 24/7 support, personal care, life skills development, and community integration in safe, accessible living spaces.',
};

export default function IndependentLivingPage() {
  return (
    <ServicePageTemplate
      title="Independent Living Accommodation Services (SIL)"
      subtitle="Supported Independent Living"
      description="Our Supported Independent Living (SIL) services provide comprehensive support for people with disabilities who need assistance with daily living activities. We offer 24/7 support in safe, accessible accommodation, helping you develop life skills, participate in your community, and achieve your goals while maintaining your independence."
      features={[
        {
          title: 'Person-Centered Approach',
          description: 'Your goals, preferences, and aspirations guide all aspects of your support and living arrangements.',
        },
        {
          title: 'Qualified and Caring Support Team',
          description: 'Experienced support workers available 24/7 to assist with daily living activities and personal care.',
        },
        {
          title: 'Safe and Accessible Living Spaces',
          description: 'Comfortable, well-maintained accommodation designed with accessibility and safety in mind.',
        },
        {
          title: 'Inclusive Community Living',
          description: 'Support to participate in community activities, build friendships, and maintain social connections.',
        },
      ]}
      services={[
        'Personal Care Assistance - Help with showering, dressing, grooming, and personal hygiene',
        'Life Skills Development - Cooking, cleaning, budgeting, and household management',
        'Community Integration - Support to access community facilities, events, and activities',
        '24/7 Support - Round-the-clock assistance and emergency support when needed',
        'Meal Planning and Preparation - Assistance with healthy meal planning and cooking',
        'Medication Management - Support with medication administration and monitoring',
        'Social and Recreational Activities - Organized group activities and outings',
        'Goal Setting and Achievement - Support to work towards your personal goals',
      ]}
      process={[
        {
          step: 1,
          title: 'Contact Us',
          description: 'Reach out to discuss your needs and find out if SIL is right for you. We\'ll explain the process and answer any questions.',
        },
        {
          step: 2,
          title: 'Assessment and Planning',
          description: 'We conduct a thorough assessment to understand your needs, preferences, and goals. Together, we create a personalized support plan.',
        },
        {
          step: 3,
          title: 'Transition and Settling In',
          description: 'We support you through the transition to your new home, ensuring you feel comfortable, safe, and ready to start your independent living journey.',
        },
      ]}
      faqItems={[
        {
          question: 'What is Supported Independent Living (SIL)?',
          answer: 'SIL is NDIS funding that provides support for people with disabilities who need help with daily living activities. It includes accommodation support, personal care, and assistance to live as independently as possible.',
        },
        {
          question: 'Who is eligible for SIL?',
          answer: 'SIL is for NDIS participants who require significant support with daily activities and would benefit from living in supported accommodation. Eligibility is determined through your NDIS plan.',
        },
        {
          question: 'Can I choose where I live?',
          answer: 'Yes! We work with you to find accommodation that suits your preferences, needs, and budget. You have choice and control over your living arrangements.',
        },
      ]}
    />
  );
}
