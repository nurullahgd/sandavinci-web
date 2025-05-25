import React, { useState } from 'react'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Helper function to convert section names to ID format
  const getSectionId = (name) => {
    const idMap = {
      'Ana Sayfa': 'ana-sayfa',
      'Menü': 'menü',
      'Hakkımızda': 'hakkımızda',
      'İletişim': 'iletişim'
    };
    return idMap[name] || name.toLowerCase().replace(' ', '-');
  };

  // Navigation items
  const navItems = ['Ana Sayfa', 'Menü', 'Hakkımızda', 'İletişim', 'Google\'da değerlendirin'];
  
  // Mobile navigation items (without Google review link)
  const mobileNavItems = ['Ana Sayfa', 'Menü', 'Hakkımızda', 'İletişim'];
  
  // External links
  const externalLinks = {
    'Google\'da değerlendirin': 'https://g.page/r/yourGoogleReviewLink'
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <a href="/" className="z-10 flex items-center">
          <img 
            src="images/sandavinci_logo.jpg" 
            alt="Sandavinci Logo" 
            className={`h-8 md:h-10 mr-2 transition-opacity ${isScrolled ? 'opacity-100' : 'opacity-90'}`}
          />
          <h1 className={`text-2xl md:text-3xl font-display font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Sandavinci
          </h1>
        </a>

        {/* Mobile menu button */}
        <button 
          className="md:hidden z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled || isMenuOpen ? 'bg-primary' : 'bg-white'} ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled || isMenuOpen ? 'bg-primary' : 'bg-white'} ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled || isMenuOpen ? 'bg-primary' : 'bg-white'} ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index} className={item === 'Google\'da değerlendirin' ? 'hidden lg:block' : ''}>
                <a 
                  href={externalLinks[item] || `#${getSectionId(item)}`}
                  target={externalLinks[item] ? '_blank' : ''}
                  rel={externalLinks[item] ? 'noopener noreferrer' : ''}
                  className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-secondary-light'}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-white md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} flex items-center justify-center`}>
          <nav>
            <ul className="flex flex-col items-center space-y-6">
              {mobileNavItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={externalLinks[item] || `#${getSectionId(item)}`}
                    target={externalLinks[item] ? '_blank' : ''}
                    rel={externalLinks[item] ? 'noopener noreferrer' : ''}
                    className="text-xl font-medium text-primary hover:text-primary-dark transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 