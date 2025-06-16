'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarChart3, Database, Zap, Shield, Users, Code2, Cloud } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import ServiceCard from '../../components/ServiceCard';
import Statistics from '@/components/Statistics';
import VideoReviews from '@/components/VideoReviews';
import Link from 'next/link';

const ServicesPage = () => {
  const services = [
    {
      title: "Business Automation",
      description: "Streamline your business processes with powerful automation solutions using Make.com, Zapier, and n8n.",
      icon: <Zap className="w-12 h-12 text-green-600" />,
      features: [
        "Workflow Automation",
        "Multi-platform Integration",
        "Custom Automation Solutions",
        "Process Optimization"
      ]
    },
    {
      title: "Integration Services",
      description: "Connect your business tools seamlessly with our expert integration services across multiple platforms.",
      icon: <Database className="w-12 h-12 text-green-600" />,
      features: [
        "Make.com Integration",
        "Zapier Workflows",
        "n8n Automation",
        "Custom API Integration"
      ]
    },
    {
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions.",
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      features: [
        "Custom Dashboard Development",
        "Real-time Data Monitoring",
        "Predictive Analytics",
        "Interactive Visualizations"
      ]
    },
    {
      title: "Web Solutions",
      description: "Create stunning, responsive web applications with modern technologies and best practices.",
      icon: <Code2 className="w-12 h-12 text-green-600" />,
      features: [
        "ReactJS & NextJS Development",
        "UI/UX Design with Figma",
        "Responsive Web Design",
        "Modern Frontend Development"
      ]
    },
    {
      title: "Microsoft Data Automation",
      description: "Leverage Microsoft's powerful suite of tools for enterprise-grade data automation and management.",
      icon: <Cloud className="w-12 h-12 text-green-600" />,
      features: [
        "Power Automate Workflows",
        "Power Apps Development",
        "Microsoft Azure Integration",
        "SharePoint Automation"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage the power of artificial intelligence to automate processes, predict trends, and make data-driven decisions.",
      icon: <Zap className="w-12 h-12 text-green-600" />,
      features: [
        "Custom AI Solutions",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Applications"
      ]
    },
    
  ];

  const benefits = [
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on real-time data and analytics",
      icon: <Database className="w-8 h-8 text-green-600" />
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security measures to protect your valuable data",
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business needs",
      icon: <Users className="w-8 h-8 text-green-600" />
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/2.jpg"
            alt="Data Analytics Services"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Transform Your Business with Data-Driven Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Unlock the power of data analytics, AI, and business intelligence to drive growth and innovation
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/contact">
              <MagneticButton className="bg-green-700 text-white hover:bg-green-800 px-8 py-3 rounded-full">
                Get Started
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end data solutions to help businesses thrive in the digital age
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of working with industry-leading data experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Client Success Stories */}
      <VideoReviews />

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join hundreds of successful businesses that have leveraged our data solutions to achieve their goals
          </p>
          <MagneticButton className="bg-white text-green-700 hover:bg-gray-100 px-4 py-3 rounded-full">
            Schedule a Consultation
          </MagneticButton>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;