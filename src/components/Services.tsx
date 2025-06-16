'use client'
// import Image from "next/image";

import { FaDatabase, FaComments, FaBrain, FaCogs } from "react-icons/fa";
import OrbitAnimation from "./OrbitAnimation";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import React from 'react';
import Link from 'next/link';

const Services = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700">
          Elevate Your Project with Cutting-Edge <br />
          AI, Data, and Automation Solutions
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Transform your project with our comprehensive IT solutions, featuring
          Excel, Power BI, and more. Elevate your business analytics and
          management to take your project to the next level. Let us help you
          unleash your project's full potential.
        </p>
      </div>

      {/* Main Content */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Circular Graphic */}
        <div className="flex items-center justify-center w-[100%] md:w-1/2">
                <OrbitAnimation/>
        </div>

        {/* Services List */}
        <div className="w-full md:w-1/2 space-y-6">
          <ServiceCard
            title="Data Engineering"
            description="Design and optimize data pipelines to power intelligent business solutions."
            icon={<FaDatabase className="text-green-700 text-[4.5rem]" />}
          />
          <ServiceCard
            title="Chatbot Development"
            description="Develop intelligent chatbots for seamless and engaging communication."
            icon={<FaComments className="text-green-700 text-[4.5rem]" />}
          />
          <ServiceCard
            title="Artificial Intelligence"
            description="Leverage custom AI models to solve complex business challenges."
            icon={<FaBrain className="text-green-700 text-[4.5rem]" />}
          />
          <ServiceCard
            title="Integration and Automation"
            description="Connect systems and automate workflows for maximum efficiency."
            icon={<FaCogs className="text-green-700 text-[4.5rem]" />}
          />
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="mt-12 bg-white shadow-lg rounded-lg p-6 md:p-8 text-center"
      >
        <h3 className="text-lg md:text-xl font-semibold text-green-700">
          Ready to Transform Your <span className="text-green-900">Business</span>?
        </h3>
        <p className="text-gray-600 mt-2">
          Streamline operations and enhance customer engagement with our AI, Data Engineering,
          Chatbot Development, and Automation solutions. Let's take your business to the next level!
        </p>
        <div className="text-center mt-12">
          <Link href="/contact">
            <MagneticButton className="bg-green-700 text-white hover:bg-green-800 px-8 py-3 rounded-full">
              Let's Get Started
            </MagneticButton>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white shadow-lg p-4 md:p-6 rounded-lg flex items-center justify-between hover:shadow-xl hover:border hover:border-gray-300 cursor-pointer"
    >
      <div>
        <h4 className="font-semibold text-green-900 text-lg">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      <div className="flex-shrink-0">{icon}</div>
    </motion.div>
  );
};

export default Services;
