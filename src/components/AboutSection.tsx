import { Card } from "@/components/ui/card";
import { MapPin, Phone, Calendar, Sparkles, Users, Award, Palette } from "lucide-react";
import studentsGroupBanner from "@/assets/students-group-banner.jpg";

const AboutSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Creative & Fun Learning",
      description: "Designed for children aged 3 to 14 years"
    },
    {
      icon: Users,
      title: "Professional Guidance",
      description: "Learn from experienced artists"
    },
    {
      icon: Award,
      title: "Exhibitions & Events",
      description: "Regular art displays and competitions"
    },
  ];

  const courses = [
    "Drawing & Coloring (Beginner to Advanced)",
    "Cartoon & Anime Character Design",
    "Creative Composition & Scene Drawing",
    "Painting with Watercolor, Crayons & Oil Pastels",
    "Festival & Theme-Based Art Projects"
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About DK Art & Design Institute
          </h2>
          <p className="text-xl text-primary font-semibold mb-4">
            🎨 Our Motto: Learn, Create & Inspire!
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 shadow-artistic animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At DK Art & Design Institute, we believe every child is born with creativity — 
              all it needs is the right guidance to shine. Located at Erudite Academy, Basic School Road, 
              near DTC Office, Diphu, Assam, our institute nurtures young artists through fun, 
              structured, and skill-building art programs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-artistic flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Students Group Photo Banner */}
          <div className="mt-8 animate-fade-in">
            <div className="rounded-xl overflow-hidden shadow-artistic">
              <img 
                src={studentsGroupBanner} 
                alt="DK Art & Design Institute Students Group Photo"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-muted-foreground mt-4 text-sm">
              Our talented students proudly displaying their artworks
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Courses */}
          <Card className="p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Palette className="w-6 h-6 text-primary" />
              Our Courses
            </h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{course}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Contact Info */}
          <Card className="p-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Visit Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">
                    Erudite Academy, Basic School Road<br />
                    Near DTC Office, Diphu, Assam
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Contact</p>
                  <p className="text-muted-foreground">
                    Call or WhatsApp: +91 9864894388
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-foreground">Enrollment</p>
                  <p className="text-muted-foreground">
                    📅 Registrations Now Open!<br />
                    ⚡ Limited Seats – Enroll Today!
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-artistic text-white shadow-artistic animate-fade-in">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              🌟 Join the Creative Revolution!
            </h3>
            <p className="text-lg">
              Let your child discover the joy of colors, imagination, and expression with 
              DK Art & Design Institute — where every brushstroke tells a story.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
