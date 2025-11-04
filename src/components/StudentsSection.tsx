import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import priyaImg from "@/assets/student-priya.jpg";
import rahulImg from "@/assets/student-rahul.jpg";
import ananyaImg from "@/assets/student-ananya.jpg";
import arjunImg from "@/assets/student-arjun.jpg";

const StudentsSection = () => {
  const students = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 10,
      image: priyaImg,
      specialty: "Watercolor Painting",
      achievement: "First Prize - District Art Competition"
    },
    {
      id: 2,
      name: "Rahul Das",
      age: 12,
      image: rahulImg,
      specialty: "Cartoon Design",
      achievement: "Best Character Design Award"
    },
    {
      id: 3,
      name: "Ananya Singh",
      age: 8,
      image: ananyaImg,
      specialty: "Creative Drawing",
      achievement: "Young Artist Recognition"
    },
    {
      id: 4,
      name: "Arjun Patel",
      age: 11,
      image: arjunImg,
      specialty: "Oil Pastels",
      achievement: "Excellence in Color Theory"
    },
  ];

  return (
    <section id="students" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Talented Students
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the young artists who make us proud with their creativity and dedication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {students.map((student, index) => (
            <Card
              key={student.id}
              className="p-6 hover:shadow-artistic transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-accent/30">
                  <img 
                    src={student.image} 
                    alt={student.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-1">
                  {student.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Age: {student.age} years
                </p>
                <Badge variant="secondary" className="mb-3">
                  {student.specialty}
                </Badge>
                <div className="flex items-start gap-2 mt-4 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{student.achievement}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;
