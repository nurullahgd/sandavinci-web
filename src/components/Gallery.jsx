import React, { useState } from 'react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Kafenin dış mekanı',
    categories: ['mekan']
  },
  {
    src: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Özenle hazırlanmış kahve',
    categories: ['kahve']
  },
  {
    src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Kafenin iç mekanı',
    categories: ['mekan']
  },
  {
    src: 'https://images.unsplash.com/photo-1517231925375-bf2cb42917a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Latte Art',
    categories: ['kahve']
  },
  {
    src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Pasta dilimi',
    categories: ['yemek']
  },
  {
    src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Kahve çekirdekleri',
    categories: ['kahve']
  },
  {
    src: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Cheesecake',
    categories: ['yemek']
  },
  {
    src: 'https://images.unsplash.com/photo-1518057111178-44a106bad149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    alt: 'Barista kahve hazırlıyor',
    categories: ['kahve', 'ekip']
  }
]

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('tümü')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  
  const categories = ['tümü', 'kahve', 'yemek', 'mekan', 'ekip']
  
  const filteredImages = selectedCategory === 'tümü'
    ? galleryImages
    : galleryImages.filter(img => img.categories.includes(selectedCategory))
  
  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }
  
  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = 'auto'
  }
  
  const nextImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev + 1) % filteredImages.length)
  }
  
  const prevImage = (e) => {
    e.stopPropagation()
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }
  
  return (
    <section id="galeri" className="section bg-secondary">
      <div className="container">
        <h2 className="heading text-center text-primary">Galeri</h2>
        <p className="subheading text-center max-w-3xl mx-auto text-gray-600">
          Kafemizden kareler ve lezzetli ürünlerimizin fotoğrafları
        </p>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category 
                ? 'bg-primary text-white' 
                : 'bg-white text-primary hover:bg-secondary-light'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 relative group"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-4 right-4 text-white text-4xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              onClick={prevImage}
            >
              &#10094;
            </button>
            
            <img 
              src={filteredImages[currentImage].src} 
              alt={filteredImages[currentImage].alt} 
              className="max-h-[80vh] max-w-[80vw] object-contain"
            />
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
              onClick={nextImage}
            >
              &#10095;
            </button>
            
            <div className="absolute bottom-4 text-white text-center left-0 right-0">
              {filteredImages[currentImage].alt}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery 