import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// FontAwesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faUtensils, faClock, faPhone, faEnvelope, faMapMarkerAlt, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library
library.add(
  faCoffee, faUtensils, faClock, faPhone, faEnvelope, faMapMarkerAlt, faStar, faHeart,
  faFacebook, faInstagram, faTwitter
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) 