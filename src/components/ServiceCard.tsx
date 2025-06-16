'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  features
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center text-gray-700"
          >
            <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard; 