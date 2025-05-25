import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: 'Hızlı Erişim',
      links: [
        { name: 'Ana Sayfa', url: '#ana-sayfa' },
        { name: 'Menümüz', url: 'https://qr.sandavinci.net' },
        { name: 'Hakkımızda', url: '#about-us' },
        { name: 'İletişim', url: '#iletişim' }
      ]
    },
    {
      title: 'İletişim',
      links: [
        { name: 'Yenibosna Merkez, Şht. Selim Ayaydın Cd.', url: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14caa533a0812aa7:0xb0fa8e27ced428d1?sa=X&ved=1t:8290&ictx=111' },
        { name: 'Bahçelievler, İstanbul', url: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x14caa533a0812aa7:0xb0fa8e27ced428d1?sa=X&ved=1t:8290&ictx=111' },
        // { name: '+90 212 555 1234', url: 'tel:+902125551234' },
        { name: 'destek@sandavinci.com', url: 'mailto:destek@sandavinci.com' }
      ]
    }
  ]
  
  const socialLinks = [
    // { icon: ['fab', 'facebook'], url: 'https://facebook.com/sandavincicafe' },
    { icon: ['fab', 'instagram'], url: 'https://www.instagram.com/sandavinci.coffee/' },
    // { icon: ['fab', 'twitter'], url: 'https://twitter.com/sandavincicafe' }
  ]
  
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-4">Sandavinci</h2>
            <p className="mb-6 text-secondary-light">
              Özel kahve çeşitleri ve lezzetli atıştırmalıklar sunan butik kafemizde sizi ağırlamaktan mutluluk duyarız.
            </p>
            
            {/* Social media */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-accent transition-colors duration-300 h-10 w-10 rounded-full flex items-center justify-center"
                  aria-label={`Bizi ${link.icon[1]}'da takip edin`}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-4 text-white">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-secondary-light hover:text-white transition-colors"
                      {...(link.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <hr className="border-primary-light my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-secondary-light text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sandavinci Kafe. Tüm hakları saklıdır.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-secondary-light">
            <a href="/privacy" className="hover:text-white transition-colors">Gizlilik</a>
            <span>|</span>
            <a href="/terms" className="hover:text-white transition-colors">Koşullar</a>
            <span>|</span>
            <a href="/cookies" className="hover:text-white transition-colors">Çerezler</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 