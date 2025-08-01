import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // Server screenshots matching the images you provided
  const screenshots = [
    {
      id: 1,
      title: "VIP Crate Rewards Interface",
      description: "VIP rewards crate opening interface showing exclusive items and equipment",
      category: "Rewards",
      thumbnail: "https://images.unsplash.com/photo-1511915342286-6c7b64e35c91?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1511915342286-6c7b64e35c91?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "CATS Crate Rewards Menu", 
      description: "CATS themed crate rewards featuring custom blocks and special decorative items",
      category: "Rewards",
      thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "BoxPvP Crate System",
      description: "BoxPvP exclusive crate containing combat gear and rare PvP equipment",
      category: "PvP",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Pokemon Themed Arena",
      description: "Custom Pokemon arena with detailed pixel art decorations and battle zones",
      category: "Arena",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "CATS BoxPvP Main Arena",
      description: "Primary BoxPvP combat arena with professional design and advanced mechanics",
      category: "PvP",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Resource Mining Area",
      description: "Advanced mining chambers with rare ore generation and custom mechanics",
      category: "Mining",
      thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
    }
  ];

  const categories = ["All", "PvP", "Rewards", "Arena", "Mining"];

  const filteredScreenshots = activeCategory === "All" 
    ? screenshots 
    : screenshots.filter(shot => shot.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredScreenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredScreenshots.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Server Gallery
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore screenshots from our Minecraft server features and gameplay
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center gap-2 text-muted-foreground mr-4">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredScreenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className="professional-card overflow-hidden cursor-pointer group hover-lift fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(index)}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={screenshot.thumbnail}
                  alt={screenshot.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-background/90 backdrop-blur-sm rounded text-xs font-medium border">
                  {screenshot.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {screenshot.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center">
          <div className="professional-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Gameplay Videos
            </h3>
            <p className="text-muted-foreground mb-6">
              Watch PvP battles, server tours, and community events
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <div className="px-6 py-3 bg-muted rounded-lg text-muted-foreground">
                Server Trailer - Coming Soon
              </div>
              <div className="px-6 py-3 bg-muted rounded-lg text-muted-foreground">
                Tournament Highlights
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full fade-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            {filteredScreenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image */}
            <div 
              className="relative rounded-lg overflow-hidden bg-background"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={filteredScreenshots[selectedImage].fullsize}
                alt={filteredScreenshots[selectedImage].title}
                className="max-w-full max-h-[70vh] object-contain mx-auto block"
              />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center text-white">
              <div className="bg-background/90 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {filteredScreenshots[selectedImage].title}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {filteredScreenshots[selectedImage].description}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="px-2 py-1 bg-muted rounded text-muted-foreground">
                    {filteredScreenshots[selectedImage].category}
                  </span>
                  <span className="text-muted-foreground">
                    {selectedImage + 1} / {filteredScreenshots.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;