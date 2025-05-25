import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const features = [
  {
    icon: 'coffee',
    title: 'Özel Harman Kahveler',
    description: 'Dünyanın dört bir yanından özenle seçilmiş kahve çekirdekleri ile hazırlanan özel harmanlı kahvelerimiz'
  },
  {
    icon: 'utensils',
    title: 'Taze Yiyecekler',
    description: 'Günlük olarak hazırlanan taze ve kaliteli malzemelerle yapılan lezzetli atıştırmalıklar ve tatlılar'
  },
  {
    icon: 'clock',
    title: 'Rahat Atmosfer',
    description: 'Çalışmak, sohbet etmek veya kitap okumak için ideal, rahat ve sıcak bir atmosfer'
  }
]

const About = () => {
  return (
    <section id="hakkımızda" className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Sandavinci Kafe iç mekan" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
             {/* 
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-2xl font-display">2018'den beri<br/>hizmetinizdeyiz</p>
            </div>
            */}
          </div>
          
          {/* Content column */}
          <div>
            <h2 className="heading text-primary">Sandavinci Hakkında</h2>
            <p className="mb-6 text-gray-700">
              Sandavinci, 2018 yılında kahve tutkunları tarafından İstanbul'da kurulmuş bir butik kafedir. İsmimiz, sanatsal yaklaşımımızı ve kahve yapma sanatına olan tutkumuzu yansıtıyor.
            </p>
            <p className="mb-8 text-gray-700">
              Misyonumuz, müşterilerimize yüksek kaliteli kahve deneyimi sunmanın yanında, rahat ve sıcak bir ortamda keyifli vakit geçirebilecekleri bir mekan oluşturmaktır. Her fincan kahve, her tabak yemek özenle hazırlanır ve sunulur.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="p-4 bg-secondary-light rounded-lg hover:bg-secondary transition-colors duration-300">
                  <div className="mb-4 text-accent text-2xl">
                    <FontAwesomeIcon icon={feature.icon} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-primary">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 