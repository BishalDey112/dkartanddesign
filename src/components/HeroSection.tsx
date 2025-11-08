import heroBanner from "@/assets/hero-banner.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const advertisementUrl = "https://example.com/your-advertisement";

  return (
    <section id="home" className="relative">
      {/* Banner - Clickable for advertisements */}
      <a
        href={advertisementUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative h-64 md:h-80 overflow-hidden group"
      >
        {/* Banner Image */}
        <img
          src={heroBanner}
          alt="DK Art Banner"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay for depth and clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Centered Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <div className="flex items-center justify-center gap-3 mb-2 animate-fadeInDown">
            <img
              src={logo}
              alt="DK Art Logo"
              className="w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_4px_10px_rgba(255,255,255,0.4)] transform hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-xl tracking-wide bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-glow">
              DK Art & Design Institute
            </h1>
          </div>
          <p className="text-base md:text-xl text-gray-200 drop-shadow-md animate-fadeInUp">
            Where Creativity Begins, and Imagination Has No Limits!
          </p>
        </div>

        {/* Light Sweep Animation */}
        <div className="absolute inset-0 pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] group-hover:before:translate-x-[100%] before:transition-transform before:duration-[1.8s]" />
      </a>

      {/* Profile Section */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-14 md:-mt-16 flex justify-center md:justify-start md:ml-8">
          <div className="relative group">
            <img
              src={profilePhoto}
              alt="DK Art Profile"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white/20 shadow-2xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/40 to-blue-500/40 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
          </div>
        </div>

        <div className="text-center md:text-left md:ml-8 mt-4 pb-10">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-glow-slow">
            Welcome to DK Art
          </h2>
          <p className="text-gray-400 mt-1">
            Nurturing Young Artists in Diphu, Assam
          </p>
        </div>
      </div>

      {/* Glow Animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 8px rgba(255,255,255,0.6)); }
          50% { filter: drop-shadow(0 0 16px rgba(255,255,255,0.9)); }
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
        .animate-glow { animation: glow 2.5s ease-in-out infinite; }
        .animate-glow-slow { animation: glow 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default HeroSection;
