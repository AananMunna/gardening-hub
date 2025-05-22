import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { Fade, Slide } from "react-awesome-reveal";

// High-quality gardening event images
const slideData = [
  {
    image:
      "https://images.unsplash.com/photo-1599598177991-ec67b5c37318?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Blooming Festival 2025",
    subtitle: "Celebrate Spring in Full Color",
    description:
      "Join our 3-day extravaganza with flower arranging competitions, garden tours, and expert workshops.",
    buttonText: "Get Tickets",
    date: "May 20-22, 2025",
    badge: "New Event",
  },
  {
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Urban Garden Summit",
    subtitle: "Small Space, Big Harvest",
    description:
      "Learn vertical gardening techniques and balcony farming from urban agriculture specialists.",
    buttonText: "Register Now",
    date: "June 10, 2025",
    badge: "Popular",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    title: "Composting Workshop",
    subtitle: "Turn Waste to Garden Gold",
    description:
      "Hands-on training for creating nutrient-rich compost for your organic garden.",
    buttonText: "Join Workshop",
    date: "July 5, 2025",
    badge: "Limited Seats",
  },
];

export default function Hero() {
  const handleClick = () => {
    Swal.fire({
      title: "Enter your phone number",
      input: "tel",
      inputAttributes: {
        placeholder: "e.g., 017XXXXXXXX",
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Submit",
      showLoaderOnConfirm: true,
      preConfirm: async (phone) => {
        if (!phone || !/^\d{10,15}$/.test(phone)) {
          Swal.showValidationMessage("Please enter a valid phone number");
        }
        return phone;
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Thank you!",
          text: "Our team will contact with you",
        });
      }
    });
  };
  return (
    <section className="relative overflow-hidden rounded-b-3xl shadow-2xl dark:bg-green-950">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="h-screen max-h-[800px] w-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-green-700/30 dark:from-green-950/80 dark:to-green-900/30"></div>

              {/* Animated floating leaves decoration */}
              <div className="absolute top-20 left-10 w-16 h-16 opacity-70 animate-float1">
                <svg
                  viewBox="0 0 512 512"
                  className="text-emerald-300/50 dark:text-emerald-200/40"
                >
                  <path
                    fill="currentColor"
                    d="M289.58 21.55c-16.8-28.74-58.35-28.74-75.15 0C175.89 77.44 80 234.43 80 307.18a112.45 112.45 0 00224.9 0c0-72.75-95.89-229.74-15.32-285.63z"
                  />
                </svg>
              </div>

              <div className="absolute bottom-40 right-16 w-12 h-12 opacity-60 animate-float2">
                <svg
                  viewBox="0 0 512 512"
                  className="text-emerald-200/60 dark:text-emerald-100/50"
                >
                  <path
                    fill="currentColor"
                    d="M289.58 21.55c-16.8-28.74-58.35-28.74-75.15 0C175.89 77.44 80 234.43 80 307.18a112.45 112.45 0 00224.9 0c0-72.75-95.89-229.74-15.32-285.63z"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-6 lg:px-12">
                  <div className="max-w-2xl backdrop-blur-sm bg-white/90 dark:bg-gray-900/80 p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-800/40 transform transition-all duration-700 hover:scale-[1.02]">
                    {slide.badge && (
                      <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-wider text-green-800 bg-green-200 dark:text-green-200 dark:bg-green-900/40 rounded-full shadow-md">
                        {slide.badge}
                      </span>
                    )}
                    <Fade direction="down" triggerOnce>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 dark:text-green-200 mb-3 leading-tight">
                        {slide.title}
                      </h1>
                    </Fade>
                    {/* <h2 className="text-2xl md:text-3xl font-semibold text-green-700 dark:text-green-300 mb-4">
                  {slide.subtitle}
                </h2> */}
                    <Slide direction="up" triggerOnce delay={300}>
                      <h2 className="text-2xl md:text-3xl font-semibold text-green-700 dark:text-green-300 mb-4">
                        <Typewriter
                          words={[slide.subtitle]}
                          loop={false}
                          cursor
                          cursorStyle="|"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={2000}
                        />
                      </h2>
                    </Slide>
                    <Fade delay={600} triggerOnce>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg">
                        {slide.description}
                      </p>
                    </Fade>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <button
                        onClick={handleClick}
                        className="px-8 py-4 cursor-pointer bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      >
                        {slide.buttonText}
                      </button>
                      <div className="flex items-center gap-2">
                        <svg
                          className="w-6 h-6 text-green-600 dark:text-green-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-lg font-medium text-green-700 dark:text-green-300">
                          {slide.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Arrows */}
        <div className="swiper-button-next !hidden md:!flex !right-8 !text-green-600 dark:!text-green-300 !bg-white/90 dark:!bg-green-950/80 !w-14 !h-14 rounded-full shadow-lg after:!text-xl hover:!bg-white dark:hover:!bg-green-900"></div>
        <div className="swiper-button-prev !hidden md:!flex !left-8 !text-green-600 dark:!text-green-300 !bg-white/90 dark:!bg-green-950/80 !w-14 !h-14 rounded-full shadow-lg after:!text-xl hover:!bg-white dark:hover:!bg-green-900"></div>
      </Swiper>

      {/* Custom styles and animations */}
      <style jsx global>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0) rotate(10deg);
          }
          50% {
            transform: translateY(15px) rotate(-5deg);
          }
        }
        .animate-float1 {
          animation: float1 8s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 6s ease-in-out infinite 2s;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.8;
          width: 10px;
          height: 10px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #10b981;
          width: 30px;
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
}
