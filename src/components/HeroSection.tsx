export default function HeroSection() {
  return (
    <section className="bg-background1-custom min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-black text-light-green-custom !leading-[4rem]">
          Lead Your <span className="bg-light-green-custom text-white p-2">Industry</span> <br />
          with AI-Driven Growth
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 mt-4 text-lg">
          Revolutionize your business with AI Data Analysis, seamless automation, and 
          intelligent chatbots. Let us help you achieve your goals effortlessly.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <button className="border-2 border-light-green-custom text-light-green-custom px-6 py-2 rounded-full font-semibold hover:bg-light-green-custom hover:text-white transition">
            Our work
          </button>
          <button className="bg-light-green-custom text-white px-6 py-2 rounded-full font-semibold hover:bg-green-800 transition">
            Let’s Talk
          </button>
        </div>
      </div>
    </section>
  );
}

