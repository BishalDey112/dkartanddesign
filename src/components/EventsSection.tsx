import { Card } from "@/components/ui/card";
import eventSample from "@/assets/event-sample-1.jpg";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Annual Art Exhibition 2024",
      image: eventSample,
      date: "December 2024",
      description: "Showcasing our students' best artworks from the year",
      url: "https://example.com/exhibition-2024" // Replace with your actual URL
    },
    {
      id: 2,
      title: "Outdoor Photography Workshop",
      image: eventSample,
      date: "Coming Soon",
      description: "Learn professional photography techniques in nature",
      url: "https://example.com/photography-workshop" // Replace with your actual URL
    },
    {
      id: 3,
      title: "Festival Art Competition",
      image: eventSample,
      date: "Ongoing",
      description: "Theme-based art competition with exciting prizes",
      url: "https://example.com/art-competition" // Replace with your actual URL
    },
  ];

  return (
    <section id="events" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Events & Photography
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Capturing moments of creativity, exhibitions, and special workshops
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <a
              key={event.id}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="overflow-hidden group hover:shadow-artistic transition-all duration-300 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {event.date}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
