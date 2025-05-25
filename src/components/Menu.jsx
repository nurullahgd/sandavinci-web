import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const menuCategories = [
  { id: 'kahveler', name: 'Kahveler' },
  { id: 'icecekler', name: 'İçecekler' },
  { id: 'tatlilar', name: 'Tatlılar' },
  { id: 'sandvicler', name: 'Sandviçler' }
]

const menuItems = {
  kahveler: [
    { name: 'Espresso', description: 'Yoğun aromalı saf espresso', price: '₺30', image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
    { name: 'Cappuccino', description: 'Espresso, buhar püskürtülmüş süt ve süt köpüğü', price: '₺45', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
    { name: 'Latte', description: 'Espresso ve buhar püskürtülmüş süt', price: '₺45', image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
    { name: 'Filtre Kahve', description: 'Özenle demlenmiş günlük filtre kahve', price: '₺40', image: 'https://images.unsplash.com/photo-1598908314732-07113901949e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
  ],
  icecekler: [
    { name: 'Çay', description: 'Geleneksel demlik çay', price: '₺20', image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
    { name: 'Taze Sıkılmış Portakal Suyu', description: 'Günlük taze sıkılmış portakal suyu', price: '₺35', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
    { name: 'Limonata', description: 'Taze sıkılmış limon suyu, şeker ve su', price: '₺30', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
  ],
  tatlilar: [
    { name: 'Tiramisu', description: 'Mascarpone kreması, kahve emdirilmiş bisküvi', price: '₺55', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
    { name: 'Cheesecake', description: 'Kremsi peynirli pasta, böğürtlen sosu ile', price: '₺60', image: 'https://images.unsplash.com/photo-1533134242443-d4fd264ed197?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
    { name: 'Brownie', description: 'Sıcak brownie, dondurma ile servis edilir', price: '₺50', image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
  ],
  sandvicler: [
    { name: 'Avokadolu Sandviç', description: 'Avokado, domates, marul ve özel sos', price: '₺65', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
    { name: 'Tavuklu Wrap', description: 'Izgara tavuk, taze sebzeler, yoğurt sosu', price: '₺70', image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
    { name: 'Peynirli Tost', description: 'Özel peynir karışımı ile hazırlanmış tost', price: '₺55', image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' },
  ]
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('kahveler')

  return (
    <section id="menü" className="section bg-secondary-light">
      <div className="container">
        <h2 className="heading text-center text-primary">Menümüz</h2>
        <p className="subheading text-center max-w-3xl mx-auto">
          Taze ve kaliteli malzemelerle hazırlanan lezzetli ürünlerimizi keşfedin
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id 
                  ? 'bg-primary text-white' 
                  : 'bg-white text-primary hover:bg-secondary'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {menuItems[activeCategory].map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden flex hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-1/3 h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  loading="lazy"
                />
              </div>
              <div className="w-2/3 p-4 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{item.name}</h3>
                  <span className="text-xl font-bold text-accent">{item.price}</span>
                </div>
                <p className="text-gray-600 flex-grow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu 