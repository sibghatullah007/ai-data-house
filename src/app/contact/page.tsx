import Link from "next/link";
import { GiPositionMarker } from "react-icons/gi";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const Page = () => {
  return (
    <div>
      <h1 className="text-3xl font-black text-green-800 mb-4 text-center my-3">Let’s Collaborate on Your Project</h1>
      <p className="text-gray-700 text-center max-w-90% md:max-w-[750px] mx-auto">We’re dedicated to understanding your needs and delivering custom solutions that drive your success. <br />Share your details, and our team will get in touch to schedule a time to discuss your goals.</p>
      <div className="max-w-6xl mx-auto bg-white p-8 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-2">
            <div className="flex flex-col gap-2">
              <div>
                <input placeholder="Your name & surname*" type="text" name="name" className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required />
              </div>
              <div>
                <input placeholder="Your email address*" type="email" name="email" className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required />
              </div>
              <div>
                <input placeholder="Your phone number*" type="tel" name="phone" className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required />
              </div>
              <div>
                <input placeholder="Company Name" type="text" name="company" className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
              </div>
              <div>
                <input placeholder="Region from where you are*" type="text" name="region" className=" w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required />
              </div>
              <div>
                <textarea placeholder="Explain your project idea*" name="project" rows={3} className="w-full px-4 py-3 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" required></textarea>
              </div>
            </div>

            {/* Call to Action Button */}
            <div className="text-center">
              <Link href="/thank-you">
              <button type="submit" className="w-full bg-light-green-custom text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition">
                Let’s get in touch
              </button>
              </Link>
            </div>
          </form>
        </div>

        {/* Right Side - Statistics & Contact Information */}
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-5xl font-bold text-gray-400">100%</h3>
              <p className="text-sm text-gray-400 w-full md:w-[90%] text-center">100% Commitment We Deliver, Every Time.</p>
            </div>

            <div className="text-center rounded-lg">
              <h3 className="text-5xl font-bold text-gray-400">95%</h3>
              <p className="text-sm text-gray-400 w-full md:w-[90%] text-center">95% of Our Team Are Industry Experts.</p>
            </div>

            <div className="text-center rounded-lg">
              <h3 className="text-5xl font-bold text-gray-400">2022</h3>
              <p className="text-sm text-gray-400 w-full md:w-[90%] text-center">Driving Innovation Since 2022.</p>
            </div>

            <div className="text-center rounded-lg">
              <h3 className="text-5xl font-bold text-gray-400">300+</h3>
              <p className="text-sm text-gray-400 w-full md:w-[90%] text-center">Projects Completed Since 2022.</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full p-4 border border-gray-300 rounded-lg shadow-lg mx-auto">
            <h4 className="text-xl font-semibold text-gray-500">For general inquiries!</h4>
            <div className="flex flex-col gap-2 mt-1">
              {/* Phone number */}
              <p className="w-fit flex items-center space-x-3 text-md text-gray-500 p-2 border-gray-300 border rounded-lg">
                <LuPhoneCall className="text-green-700" />
                <span>+9231433937859</span>
              </p>
              {/* Email */}
              <p className="w-fit flex items-center space-x-3 text-md text-gray-500 p-2 border-gray-300 border rounded-lg">
                <IoMailUnreadOutline className="text-green-700" />
                <span>info@aidatahouse.com</span>
              </p>
              {/* Address */}
              <p className="w-fit flex items-center space-x-3 text-md text-gray-500 p-2 border-gray-300 border rounded-lg">
                <GiPositionMarker className="text-green-700" />
                <span>60 Street 787, G-12, Islamabad, Islamabad Capital Territory</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
