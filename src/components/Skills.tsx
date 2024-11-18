import { Code2, Palette, Zap, Layout, Smartphone, Search } from 'lucide-react';
import SkillCard from './SkillCard';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, intuitive interfaces with attention to detail.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and smooth user experience.'
    },
    {
      icon: Layout,
      title: 'Responsive',
      description: 'Building layouts that work perfectly across all devices.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Designing with mobile users as the primary focus.'
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Implementing best practices for search engine optimization.'
    }
  ];

  return (
    <div className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Technical Expertise</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Leveraging modern technologies to build exceptional digital experiences
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.title}
            {...skill}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}