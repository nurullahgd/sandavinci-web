import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
  return (
    <section id="ana-sayfa" className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')"
        }}
      ></div>

      <div className="container relative z-20 text-white">
        <div className="max-w-2xl md:mx-auto md:text-center">
          <h1 className="heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-fadeIn">
            Sandavinci'de lezzet <br/>sanatla buluşuyor
          </h1>
          <p className="subheading text-xl md:text-2xl text-secondary-light mb-8 animate-fadeIn">
            Özel kahve çeşitleri, lezzetli atıştırmalıklar ve sıcak atmosferimizle sizi ağırlamaktan mutluluk duyarız.
          </p>
          <div className="flex flex-col gap-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:justify-center">
              <a href="#menü" className="btn btn-primary">
                <FontAwesomeIcon icon="coffee" className="mr-2" />
                Menümüzü Keşfedin
              </a>
              <a href="#iletişim" className="btn bg-white text-primary hover:bg-secondary">
                <FontAwesomeIcon icon="phone" className="mr-2" />
                İletişime Geçin
              </a>
            </div>
            
            {/* Responsive Keşfet Button */}
            <div className="w-full flex justify-center lg:hidden xl:hidden xl:flex lg:justify-end mt-2 sm:mt-4">
              <a href="#menü" className="text-white flex flex-col items-center group hover:text-secondary transition-colors">
                <span className="block mb-2 text-sm sm:text-base md:text-lg">Keşfet</span>
                <svg className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce group-hover:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 