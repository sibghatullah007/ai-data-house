'use client'
import React from 'react';
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Link from 'next/link';

const Statistics = () => {
  return (
    <section className="bg-white py-16 px-6 text-center">
      {/* Section Heading */}
      <div className="mb-10">
        <p className="text-sm text-gray-600">Our Achievements in Numbers</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-green-800">
          Driving Business Success with <br /> AI Data & Automation
        </h2>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative p-6 rounded-lg border-2 border-green-700"
        >
          <h3 className="text-5xl font-bold text-green-700">100%</h3>
          <p className="mt-2 font-medium text-gray-800">
            100% Commitment We Deliver, Every Time.
          </p>
          <p className="text-sm text-gray-600">
            (From start to finish, your project is our priority.)
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative p-6 rounded-lg border-2 border-green-700"
        >
          <h3 className="text-5xl font-bold text-green-700">2022</h3>
          <p className="mt-2 font-medium text-gray-800">
            Driving Innovation Since 2022.
          </p>
          <p className="text-sm text-gray-600">
            (Years of expertise in AI, Data Engineering, and Automation.)
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative p-6 rounded-lg border-2 border-green-700"
        >
          <h3 className="text-5xl font-bold text-green-700">95%</h3>
          <p className="mt-2 font-medium text-gray-800">
            95% of Our Team Are Industry Experts.
          </p>
          <p className="text-sm text-gray-600">
            (Top-tier talent dedicated to your success.)
          </p>
        </motion.div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link href="/contact">
          <MagneticButton className="bg-green-700 text-white hover:bg-green-800 px-8 py-3 rounded-full">
            Get in touch
          </MagneticButton>
        </Link>
      </div>
    </section>
  );
};

export default Statistics;
