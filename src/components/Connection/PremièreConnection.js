import React, { useState, useEffect } from 'react';
import './PremièreConnection.css';
import axios from 'axios';

const Publication = () => {
  const [formData, setFormData] = useState({
    email: '',
    passwordHash: '',
    userName: ''
  });

  useEffect(() => {
    // Perform any required data fetching here if needed
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Affiche les valeurs des champs dans la console
    try {
      const response = await axios.post('http://localhost:5002/api/user', formData);
      if (response.status !== 200) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = response.data;
      console.log('Utilisateur créé avec succès:', data);
      // Réinitialise le formulaire
      setFormData({
        email: '',
        passwordHash: '',
        userName: ''
      });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="create-user">
      <h1>Créer un Utilisateur</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Entrez l'email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="passwordHash">Mot de passe</label>
          <input
            type="password"
            id="passwordHash"
            name="passwordHash"
            value={formData.passwordHash}
            onChange={handleChange}
            required
            placeholder="Entrez le mot de passe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="userName">Nom d'utilisateur</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
            placeholder="Entrez le nom d'utilisateur"
          />
        </div>
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default Publication;
