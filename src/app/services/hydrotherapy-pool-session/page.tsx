import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Hydrotherapy & Pool Sessions | NDIS Services - Bright Support',
  description: 'NDIS hydrotherapy in warm water pools for pain relief, muscle strengthening, improved mobility with aquatic wheelchairs and accessible facilities.',
};

export default function HydrotherapyPage() {
  return (
    <ServicePageTemplate
      title="Hydrotherapy & Pool Sessions"
      subtitle="HYDROTHERAPY FOR THE NDIS"
      description="Our hydrotherapy services provide therapeutic exercises in a warm water pool (33-36°C) under the guidance of qualified physiotherapists. Water-based therapy is an effective treatment for various conditions, offering pain relief, improved mobility, and enhanced physical function in a safe, supportive environment."
      benefits={[
        'Relieve pain and muscle spasms',
        'Gain relaxation and stress relief',
        'Maintain or increase range of joint movement',
        'Re-educate paralyzed muscles',
        'Strengthen weak muscles and develop power/endurance',
        'Encourage walking and functional activities',
        'Support recreational activities in water',
        'Improve circulation and skin condition',
        'Improve morale and confidence',
        'Reduce body weight stress on joints',
        'Increase flexibility and mobility',
      ]}
      features={[
        {
          title: 'Warm Water Pool',
          description: 'Therapeutic pool maintained at 33-36°C for optimal comfort and muscle relaxation.',
        },
        {
          title: 'Accessible Equipment',
          description: 'Aquatic wheelchair, hoist for safe water entry, and ramp access for all abilities.',
        },
        {
          title: 'Professional Guidance',
          description: 'Qualified physiotherapists supervise all sessions and design personalized programs.',
        },
        {
          title: 'Additional Facilities',
          description: 'Sauna, massaging aqua jets for neck and back, and comfortable changing facilities.',
        },
      ]}
      services={[
        'Individual hydrotherapy sessions',
        'Group aqua exercise classes',
        'Pain management programs',
        'Post-surgery rehabilitation',
        'Neurological condition management',
        'Arthritis and joint mobility programs',
        'Muscle strengthening exercises',
        'Cardiovascular fitness in water',
        'Balance and coordination training',
        'Recreational swimming support',
      ]}
      process={[
        {
          step: 1,
          title: 'Free Consultation',
          description: 'Contact us for a free consultation with our physiotherapist to discuss your needs and determine if hydrotherapy is suitable for you.',
        },
        {
          step: 2,
          title: 'Assessment',
          description: 'Your physiotherapist will assess your condition, mobility, and goals to create a personalized hydrotherapy program.',
        },
        {
          step: 3,
          title: 'Begin Sessions',
          description: 'Start your hydrotherapy sessions with professional support, using our accessible facilities and equipment.',
        },
      ]}
      faqItems={[
        {
          question: 'What should I bring to a hydrotherapy session?',
          answer: 'Bring your swimming costume, towel, and any personal items you need. We provide all specialized equipment including aquatic wheelchairs and flotation devices.',
        },
        {
          question: 'Can I do hydrotherapy if I can\'t swim?',
          answer: 'Yes! You don\'t need to know how to swim. The pool has shallow areas, and our physiotherapists provide full support. We also have flotation devices and an aquatic wheelchair available.',
        },
        {
          question: 'Is hydrotherapy covered by NDIS?',
          answer: 'Yes, hydrotherapy can be funded under your NDIS plan as part of allied health or therapeutic support services. Check your plan or contact us to discuss funding options.',
        },
      ]}
    />
  );
}
