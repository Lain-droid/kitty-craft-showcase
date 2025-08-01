import { useState } from 'react';
import { Image, Play, X, ChevronLeft, ChevronRight, Gamepad2, Trophy, Users } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Minecraft server screenshots with actual descriptions
  const screenshots = [
    {
      id: 1,
      title: "VIP KASASI Rewards",
      description: "Exclusive VIP crate rewards with powerful items and special kits",
      category: "Rewards",
      thumbnail: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "CATS KASASI Rewards", 
      description: "Special CATS themed rewards including unique blocks and decorative items",
      category: "Rewards",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "BOXPVP KASASI Rewards",
      description: "Premium BoxPVP crate with exclusive combat gear and rare items",
      category: "PVP",
      thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Pokemon Arena",
      description: "Stunning Pokemon-themed arena with detailed pixel art and interactive elements",
      category: "Arena",
      thumbnail: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop", 
      fullsize: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "KATS BOXPVP Arena",
      description: "The ultimate BoxPVP experience with advanced combat mechanics and beautiful design",
      category: "PVP",
      thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Mining Chamber",
      description: "Rich mining areas with rare ores and custom generation algorithms",
      category: "Mining",
      thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      fullsize: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
    }
  ];

  const categories = [
    { name: "All", icon: Gamepad2 },
    { name: "PVP", icon: Trophy },
    { name: "Rewards", icon: Users },
    { name: "Arena", icon: Gamepad2 },
    { name: "Mining", icon: Users }
  ];

  const [activeCategory, setActiveCategory] = useState("All");

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
    <section id="gallery" className="py-20 px-4 relative">
      {/* Background particles */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4 text-glow">
            Server Gallery
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Explore the stunning worlds and features of CatsBoxPVP
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.name
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105'
                      : 'glass-effect text-purple-300 hover:text-white hover:bg-purple-600/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredScreenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className="card-hover glass-effect overflow-hidden cursor-pointer group scale-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => openModal(index)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-video image-hover">
                <img 
                  src={screenshot.thumbnail}
                  alt={screenshot.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                  {screenshot.category}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full bg-purple-600/90 backdrop-blur-sm flex items-center justify-center glow-effect">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
                  <h3 className="text-white font-bold text-lg mb-1">{screenshot.title}</h3>
                  <p className="text-gray-300 text-sm line-clamp-2">{screenshot.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center">
          <div className="card-hover glass-effect p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center pulse-glow">
                <Play className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold gradient-text">
                Gameplay Videos
              </h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              Watch epic PvP battles, server tours, and exclusive content from our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="px-8 py-4 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 font-semibold inline-block">
                Coming Soon: Server Trailer
              </div>
              <div className="px-8 py-4 rounded-lg bg-purple-600/20 border border-purple-500/30 text-purple-300 font-semibold inline-block">
                Tournament Highlights
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] fade-in">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 hover-glow"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {filteredScreenshots.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 hover-glow"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/90 transition-all duration-300 hover-glow"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image */}
            <div 
              className="relative rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={filteredScreenshots[selectedImage].fullsize}
                alt={filteredScreenshots[selectedImage].title}
                className="max-w-full max-h-[70vh] object-contain rounded-xl"
              />
            </div>

            {/* Image Info */}
            <div className="mt-6 text-center text-white">
              <div className="glass-effect p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2 gradient-text">
                  {filteredScreenshots[selectedImage].title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {filteredScreenshots[selectedImage].description}
                </p>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="px-3 py-1 bg-purple-600/30 rounded-full">
                    {filteredScreenshots[selectedImage].category}
                  </span>
                  <span className="text-gray-400">
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