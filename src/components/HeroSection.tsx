import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import logo from "@/assets/logo.png";

import banner1 from "@/assets/hero1.jpg";
import banner2 from "@/assets/hero2.jpg";
import banner3 from "@/assets/hero3.jpg";

const HeroSection = () => {
  const slides = [
    {
      image: banner1,
      link: "https://example.com/gallery",
      title: "Immerse in Colors & Imagination",
      subtitle: "Discover the soul of creativity at DK Art.",
    },
    {
      image: banner2,
      link: "https://example.com/courses",
      title: "Craft Your Vision Into Reality",
      subtitle: "Master the art of design with guidance and passion.",
    },
    {
      image: banner3,
      link: "https://example.com/about",
      title: "Inspire. Create. Transform.",
      subtitle: "Join the community of passionate young artists.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id="home"
      className="relative w-full h-[50vh] md:h-[55vh] overflow-hidden text-white flex flex-col justify-center"
    >
      {/* === SLIDER IMAGES === */}
      {slides.map((slide, index) => (
        <a
          key={index}
          href={slide.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`absolute inset-0 transition-all duration-[1000ms] ease-in-out ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 rounded-xl"></div>

          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold tracking-wide mb-1 md:mb-2 drop-shadow-[0_4px_25px_rgba(0,0,0,0.9)] animate-fadeInDown">
              {slide.title}
            </h1>
            <p className="text-xs sm:text-sm md:text-lg text-gray-200 animate-fadeInUp">
              {slide.subtitle}
            </p>
          </div>
        </a>
      ))}

      {/* === SLIDER CONTROLS === */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-2 md:p-3 rounded-full backdrop-blur-md transition-all duration-300"
      >
        ❯
      </button>

      {/* === SLIDER DOTS === */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all ${
              index === current
                ? "bg-gradient-to-r from-pink-400 to-blue-400 scale-125"
                : "bg-gray-400/60 hover:bg-gray-300/80"
            }`}
          ></div>
        ))}
      </div>

      {/* === PROFILE SECTION === */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center md:flex-row md:left-16 md:translate-x-0 gap-2 md:gap-4 z-40 animate-fadeInUp">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-blue-400 opacity-70 blur-sm animate-pulse" />
          <img
            src={profilePhoto}
            alt="DK Art Profile"
            className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 md:border-4 border-white/40 shadow-xl object-cover relative z-10"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-sm md:text-lg font-semibold drop-shadow-lg">
            Welcome to DK Art
          </h2>
          <p className="text-gray-200 text-[10px] sm:text-xs md:text-base">
            Nurturing Young Artists in Diphu, Assam
          </p>
        </div>
      </div>

      {/* === ANIMATIONS === */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(255,255,255,0.7)); }
          50% { filter: drop-shadow(0 0 25px rgba(255,255,255,1)); }
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 1.2s ease-out; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;
