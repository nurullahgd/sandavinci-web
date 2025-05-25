import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'Genel Bilgi'
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Burada form gönderme işlemi yapılabilir
    console.log('Form gönderildi:', formData)
    setIsSubmitted(true)
    
    // Demo amaçlı olarak 3 saniye sonra formu sıfırlıyoruz
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'Genel Bilgi'
      })
    }, 3000)
  }
  
  const contactInfo = [
    {
      icon: 'map-marker-alt',
      title: 'Adres',
      content: 'Bağdat Caddesi No:123, Kadıköy, İstanbul',
      link: 'https://goo.gl/maps/1234567890'
    },
    {
      icon: 'phone',
      title: 'Telefon',
      content: '+90 212 555 1234',
      link: 'tel:+902125551234'
    },
    {
      icon: 'envelope',
      title: 'E-posta',
      content: 'iletisim@sandavinci.com',
      link: 'mailto:iletisim@sandavinci.com'
    },
    {
      icon: 'clock',
      title: 'Çalışma Saatleri',
      content: 'Haftaiçi: 08:00 - 22:00\nHaftasonu: 09:00 - 23:00',
      link: null
    }
  ]
  
  return (
    <section id="iletişim" className="section bg-white">
      <div className="container">
        <h2 className="heading text-center text-primary">İletişim</h2>
        <p className="subheading text-center max-w-3xl mx-auto">
          Bilgi almak, rezervasyon yapmak veya önerilerinizi iletmek için bizimle iletişime geçebilirsiniz
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-secondary-light p-8 rounded-lg shadow-md">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-4xl text-green-600 mb-4">
                  <svg className="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Teşekkürler!</h3>
                <p className="text-gray-600">Mesajınızı aldık. En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Adınız Soyadınız *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1">E-posta *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">Konu</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option>Genel Bilgi</option>
                    <option>Rezervasyon</option>
                    <option>İş Başvurusu</option>
                    <option>Öneri/Şikayet</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Mesajınız *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                
                <div>
                  <button type="submit" className="btn btn-primary w-full">
                    Gönder
                  </button>
                </div>
              </form>
            )}
          </div>
          
          {/* Contact Info & Map */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-secondary-light p-4 rounded-lg shadow flex items-start">
                  <div className="mr-4 bg-primary text-white p-3 rounded-full">
                    <FontAwesomeIcon icon={info.icon} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? "_blank" : ""}
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-primary"
                      >
                        {info.content.split('\n').map((line, i) => (
                          <span key={i} className="block">{line}</span>
                        ))}
                      </a>
                    ) : (
                      <p className="text-gray-600">
                        {info.content.split('\n').map((line, i) => (
                          <span key={i} className="block">{line}</span>
                        ))}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Map */}
            <div className="aspect-video bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24087.477094333766!2d29.068837139550777!3d40.96857589394313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17ba89d%3A0xd2d24ea3ad6ec1e3!2zS2FkxLFrw7Z5L8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1656615320565!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sandavinci Kafe Konum"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 