import { Card } from "@/components/ui/card";
import principalImg from "@/assets/team-principal.jpg";
import assistantImg from "@/assets/team-assistant.jpg";
import guestImg from "@/assets/team-guest.jpg";

const TeamSection = () => {
  const team = [
    {
      id: 1,
      name: "Principal Instructor",
      role: "Founder & Lead Artist",
      image: principalImg,
      description: "Expert in traditional and modern art techniques with 15+ years of experience"
    },
    {
      id: 2,
      name: "Assistant Instructor",
      role: "Drawing & Sketching Specialist",
      image: assistantImg,
      description: "Specialized in foundational art skills and character design"
    },
    {
      id: 3,
      name: "Guest Instructor",
      role: "Professional Artist",
      image: guestImg,
      description: "Award-winning artist conducting special workshops and masterclasses"
    },
  ];

  return (
    <section id="team" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experienced artists dedicated to nurturing creativity in every child
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={member.id}
              className="p-6 hover:shadow-artistic transition-all duration-300 animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-2">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-3">
                {member.role}
              </p>
              <p className="text-sm text-muted-foreground">
                {member.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
