import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Positive Behaviour Support | NDIS PBS - Bright Support',
  description: 'Evidence-based positive behaviour support to understand behaviour, reduce restrictive interventions, and achieve personal growth with qualified PBS practitioners.',
};

export default function PositiveBehaviourSupportPage() {
  return (
    <ServicePageTemplate
      title="Positive Behaviour Support"
      subtitle="Positive behaviour support in Australian disability policy"
      description="Our Positive Behaviour Support (PBS) services use evidence-based approaches to understand and address behaviors of concern. We work collaboratively with you, your family, and your support network to create strategies that promote positive outcomes, reduce challenging behaviors, and enhance quality of life."
      services={[
        'Understanding you and your environment',
        'Understanding the behaviour and identifying triggers',
        'Reducing use of restrictive interventions',
        'Anticipating what may go wrong and prevention strategies',
        'Working together on positive strategies',
        'Involving family members and carers in planning',
        'Working with other therapists and support providers',
        'Increasing effective communication skills',
        'Developing behavior support plans',
        'Training for support workers and families',
        'Regular monitoring and plan review',
        'Crisis management strategies',
      ]}
      features={[
        {
          title: 'Evidence-Based Approach',
          description: 'Using proven strategies based on research and best practice in positive behaviour support.',
        },
        {
          title: 'Person-Centered Focus',
          description: 'Understanding your unique needs, strengths, preferences, and the reasons behind behaviors.',
        },
        {
          title: 'Collaborative Process',
          description: 'Working together with you, your family, carers, and other professionals for the best outcomes.',
        },
        {
          title: 'Qualified Practitioners',
          description: 'Trained PBS specialists with experience in developing and implementing behavior support plans.',
        },
      ]}
      benefits={[
        'Aim for a more positive outlook on life',
        'Support personal growth and development',
        'Guidance towards goal realization',
        'Reduced restrictive practices and interventions',
        'Improved communication and relationships',
        'Better understanding of behavior triggers',
        'Increased participation in preferred activities',
        'Enhanced quality of life',
        'Greater independence and choice',
        'Improved safety for everyone',
      ]}
      faqItems={[
        {
          question: 'What is Positive Behaviour Support?',
          answer: 'PBS is a person-centered approach that aims to understand why behaviors occur and develop strategies to prevent them, teach new skills, and improve quality of life. It focuses on positive strategies rather than punishment or restrictive practices.',
        },
        {
          question: 'Who provides PBS services?',
          answer: 'Our PBS services are provided by qualified practitioners who have specialized training in positive behaviour support. They work as part of a multidisciplinary team including psychologists, occupational therapists, and behavior specialists.',
        },
        {
          question: 'How long does it take to see results?',
          answer: 'The timeline varies depending on individual circumstances. PBS is a process that requires time, consistency, and collaboration. Some improvements may be seen quickly, while lasting change typically develops over months with ongoing support.',
        },
      ]}
    />
  );
}
