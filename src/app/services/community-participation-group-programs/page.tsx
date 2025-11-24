import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Community Participation & Group Programs | NDIS - Bright Support',
  description: 'NDIS innovative community participation programs including group activities, social events, arts and crafts, and community outings to build friendships and connections.',
};

export default function CommunityParticipationPage() {
  return (
    <ServicePageTemplate
      title="Community Participation & Group Programs"
      subtitle="NDIS Innovative Community Participation"
      description="Our Community Participation and Group Programs help you build connections, develop new skills, and participate fully in your community. We offer engaging group activities and individual support to help you pursue your interests, make friends, and enjoy meaningful social experiences."
      services={[
        'Discuss historical events and local history',
        'Record family history and personal stories',
        'Play mind-stimulating games and puzzles',
        'Participate in art and crafts activities',
        'Accompany to lunch in cafes and restaurants',
        'Escort to special events and celebrations',
        'Museum and gallery visits',
        'Sports and recreational activities',
        'Music and performance arts',
        'Cooking and food preparation classes',
      ]}
      benefits={[
        'Build friendships with people who share similar interests',
        'Participate in short or extended tours and outings',
        'Enjoy outdoor activities beyond your ordinary routine',
        'Increase social and community participation',
        'Develop new skills and hobbies',
        'Reduce social isolation and loneliness',
        'Gain confidence in social settings',
        'Experience new places and activities',
        'Connect with your local community',
        'Have fun in a safe, supportive environment',
      ]}
      features={[
        {
          title: 'Interactive Group Sessions',
          description: 'Engaging group activities designed to promote social interaction and skill development.',
        },
        {
          title: 'Diverse Activities',
          description: 'Wide range of programs catering to different interests, abilities, and age groups.',
        },
        {
          title: 'Community Integration',
          description: 'Activities held in real community settings to build confidence and connections.',
        },
        {
          title: 'Experienced Facilitators',
          description: 'Qualified support workers who create inclusive, welcoming environments for all participants.',
        },
      ]}
      faqItems={[
        {
          question: 'What types of activities do you offer?',
          answer: 'We offer a diverse range of activities including arts and crafts, social outings, sports and recreation, educational programs, cultural activities, and special interest groups. Activities are designed to match participants\' interests and goals.',
        },
        {
          question: 'Can I attend with a support worker?',
          answer: 'Yes! If you need one-to-one support to participate in group activities, we can arrange for a support worker to accompany you.',
        },
        {
          question: 'How do I join a group program?',
          answer: 'Contact us to discuss your interests and needs. We\'ll provide information about available programs and help you choose activities that align with your goals and NDIS plan.',
        },
      ]}
    />
  );
}
