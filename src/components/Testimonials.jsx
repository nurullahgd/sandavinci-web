import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Grafik Tasarımcı',
    quote: 'Sandavinci, İstanbul\'da favori çalışma mekanım. Kahveleri harika, atmosferi ilham verici ve personeli her zaman güleryüzlü.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5
  },
  {
    name: 'Mehmet Kaya',
    role: 'Yazılım Geliştirici',
    quote: 'Evden çalışmaktan sıkıldığım günlerde Sandavinci\'ye geliyorum. Hızlı wifi, lezzetli kahveler ve sessiz ortam, verimli çalışmam için ideal.',
    image: 'https://randomuser.me/api/portraits/men/46.jpg',
    stars: 5
  },
  {
    name: 'Zeynep Demir',
    role: 'Edebiyat Öğrencisi',
    quote: 'Kitap okumak için harika bir mekan. Cappuccino ve cheesecake\'leri mutlaka denemelisiniz! Hafta sonları biraz kalabalık olabiliyor.',
    image: 'https://randomuser.me/api/portraits/women/63.jpg',
    stars: 4
  }
]

const Testimonials = () => {
  return (
    <section id="görüşler" className="section bg-primary text-white">
      <div className="container">
        <h2 className="heading text-center text-white">Müşteri Görüşleri</h2>
        <p className="subheading text-center max-w-3xl mx-auto text-secondary-light">
          Müşterilerimizin Sandavinci deneyimleri hakkında ne söylediklerini okuyun
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-primary-dark p-6 rounded-lg relative">
              {/* Quote mark */}
              <div className="absolute -top-4 -left-2 text-accent text-6xl opacity-20">"</div>
              
              <div className="flex items-center mb-4 relative z-10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-accent"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-secondary-light text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="mb-4 relative z-10">{testimonial.quote}</p>
              
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon 
                    key={i} 
                    icon="star" 
                    className={i < testimonial.stars ? 'opacity-100' : 'opacity-30'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://g.page/sandavinci/review" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary inline-flex items-center"
          >
            <span>Google'da Değerlendirin</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 