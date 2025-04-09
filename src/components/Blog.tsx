'use client'
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'; // Import Next.js Image component
import Blog1 from "../../public/Blogs/AIBlog.png";
import Blog2 from "../../public/Blogs/ChatBotBlog.png";
import Blog3 from "../../public/Blogs/AutomationBlog.png";
import 'swiper/css';

const Blog: FC = () => {
  // Dynamic blog data
  const blogs = [
    {
      title: "How AI is Transforming Customer Experiences in 2025",
      description:
        "Learn how AI-powered tools are reshaping the way businesses engage with their customers.",
      imageUrl: Blog2, 
      link: "/blog/ai-transforming-experience",
    },
    {
      title: "Automation Can Revolutionize Your Business Operations",
      description:
        "Discover how automation simplifies workflows, reduces costs, and boosts efficiency.",
      imageUrl: Blog1,
      link: "/blog/automation-revolutionizing-business",
    },
    {
      title: "How AI is Transforming Customer Experiences in 2025",
      description:
        "Learn how AI-powered tools are reshaping the way businesses engage with their customers.",
      imageUrl: Blog3,
      link: "/blog/ai-transforming-experience",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-sm text-gray-600">
          We're Known in the Tech World for Sharing Knowledge and Driving Innovation
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 my-4">
          Insights That Inspire
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-8">
          Explore expert perspectives on AI, automation, and data-driven innovations shaping the future.
        </p>

        {/* Swiper Blog Cards Slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  width={500} // Add width and height for next/image
                  height={280}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold text-gray-900 mt-4">{blog.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-green-700 mt-4 inline-block font-medium text-sm"
                >
                  Read more &#8594;
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-8">
          <a
            href="/blogs"
            className="border-2 border-light-green-custom text-light-green-custom px-6 py-2 rounded-full font-semibold hover:bg-light-green-custom hover:text-white transition"
          >
            Browse all Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
