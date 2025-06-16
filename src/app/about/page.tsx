'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Award, Zap, Database, Code2, Cloud } from 'lucide-react';
import { FaUserCircle, FaStar, FaRegStar } from 'react-icons/fa';
import Masonry from 'react-masonry-css';
import MagneticButton from '@/components/MagneticButton';
import Statistics from '@/components/Statistics';
import VideoReviews from '@/components/VideoReviews';
import TeamReviews from '@/components/TeamReviews';

const AboutPage = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
      icon: <Zap className="w-12 h-12 text-green-600" />
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality deliverables.",
      icon: <Award className="w-12 h-12 text-green-600" />
    },
    {
      title: "Client Success",
      description: "Your success is our priority. We work closely with you to achieve your business goals.",
      icon: <Target className="w-12 h-12 text-green-600" />
    }
  ];

  const expertise = [
    {
      title: "Business Automation",
      description: "Make.com, Zapier, n8n, and custom automation solutions",
      icon: <Zap className="w-8 h-8 text-green-600" />
    },
    {
      title: "Data Solutions",
      description: "Advanced analytics, visualization, and data management",
      icon: <Database className="w-8 h-8 text-green-600" />
    },
    {
      title: "Web Development",
      description: "Modern web applications with React, Next.js, and Figma",
      icon: <Code2 className="w-8 h-8 text-green-600" />
    },
    {
      title: "Data Automation",
      description: "Power Automate, Power Apps, Azure, and SharePoint",
      icon: <Cloud className="w-8 h-8 text-green-600" />
    }
  ];

  const testimonials = [
    {
      name: "Sophia Carter",
      position: "Print Shop Owner",
      message: "This CRM changed the game for us. From missed deadlines to total control. I can't imagine working without it now! It has allowed us to streamline our processes, keep track of every project, and ensure that we never miss a deadline again. Our team is more efficient and productive than ever before.",
      rating: 5
    },
    {
      name: "Dylan Brooks",
      position: "Operations Lead",
      message: "Love how mobile-friendly it is. I can check job status while grabbing coffee! It's great because I don't have to be at my desk all the time. I can monitor progress and make adjustments on the go. This has really boosted my productivity and kept me in the loop no matter where I am.",
      rating: 4
    },
    {
      name: "Avery Quinn",
      position: "Production Manager",
      message: "We finally have a dashboard that shows financials and efficiency in one place. So smooth and powerful. It helps us stay on top of our budgets, track our spending, and see how our production is performing in real time. The ease of access to this data has made decision-making much faster and more informed.",
      rating: 5
    },
    {
      name: "Jordan Miles",
      position: "Customer Service",
      message: "Our entire team is way more aligned. Jobs no longer fall through the cracks. The CRM ensures that every job is tracked, and communication is seamless. Everyone knows what needs to be done, when, and how, making the process smoother for everyone involved. It's been a huge improvement in our workflow.",
      rating: 4
    },
    {
      name: "Taylor Lee",
      position: "CEO, QuickPrint Co.",
      message: "The automation helped us scale up without hiring more people. Absolute win. The platform handles so much of the routine work automatically, allowing us to focus on higher-value tasks. We've been able to take on more clients and complete jobs faster, all while maintaining the same team size. It has been a huge benefit to our company's growth.",
      rating: 5
    },
    {
      name: "Morgan Ellis",
      position: "Freelance Designer",
      message: "Even as a solo designer, this platform makes client orders much easier to manage. It helps me keep track of all my deadlines, communication, and billing in one place, which is invaluable. No more sticky notes or scattered spreadsheets!",
      rating: 4
    }
  ];

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/2.jpg"
            alt="About AI Data House"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-700"
          >
            Transforming Businesses Through <span className='text-green-700'>Data & Automation</span> 
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            We are a team of passionate experts dedicated to helping businesses thrive in the digital age through innovative data solutions and automation.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <MagneticButton className='bg-green-800 text-white rounded-full hover:bg-green-900 px-4 py-2'>
                Get in Touch
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to democratize data and automation, AI Data House has grown into a trusted partner for businesses seeking to leverage technology for growth and efficiency.
              </p>
              <p className="text-lg text-gray-600">
                Our journey is marked by continuous innovation, client success stories, and a commitment to delivering exceptional value through cutting-edge solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-xl overflow-hidden"
            >
              <Image
                src="/office.png"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across multiple domains
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <Statistics />

      {/* Client Success Stories */}
      <VideoReviews />

      {/* Team Reviews Section */}
      <TeamReviews />

      {/* Testimonials Section */}
      <section className="px-6 md:px-16 py-20 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 my-4 text-center">
      What Our Clients Say</h2>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex gap-6"
          columnClassName="space-y-6"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-700"
            >
              <p className="text-gray-700 italic mb-4">"{item.message}"</p>
              <div className="flex items-center gap-3 mt-4">
                <FaUserCircle className="text-3xl text-green-700" />
                <div>
                  <div className="text-sm font-semibold text-green-700">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.position}</div>
                </div>
              </div>
              <div className="flex items-center mt-3">
                {[...Array(5)].map((_, i) => (
                  i < item.rating ? (
                    <FaStar key={i} className="text-yellow-500" />
                  ) : (
                    <FaRegStar key={i} className="text-yellow-500" />
                  )
                ))}
              </div>
            </motion.div>
          ))}
        </Masonry>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join the growing list of businesses that trust AI Data House for their digital transformation journey
          </p>
          <Link href="/contact">
            <MagneticButton className="bg-white text-green-700 hover:bg-gray-100 px-4 py-3 rounded-full">
              Start Your Journey
            </MagneticButton>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;