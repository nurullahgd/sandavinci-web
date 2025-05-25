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
      content: 'Yenibosna Merkez, Şht. Selim Ayaydın Cd., 34197 Bahçelievler/İstanbul',
      link: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14caa533a0812aa7:0xb0fa8e27ced428d1?sa=X&ved=1t:8290&ictx=111'
    },
    // {
    //   icon: 'phone',
    //   title: 'Telefon',
    //   content: '+90 212 555 1234',
    //   link: 'tel:+902125551234'
    // },
    {
      icon: 'envelope',
      title: 'E-posta',
      content: 'destek@sandavinci.com',
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
    <section id="iletişim" className="section bg-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="heading text-center text-primary text-4xl font-bold mb-4">İletişim</h2>
        <p className="subheading text-center max-w-3xl mx-auto text-gray-600 mb-12">
          Bilgi almak, rezervasyon yapmak veya önerilerinizi iletmek için bizimle iletişime geçebilirsiniz
        </p>
        
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                  <div className="bg-primary text-white p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center">
                    <FontAwesomeIcon icon={info.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      target={info.link.startsWith('http') ? "_blank" : ""}
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors duration-300"
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 