'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import dashboardImg from '../../public/dashboard.png'; // Replace with actual images
import dashboardImg2 from '../../public/dashboard2.png'; // Replace with actual images
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import MagneticButton from './MagneticButton';

const stories = [
  {
    title: 'Norfolk Dashboard Project',
    subtitle: 'Professional Contact and Call Management Dashboard',
    description:
      'AI Data House helped Norfolk create a seamless Contact and Call Management Dashboard, enhancing workflow with intuitive features and automation.',
    image: dashboardImg,
  },
  {
    title: 'Retail AI Automation',
    subtitle: 'Smarter Inventory and Sales Forecasting',
    description:
      'We enabled a national retail chain to automate its inventory tracking and forecast sales more accurately, saving thousands in lost revenue.',
    image: dashboardImg2,
  },
  {
    title: 'Healthcare NLP Engine',
    subtitle: 'Extracting insights from patient data',
    description:
      'Built a natural language processing pipeline to analyze and categorize patient feedback at scale for improved care quality.',
    image: dashboardImg,
  },
];

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handlePrev = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? stories.length - 1 : prevIndex - 1
      );
      setAnimate(true);
    }, 500);
  };

  const handleNext = () => {
    setAnimate(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === stories.length - 1 ? 0 : prevIndex + 1
      );
      setAnimate(true);
    }, 500);
  };

  useEffect(() => {
    setAnimate(true);
  }, [currentIndex]);

  // Add auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]); // Reset interval when currentIndex changes

  const currentStory = stories[currentIndex];

  return (
    <section className="bg-green-800 text-white px-6 md:pt-8 rounded-3xl relative overflow-hidden">
      {/* Arrows */}
      <div className="flex justify-center gap-2 my-8 md:absolute top-[0px] right-10 z-30">
        <MagneticButton
          onClick={handlePrev}
          className="flex w-10 h-10 rounded-full bg-white text-green-800 hover:bg-gray-200 transition justify-center items-center"
        >
          <FaArrowLeft />
        </MagneticButton>
        <MagneticButton
          onClick={handleNext}
          className="flex w-10 h-10 rounded-full bg-white text-green-800 hover:bg-gray-200 transition justify-center items-center"
        >
          <FaArrowRight />
        </MagneticButton>
      </div>
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          Success Stories That Speak
        </h2>
        <p className="text-sm md:text-base mt-2 text-gray-200">
          Discover how we've empowered businesses with data-driven innovations,
          AI solutions, and automation to achieve extraordinary results.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 transition-all duration-500 ease-in-out">
        {/* Text Content */}
        <div
          className={`flex-1 transform transition-all duration-700 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
        >
          <h3 className="text-2xl font-bold mb-2">{currentStory.title}</h3>
          <h4 className="text-lg font-semibold mb-4">{currentStory.subtitle}</h4>
          <p className="text-sm text-gray-200 leading-relaxed">
            {currentStory.description}
          </p>
        </div>

        {/* Image */}
        <div
          className={`flex-1 transition-opacity duration-700 ${animate ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <Image
            src={currentStory.image}
            alt={currentStory.title}
            className=""
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

