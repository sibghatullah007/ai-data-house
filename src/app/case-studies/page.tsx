'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPrint, FaShoppingCart, FaHospital, FaChartLine } from 'react-icons/fa';
import MagneticButton from '@/components/MagneticButton';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Print Shop Automation Revolution",
      client: "QuickPrint Solutions",
      industry: "Printing & Manufacturing",
      challenge: "Manual job tracking and scheduling leading to missed deadlines and resource wastage",
      solution: "Implemented a comprehensive CRM system with automated scheduling, real-time tracking, and mobile access",
      results: [
        "40% reduction in missed deadlines",
        "25% increase in operational efficiency",
        "30% growth in client satisfaction",
        "50% reduction in manual data entry"
      ],
      icon: <FaPrint className="w-24 h-24 text-green-600" />,
      technologies: ["Make.com", "React", "Node.js", "MongoDB"],
      duration: "3 months"
    },
    {
      id: 2,
      title: "Data-Driven Retail Transformation",
      client: "Urban Retail Group",
      industry: "Retail",
      challenge: "Lack of real-time inventory insights and customer behavior analysis",
      solution: "Developed an integrated analytics platform with automated reporting and predictive insights",
      results: [
        "35% improvement in inventory management",
        "20% increase in sales through better product placement",
        "45% reduction in stockouts",
        "60% faster decision-making process"
      ],
      icon: <FaShoppingCart className="w-24 h-24 text-green-600" />,
      technologies: ["Power BI", "Azure", "Python", "SQL Server"],
      duration: "4 months"
    },
    {
      id: 3,
      title: "Healthcare Process Automation",
      client: "MediCare Plus",
      industry: "Healthcare",
      challenge: "Time-consuming manual patient data processing and appointment scheduling",
      solution: "Created an automated patient management system with AI-powered scheduling",
      results: [
        "50% reduction in administrative workload",
        "40% decrease in scheduling errors",
        "30% improvement in patient satisfaction",
        "25% increase in staff productivity"
      ],
      icon: <FaHospital className="w-24 h-24 text-green-600" />,
      technologies: ["Power Automate", "SharePoint", "Azure AI", "Dynamics 365"],
      duration: "5 months"
    },
    {
      id: 4,
      title: "Financial Services Automation",
      client: "Global Finance Corp",
      industry: "Financial Services",
      challenge: "Complex manual reconciliation processes and compliance reporting",
      solution: "Implemented automated reconciliation and compliance monitoring system",
      results: [
        "70% reduction in reconciliation time",
        "99.9% accuracy in compliance reporting",
        "45% decrease in operational costs",
        "60% faster audit preparation"
      ],
      icon: <FaChartLine className="w-24 h-24 text-green-600" />,
      technologies: ["n8n", "Python", "PostgreSQL", "React"],
      duration: "6 months"
    }
  ];

    return (
    <main className="min-h-screen pt-[70px]">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Success Stories
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover how we've helped businesses transform their operations through innovative data solutions and automation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Icon Section */}
                  <div className="flex items-center justify-center bg-gray-50 p-12">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {study.icon}
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {study.industry}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {study.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      <span className="font-semibold">Client:</span> {study.client}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-600">
                            <FaArrowRight className="text-green-600" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results
          </p>
          <Link href="/contact">
            <MagneticButton className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full">
              Schedule a Consultation
            </MagneticButton>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CaseStudiesPage;