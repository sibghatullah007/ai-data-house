'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TeamReviews = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const swiperRef = useRef<any>(null);

  // Auto-slide when no video is playing
  useEffect(() => {
    if (!playingVideo) {
      swiperRef.current?.swiper?.autoplay?.start();
    } else {
      swiperRef.current?.swiper?.autoplay?.stop();
    }
  }, [playingVideo]);

  const testimonials = [
    {
      id: 1,
      name: "Mahnoor Malik", 
      course: "Senior Data Analyst at AI Data House",
      image: "/lovable-uploads/mahnoor.png",
      videoId: "wLITv_4gYyg",
      quote: "AI Data School provided me with the perfect platform to grow into a leadership role. The advanced analytics training and mentorship helped me excel in my career.",
      rating: 5
    },
    {
      id: 2,
      name: "Muhammad Dawood",
      course: "AI Engineer Intern at AI Data House",
      image: "/lovable-uploads/dawood.png",
      videoId: "3XxomATYX9w",
      quote: "As an intern, I'm amazed by the practical exposure I'm getting. Working on real AI automation projects has accelerated my learning curve tremendously.",
      rating: 5
    },
    {
      id: 3,
      name: "Muhammad Shoaib",
      course: "Data Analyst Intern at AI Data House",
      image: "/lovable-uploads/shoiab.png",
      videoId: "BF5s1fYnPuM",
      quote: "The internship program here is exceptional. I've learned more in three months than I did in my entire academic career. The hands-on experience is invaluable.",
      rating: 5
    },
    {
      id: 4,
      name: "Uzair Razzaq",
      course: "AI Engineering at AI Data House",
      image: "/lovable-uploads/uzair.png",
      videoId: "EG8gAkCb0LA",
      quote: "The advanced AI engineering skills I developed here have opened up incredible opportunities. The program's focus on cutting-edge technologies is exactly what the industry needs.",
      rating: 5
    },
    {
      id: 5,
      name: "Muhammad Usman",
      course: "Data Analyst Intern at AI Data House",
      image: "/lovable-uploads/usman.png",
      videoId: "G3z2OjCl4Kw",
      quote: "The internship program has been outstanding. In just three months, I've gained more practical knowledge than throughout my entire academic journey. The hands-on experience has been truly invaluable.",
      rating: 5
    },
    {
      id: 6,
      name: "Mehmood Khan",
      course: "Data Analyst at AI Data House",
      image: "/lovable-uploads/mehmood.png",
      videoId: "7ZfmOpkkGM8",
      quote: "Started my career at AI Data House has been transformative. The supportive environment and hands-on projects have helped me develop strong analytical skills and confidence in my abilities. It's the perfect place to begin your data journey.",
      rating: 5
    }
  ];

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-sm text-gray-600 text-center">
          Meet Our Team
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 my-4 text-center">
          Success Stories That Inspire
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-8 text-center">
          Watch how our team members transformed their careers with AI Data House
        </p>

        <div className="relative">
          <Swiper
            ref={swiperRef}
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
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    {playingVideo === testimonial.videoId ? (
                      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${testimonial.videoId}?autoplay=1`}
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </div>
                    ) : (
                      <div 
                        className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative group cursor-pointer"
                        onClick={() => handleVideoClick(testimonial.videoId)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${testimonial.videoId}/maxresdefault.jpg`}
                          alt="Video thumbnail"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                          <div className="bg-red-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-green-600">{testimonial.course}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamReviews; 