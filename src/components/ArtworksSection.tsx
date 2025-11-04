import { Card } from "@/components/ui/card";
import artwork1 from "@/assets/artwork-sample-1.jpg";
import artwork2 from "@/assets/artwork-sample-2.jpg";
import artwork3 from "@/assets/artwork-sample-3.jpg";

const ArtworksSection = () => {
  const artworks = [
    {
      id: 1,
      title: "Student Gallery Display",
      image: artwork1,
      description: "Vibrant collection of our students' creative works"
    },
    {
      id: 2,
      title: "Watercolor Masterpiece",
      image: artwork2,
      description: "Beautiful landscape painting by our talented student"
    },
    {
      id: 3,
      title: "Anime Character Design",
      image: artwork3,
      description: "Creative character illustration from our cartoon class"
    },
  ];

  return (
    <section id="artworks" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Artworks
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the amazing creations from our talented young artists
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <Card
              key={artwork.id}
              className="overflow-hidden group hover:shadow-artistic transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {artwork.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {artwork.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtworksSection;
