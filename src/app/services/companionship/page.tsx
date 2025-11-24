import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Companionship Services | NDIS Support - Bright Support',
  description: 'Meaningful companionship services to reduce isolation, build genuine connections, and improve wellbeing for NDIS participants and aged care residents.',
};

export default function CompanionshipPage() {
  return (
    <ServicePageTemplate
      title="Companionship Services"
      subtitle="Companionship Services Benefit People With Disabilities"
      description="Our Companionship Services provide meaningful social connection and emotional support. We understand that genuine relationships are essential to wellbeing. Our compassionate companions take time to understand your personality, hobbies, and needs, building strong bonds and creating memorable experiences together."
      features={[
        {
          title: 'Relationship-Based Approach',
          description: 'We focus on building genuine, lasting connections rather than just providing a service.',
        },
        {
          title: 'Quality Care and Support',
          description: 'Attentive, person-centered support that respects your dignity, choices, and preferences.',
        },
        {
          title: 'Understanding Your Needs',
          description: 'Taking time to learn about your personality, interests, hobbies, and what makes you happy.',
        },
        {
          title: 'Meaningful Connections',
          description: 'Creating strong bonds through shared experiences, conversations, and activities you enjoy.',
        },
      ]}
      services={[
        'One-on-one companionship visits',
        'Social outings and community activities',
        'Long drives with favorite music',
        'Cafe and restaurant visits',
        'Shopping trips',
        'Attending events and celebrations',
        'Hobby and interest support',
        'Conversation and emotional support',
        'Playing games and puzzles',
        'Arts and crafts activities',
        'Garden walks and nature activities',
        'Support for residential age care participants',
      ]}
      benefits={[
        'Reduce social isolation and loneliness',
        'Improve emotional wellbeing and mental health',
        'Build meaningful friendships and connections',
        'Enjoy quality time doing things you love',
        'Maintain social skills and confidence',
        'Experience new activities and places',
        'Share stories and create memories',
        'Feel valued, heard, and understood',
        'Increase participation in community life',
        'Enhance overall quality of life',
      ]}
      faqItems={[
        {
          question: 'What is the difference between companionship and personal care?',
          answer: 'Companionship focuses on social interaction, emotional support, and shared activities. While companions can assist with outings and activities, they don\'t provide personal care like showering or dressing. We can combine companionship with other supports if needed.',
        },
        {
          question: 'Can I have the same companion each time?',
          answer: 'Yes! We believe consistency is important for building relationships. We match you with a compatible companion and aim to maintain that same person for your regular visits.',
        },
        {
          question: 'What activities can we do together?',
          answer: 'Activities are based on your interests! This might include going out for coffee, shopping, attending events, playing games, going for drives, visiting parks, crafts, or simply having conversations. You choose what you\'d like to do.',
        },
      ]}
    />
  );
}
