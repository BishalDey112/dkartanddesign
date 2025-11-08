import heroVideo from "@/assets/hero-video.mp4";
import profilePhoto from "@/assets/profile-photo.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden text-white"
    >
      {/* === BACKGROUND VIDEO === */}
      <div className="absolute inset-0">
        <video
  src="https://res.cloudinary.com/dubgchxko/video/upload/v1/2025634-hd_1280_720_25fps_wshq0t.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover brightness-[0.45]"
/>

      </div>

      {/* === MAIN CONTENT (Text Overlay Box) === */}
      <div className="relative z-10 px-6 md:px-12 max-w-3xl text-center flex flex-col items-center justify-center h-full">
        {/* Semi-transparent blur behind text for readability */}
        <div className="backdrop-blur-[6px] bg-black/25 px-6 py-8 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.4)]">
          {/* <img
            src={logo}
            alt="DK Art Logo"
            className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.7)] animate-fadeInUp"
          /> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide leading-tight animate-fadeInUp drop-shadow-[0_3px_15px_rgba(0,0,0,0.9)]">
            DK Art & Design Institute
          </h1>
          <p className="text-gray-100 text-base sm:text-lg md:text-xl font-light mt-3 max-w-xl mx-auto animate-fadeInUp delay-500">
            Where Creativity Begins, and Imagination Has No Limits.
          </p>
        </div>
      </div>

      {/* === FLOATING PROFILE SECTION === */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row items-center gap-4 md:left-16 md:translate-x-0 animate-fadeInUp delay-700">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-400 via-purple-500 to-blue-400 opacity-80 blur-md animate-pulse" />
          <img
            src={profilePhoto}
            alt="DK Art Profile"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white/40 shadow-2xl object-cover relative z-10 hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold drop-shadow-lg">
            Welcome to DK Art
          </h2>
          <p className="text-gray-200 text-sm sm:text-base">
            Nurturing Young Artists in Diphu, Assam
          </p>
        </div>
      </div>

      {/* === ANIMATIONS === */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1.4s ease-out forwards;
        }
        .animate-slowZoom {
          animation: slowZoom 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
