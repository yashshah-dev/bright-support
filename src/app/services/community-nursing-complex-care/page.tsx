import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Community Nursing & Complex Care | NDIS Services - Bright Support',
  description: 'Professional community nursing and complex care services including medication management, wound care, catheter care, and support for complex medical needs.',
};

export default function CommunityNursingPage() {
  return (
    <ServicePageTemplate
      title="Community Nursing & Complex Care"
      subtitle="Australia's Community Nursing Care, NDIS Australia"
      description="Our Community Nursing and Complex Care services provide professional nursing support for NDIS participants with complex medical needs. Our qualified Registered Nurses deliver evidence-based care in your home or community setting, ensuring you receive the medical support you need to live safely and comfortably."
      services={[
        'Medication set-up and administration',
        'General nursing assessment and monitoring',
        'Blood pressure monitoring',
        'Blood sugar level monitoring',
        'Continence advice and management',
        'Catheter care and management',
        'Wound care and dressing changes',
        'Stoma care and management',
        'Tube-feeding assistance',
        'PEG feeding support',
        'Tracheostomy care',
        'Seizure management',
      ]}
      features={[
        {
          title: 'Qualified Registered Nurses',
          description: 'All our nurses are fully qualified, registered, and experienced in providing complex care in community settings.',
        },
        {
          title: 'Cultural Sensitivity',
          description: 'Experience working across diverse cultural backgrounds, respecting your values and preferences.',
        },
        {
          title: 'Hospital Experience',
          description: 'Our nurses have experience in nursing homes and hospital environments, bringing clinical expertise to community care.',
        },
        {
          title: 'Professional Support',
          description: 'Compassionate nursing support during difficult times, working closely with your medical team.',
        },
      ]}
      benefits={[
        'Receive professional nursing care in the comfort of your own home',
        'Avoid unnecessary hospital visits with expert community-based care',
        'Peace of mind knowing qualified nurses are managing your complex health needs',
        'Coordination with your GP and medical specialists for seamless care',
        'Flexible scheduling to meet your medical care requirements',
        'Education and support for family members and carers',
        'Regular monitoring and assessment to prevent complications',
        'Emergency support and clinical guidance when needed',
      ]}
      faqItems={[
        {
          question: 'What qualifications do your nurses have?',
          answer: 'All our nurses are Registered Nurses with current AHPRA registration. They have experience in community nursing, complex care, and working with NDIS participants with various medical conditions.',
        },
        {
          question: 'Can you coordinate with my GP and specialists?',
          answer: 'Yes! We work closely with your healthcare team, including GPs, specialists, and allied health professionals, to ensure coordinated, comprehensive care.',
        },
        {
          question: 'What if I need nursing support urgently?',
          answer: 'We have systems in place for urgent nursing support. Contact us immediately if you have an urgent nursing need, and we\'ll arrange appropriate care as quickly as possible.',
        },
      ]}
    />
  );
}
