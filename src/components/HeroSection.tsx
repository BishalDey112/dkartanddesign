import heroBanner from "@/assets/hero-banner.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  // Replace this with your actual advertisement URL
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
        <img
          src={heroBanner}
          alt="DK Art Banner"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60 group-hover:opacity-50 transition-opacity" />
        
        {/* Banner text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
              DK Art & Design Institute
            </h1>
            <p className="text-lg md:text-2xl drop-shadow-md">
              Where Creativity Begins, and Imagination Has No Limits!
            </p>
          </div>
        </div>
      </a>

      {/* Profile Photo */}
      <div className="container mx-auto px-4">
        <div className="relative -mt-16 md:-mt-20 flex justify-center md:justify-start md:ml-8">
          <div className="relative">
            <img
              src={profilePhoto}
              alt="DK Art Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-card shadow-artistic object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-artistic opacity-0 hover:opacity-20 transition-opacity" />
          </div>
        </div>
        
        <div className="text-center md:text-left md:ml-8 mt-4 pb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Welcome to DK Art
          </h2>
          <p className="text-muted-foreground mt-1">
            Nurturing Young Artists in Diphu, Assam
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
