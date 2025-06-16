'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const VideoReviews = () => {
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
      name: "Taylor Baehm", 
      course: "Owner at Screen Printing NW",
      image: "/clients/taylor.jpg",
      videoId: "PCYijzySyDc",
      description: "Automate his business analysis with custom dashboard with the help of AI Data House."
    },
    {
      id: 2,
      name: "Soham Ray",
      course: "Amazon Marketing Agency",
      image: "/clients/soham.webp",
      videoId: "4yXuTjIyHvo",
      description: "Automate his Amazon Business and Campaign Optimization with the help of AI Data House."
    },
    {
      id: 3,
      name: "Aniya",
      course: "Business Owner",
      image: "/clients/aniya.png",
      videoId: "QQpa_jB0D9o",
      description: "Format and Automate activity calander in Excel with the help of AI Data House"
    },
    {
      id: 4,
      name: "Farhan",
      course: "Business Owner",
      image: "/clients/farhan.png",
      videoId: "_Jkqz-gtIQ4",
      description: "Spreadsheets work Client Review about Ai Data House."
    },
    {
      id: 5,
      name: "Carolyn Schönafinger",
      course: "Founder and Swiss Travel",
      image: "/clients/Carolyn.webp",
      videoId: "YiNpNLSONr0",
      description: "Get a customized Dashboard on Googles Sheets having Custom KPIS."
    }
  ];

  const handleVideoClick = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-sm text-gray-600 text-center">
          Real Stories from Our Clients
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 my-4 text-center">
          Success Stories That Inspire
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-8 text-center">
          Watch how our Clients transformed their Business with AI Data House
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
                            <Play className="text-white" size={24} fill="white" />
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
                      {testimonial.description}
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

export default VideoReviews;
