'use client'
import { FC } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-950 via-green-800 to-green-950 text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Left Column - Company Name & Address */}
          <div>
            <h1 className="text-4xl font-bold mb-4">AI <br />DATA <br /> HOUSE</h1>
            <p className="text-sm mb-4">Service Road G-12 Islamabad, Pakistan</p>
            <div className="flex space-x-4 text-xl">
              <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            </div>
          </div>

          {/* Middle Column - Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="text-sm space-y-2">
              <li>Data Engineering</li>
              <li>Artificial Intelligence</li>
              <li>Chatbot Development</li>
              <li>Integration & Automation</li>
            </ul>
          </div>

          {/* Middle Column - Useful Links */}
          <div>
            <h4 className="font-semibold mb-4">Useful Links</h4>
            <ul className="text-sm space-y-2">
              <li>About</li>
              <li>Career</li>
              <li>Contact</li>
              <li>Case Studies</li>
            </ul>
          </div>

          {/* Right Column - Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="text-sm space-y-2">
              <li>Blogs</li>
              <li>Courses</li>
              <li>Training Programs</li>
              <li>Life at Company</li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8">
          <h4 className="text-sm font-semibold mb-4">Subscribe to our Newsletter</h4>

          <form className="flex flex-col w-fit space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              name="email"
              required
              placeholder="Email address"
              aria-label="Email address"
              className="px-4 py-2 border border-gray-300 placeholder-gray-600 text-black focus:outline-none focus:border-green-700"
            />

            <button
              type="submit"
              className="bg-green-700 text-white py-2 px-4 border border-[3px] font-semibold w-fit hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>
        </div>


        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-4 text-center text-sm mt-8 flex justify-between">
          <p>&#169; AiDataHouse 2025. All rights reserved</p>
          <div className="space-x-4">
            <a href="#" className="text-gray-300 hover:text-white border-r border-gray-300 pe-4">Terms and Conditions</a>
            <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
