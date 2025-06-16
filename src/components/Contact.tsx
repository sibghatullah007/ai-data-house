'use client'
import { FC } from 'react';
import { LuPhoneCall } from "react-icons/lu";
import { IoMailUnreadOutline } from "react-icons/io5";
import MagneticButton from './MagneticButton';

const Contact: FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-950 via-green-700 to-green-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side (Contact Info) */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get <br /> Started?</h2>
            <div className='w-fit border rounded-xl p-4 pe-14'>
              <p className="mb-3 text-[16px]">For general inquiries!</p>
              <div className="flex flex-col gap-2">
                <p className="flex items-center space-x-2 p-[6px] border rounded-lg text-md">
                  <LuPhoneCall />
                  <span>+923143937859</span>
                </p>
                <p className="flex items-center space-x-2 p-[6px] border rounded-lg text-md">
                  <IoMailUnreadOutline />
                  <span>info@aidatahouse.com</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side (Form Fields) */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="px-1 py-1 border border-b-white border-t-0 border-l-0 border-r-0 w-full bg-transparent 
             placeholder-white focus:outline-none 
             focus:border-b-white focus:bg-transparent 
             active:border-b-white active:bg-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Work Email *"
                  className="px-1 py-1 border border-b-white border-t-0 border-l-0 border-r-0 w-full bg-transparent 
             placeholder-white focus:outline-none 
             focus:border-b-white focus:bg-transparent 
             active:border-b-white active:bg-transparent"
                  required
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number *"
                className="px-1 py-1 border border-b-white border-t-0 border-l-0 border-r-0 w-full bg-transparent 
             placeholder-white focus:outline-none 
             focus:border-b-white focus:bg-transparent 
             active:border-b-white active:bg-transparent"
             required
              />
              <input
                type="text"
                placeholder="Organization"
                className="px-1 py-1 border border-b-white border-t-0 border-l-0 border-r-0 w-full bg-transparent 
             placeholder-white focus:outline-none 
             focus:border-b-white focus:bg-transparent 
             active:border-b-white active:bg-transparent"
              />
              <textarea
                placeholder="Project Description *"
                className="px-1 py-1 border border-b-white border-t-0 border-l-0 border-r-0 w-full bg-transparent 
             placeholder-white focus:outline-none 
             focus:border-b-white focus:bg-transparent 
             active:border-b-white active:bg-transparent"
                rows={1}
                required
              ></textarea>
              <MagneticButton className="bg-light-green-custom text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition border border-6 border-white">
                Send
              </MagneticButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
