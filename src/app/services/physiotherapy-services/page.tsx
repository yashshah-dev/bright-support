import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Physiotherapy Services | NDIS Physio - Bright Support',
  description: 'Expert NDIS physiotherapy services for neurological, musculoskeletal, and cardio-pulmonary conditions with personalized treatment plans and home visits available.',
};

export default function PhysiotherapyPage() {
  return (
    <ServicePageTemplate
      title="Physiotherapy Services"
      subtitle="Physiotherapist Highett for NDIS patients"
      description="Our experienced physiotherapists provide specialized treatment for NDIS participants with various conditions. We offer evidence-based therapy to improve mobility, manage pain, strengthen muscles, and enhance overall physical function. Services are tailored to your individual needs and delivered in settings that suit you best."
      services={[
        'Neurological physiotherapy for stroke recovery',
        'Cerebral Palsy management',
        'Spinal cord injury rehabilitation',
        'Traumatic brain injury support',
        'Muscle and ligament injury treatment',
        'Arthritis management',
        'Recovery from broken bones',
        'Post-surgery rehabilitation',
        'Chronic Obstructive Pulmonary Disease (COPD) management',
        'Cystic fibrosis support',
        'Asthma management',
        'Post cardiac surgery rehabilitation',
        'Orthotics and prosthesis assessment',
      ]}
      features={[
        {
          title: 'Home Visits',
          description: 'Physiotherapy services delivered in the comfort and convenience of your own home.',
        },
        {
          title: 'Gym-Based Sessions',
          description: 'Access to fully equipped gym facilities for strength and conditioning programs.',
        },
        {
          title: 'Group Exercises',
          description: 'Participate in group exercise classes designed for various ability levels.',
        },
        {
          title: 'Hydrotherapy',
          description: 'Water-based therapy in warm water pools for gentle, effective rehabilitation.',
        },
      ]}
      benefits={[
        'Improve mobility and physical function',
        'Reduce pain and manage chronic conditions',
        'Prevent secondary complications',
        'Strengthen muscles and improve endurance',
        'Enhance balance and coordination',
        'Regain independence in daily activities',
        'Personalized exercise programs for home practice',
        'Education about your condition and self-management',
      ]}
      faqItems={[
        {
          question: 'Do I need a referral for physiotherapy?',
          answer: 'While a GP referral is helpful, it\'s not always required for NDIS physiotherapy services. Your NDIS plan needs to include funding for physiotherapy or allied health services.',
        },
        {
          question: 'Where can I receive physiotherapy services?',
          answer: 'We offer flexible service delivery including home visits, gym-based sessions, hydrotherapy in warm water pools, and group exercise classes. We can deliver services in the setting that works best for you.',
        },
        {
          question: 'How often will I need physiotherapy?',
          answer: 'Treatment frequency depends on your condition, goals, and NDIS funding. Your physiotherapist will develop a treatment plan that outlines recommended frequency and duration.',
        },
      ]}
    />
  );
}
