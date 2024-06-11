import React, { useState } from 'react';
import axios from 'axios';
import './Connection.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7265/user', { email, password });
      if (response.data.success) {
        // Rediriger vers la page d'accueil ou une autre page protégée
        window.location.href = '/dashboard';
      } else {
        setError('Email ou mot de passe incorrect');
      }
    } catch (err) {
      setError('Erreur lors de la connexion. Veuillez réessayer.');
    }
  };

  const handlePremièreConnection = () => {
    // Rediriger vers la page de création de compte
    window.location.href = '/PremièreConnection';
  };

  return (
    <div className="container">
      <h2>Connexion</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button type="submit">Se connecter</button>
        <button type="button" className="PremièreConnection-button" onClick={handlePremièreConnection}>Première connexion</button>
      </form>
    </div>
  );
};

export default LoginForm;
