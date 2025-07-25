import { useState } from 'react';
import { Image, Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Mock data - gerçek projede bu resimler public/images klasöründe olmalı
  const screenshots = [
    {
      id: 1,
      title: "Main Arena",
      description: "The primary BoxPvP arena where most battles take place",
      thumbnail: "/api/placeholder/400/300",
      fullsize: "/api/placeholder/800/600"
    },
    {
      id: 2,
      title: "Kit Selection",
      description: "Choose your preferred kit before entering battle",
      thumbnail: "/api/placeholder/400/300",
      fullsize: "/api/placeholder/800/600"
    },
    {
      id: 3,
      title: "Tournament Mode",
      description: "Competitive tournament bracket system",
      thumbnail: "/api/placeholder/400/300",
      fullsize: "/api/placeholder/800/600"
    },
    {
      id: 4,
      title: "PvP Action",
      description: "Intense player vs player combat in action",
      thumbnail: "/api/placeholder/400/300",
      fullsize: "/api/placeholder/800/600"
    },
    {
      id: 5,
      title: "Victory Screen",
      description: "Celebrate your wins with style",
      thumbnail: "/api/placeholder/400/300",
      fullsize: "/api/placeholder/800/600"
    },
    {
      id: 6,
      title: "Server Lobby",
      description: "Modern lobby design with information boards",
      thumbnail: "/api/placeholder/400/300",
      fullsize: "/api/placeholder/800/600"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? screenshots.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Gallery
          </h2>
          <p className="text-xl text-muted-foreground">
            Screenshots and videos from CatsBoxPVP
          </p>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className="glass-card overflow-hidden hover:scale-105 transition-all duration-500 group cursor-pointer"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in-up 0.6s ease-out forwards'
              }}
              onClick={() => openModal(index)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video">
                {/* Placeholder for actual images */}
                <div className="w-full h-full bg-gradient-to-br from-gaming-primary/20 to-gaming-secondary/20 flex items-center justify-center">
                  <Image className="w-12 h-12 text-gaming-primary/60" />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gaming-dark/0 group-hover:bg-gaming-dark/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gaming-dark/80 to-transparent p-4">
                  <h3 className="text-white font-bold">{screenshot.title}</h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-4">
                <p className="text-muted-foreground text-sm">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Play className="w-6 h-6 text-gaming-primary" />
              <h3 className="text-2xl font-bold gradient-text">
                Gameplay Videos
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Watch gameplay videos, tutorials, and tournament highlights.
            </p>
            <div className="px-6 py-3 rounded-lg border border-gaming-accent/30 text-gaming-accent font-bold inline-block">
              Videos Coming Soon
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gaming-dark/80 flex items-center justify-center text-white hover:bg-gaming-dark transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gaming-dark/80 flex items-center justify-center text-white hover:bg-gaming-dark transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-gaming-dark/80 flex items-center justify-center text-white hover:bg-gaming-dark transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image */}
            <div 
              className="bg-gradient-to-br from-gaming-primary/20 to-gaming-secondary/20 aspect-video rounded-lg flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image className="w-16 h-16 text-gaming-primary/60" />
            </div>

            {/* Image Info */}
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-bold mb-2">
                {screenshots[selectedImage].title}
              </h3>
              <p className="text-gray-300">
                {screenshots[selectedImage].description}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {selectedImage + 1} / {screenshots.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;