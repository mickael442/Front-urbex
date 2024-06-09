import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="container">
      <h1>Contactez-nous</h1>
      <div className="contact-info">
        <div className="info-item">
          <h2>Téléphone</h2>
          <p>+33 1 23 45 67 89</p>
        </div>
        <div className="info-item">
          <h2>Email</h2>
          <p>contact@exemple.com</p>
        </div>
        <div className="info-item">
          <h2>Horaires d'ouverture</h2>
          <p>Lundi - Vendredi: 9h00 - 18h00</p>
          <p>Samedi: 10h00 - 14h00</p>
          <p>Dimanche: Fermé</p>
        </div>
        <div className="info-item">
          <h2>Suivez-nous</h2>
          <p>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/facebook.png`} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/instagram.png`} alt="Instagram" className="social-icon" />
            </a>
          </p>
        </div>
      </div>
      <div className="map-container">
        <h2>Nous trouver</h2>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.203512601055!2d4.065137315577295!3d46.039519879111826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb845839c423%3A0x4093cafcbe84fc0!2s53%20Rue%20Arago%2C%2042300%20Roanne%2C%20France!5e0!3m2!1sen!2sus!4v1623822798083!5m2!1sen!2sus" 
          allowFullScreen="" 
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactForm;
