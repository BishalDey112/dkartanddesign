import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ArtworksSection from "@/components/ArtworksSection";
import StudentsSection from "@/components/StudentsSection";
import TeamSection from "@/components/TeamSection";
import EventsSection from "@/components/EventsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ArtworksSection />
      <StudentsSection />
      <TeamSection />
      <EventsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
