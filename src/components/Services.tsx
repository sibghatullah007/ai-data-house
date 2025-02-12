import Image from "next/image";
import { FaDatabase, FaComments, FaBrain, FaCogs } from "react-icons/fa";

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
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/services-graphic.png" // Replace with actual image path
            alt="Services Graphic"
            width={400}
            height={400}
          />
        </div>

        {/* Services List */}
        <div className="w-full md:w-1/2 space-y-6">
          <ServiceCard
            title="Data Engineering"
            description="Design and optimize data pipelines to power intelligent business solutions."
            icon={<FaDatabase className="text-green-700 text-2xl" />}
          />
          <ServiceCard
            title="Chatbot Development"
            description="Develop intelligent chatbots for seamless and engaging communication."
            icon={<FaComments className="text-green-700 text-2xl" />}
          />
          <ServiceCard
            title="Artificial Intelligence"
            description="Leverage custom AI models to solve complex business challenges."
            icon={<FaBrain className="text-green-700 text-2xl" />}
          />
          <ServiceCard
            title="Integration and Automation"
            description="Connect systems and automate workflows for maximum efficiency."
            icon={<FaCogs className="text-green-700 text-2xl" />}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-white shadow-lg rounded-lg p-6 md:p-8 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-green-700">
          Ready to Transform Your <span className="text-green-900">Business</span>?
        </h3>
        <p className="text-gray-600 mt-2">
          Streamline operations and enhance customer engagement with our AI, Data Engineering,
          Chatbot Development, and Automation solutions. Let’s take your business to the next level!
        </p>
        <button className="mt-4 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800">
          Let's Get Started
        </button>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg p-4 md:p-6 rounded-lg flex items-center space-x-4">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-semibold text-green-900 text-lg">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Services;
