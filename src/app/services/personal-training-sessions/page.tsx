import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Personal Training Sessions | NDIS Fitness Training - Bright Support',
  description: 'NDIS registered disability fitness training to improve physical abilities, build confidence, and maintain healthy lifestyles with allied health professionals.',
};

export default function PersonalTrainingPage() {
  return (
    <ServicePageTemplate
      title="Personal Training Sessions"
      subtitle="NDIS Registered Disability Fitness Training"
      description="Our NDIS Personal Training Sessions are designed specifically for people living with disabilities. Led by qualified allied health professionals, our programs focus on improving physical abilities, teaching safe exercise techniques, and building confidence. We provide personalized fitness training to help you achieve your health and wellness goals."
      benefits={[
        'Improving physical abilities and functional capacity',
        'Teaching skills needed to exercise safely',
        'Encouraging independence in fitness and health management',
        'Building self-confidence and self-esteem',
        'Expanding ability to participate at home, school, and work',
        'Improving overall health and wellbeing',
        'Weight management and cardiovascular health',
        'Increased energy levels and stamina',
        'Better sleep quality',
        'Reduced risk of secondary health conditions',
      ]}
      features={[
        {
          title: 'Allied Health Professionals',
          description: 'Trained allied health professionals who understand disability and how to adapt exercises for different abilities.',
        },
        {
          title: 'Fitness Centre Access',
          description: 'Access to modern, accessible fitness facilities with specialized equipment.',
        },
        {
          title: 'Personalized Programs',
          description: 'Individualized fitness programs designed around your goals, abilities, and interests.',
        },
        {
          title: 'Ongoing Support',
          description: 'Regular monitoring, program adjustments, and motivation to help you stay on track.',
        },
      ]}
      services={[
        'One-on-one personal training sessions',
        'Customized exercise programs',
        'Strength and conditioning training',
        'Cardiovascular fitness programs',
        'Functional fitness for daily activities',
        'Balance and coordination exercises',
        'Flexibility and stretching programs',
        'Weight management support',
        'Sport-specific training',
        'Group fitness classes',
      ]}
      faqItems={[
        {
          question: 'Do I need to be fit to start personal training?',
          answer: 'No! Our programs are designed for all fitness levels, from complete beginners to those with existing fitness experience. We start where you are and progress at your pace.',
        },
        {
          question: 'What if I have never exercised before?',
          answer: 'That\'s perfectly fine! Our trainers are experienced in working with people who are new to exercise. We\'ll teach you proper techniques and build your confidence gradually.',
        },
        {
          question: 'Can I train at home or do I need to go to a gym?',
          answer: 'We offer both options. You can train at our accessible fitness center or we can provide home-based programs using minimal equipment if that better suits your needs.',
        },
      ]}
    />
  );
}
