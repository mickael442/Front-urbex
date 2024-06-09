import React, { useState, useEffect } from 'react';
import './Publication.css';
import axios from 'axios';

const Publication = () => {
  const [formData, setFormData] = useState({
    Name: '',
    UrbexTypeId: '',
    Commentaire: '',
    ImageUrl: ''
  });
  const [urbexData, setUrbexData] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get('http://localhost:7265/UrbexType')
      .then(response => {
        setUrbexData(response.data);
      })
      .catch(error => {
        console.error('Erreur de requête :', error.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFormData({ ...formData, ImageUrl: file.name });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // Affiche les valeurs des champs dans la console
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('Name', formData.Name);
      formDataToSend.append('UrbexTypeId', formData.UrbexTypeId);
      formDataToSend.append('Commentaire', formData.Commentaire);
      formDataToSend.append('ImageUrl', formData.ImageUrl);
      if (selectedFile) {
        formDataToSend.append('file', selectedFile);
      }

      const response = await fetch('http://localhost:5002/api/festival', {
        method: 'POST',
        body: formDataToSend
      });
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log('Publication créée avec succès:', data);
      // Réinitialise le formulaire
      setFormData({
        Name: '',
        UrbexTypeId: '',
        Commentaire: '',
        ImageUrl: ''
      });
      setSelectedFile(null);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div className="create-festival">
      <h1>Créer une Publication</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Nom</label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="UrbexTypeId">Type d'Urbex</label>
          <select
            id="UrbexTypeId"
            name="UrbexTypeId"
            value={formData.UrbexTypeId}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner un type</option>
            {urbexData.map((type) => (
              <option key={type.urbexTypeId} value={type.urbexTypeId}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="Commentaire">Commentaire</label>
          <textarea
            id="Commentaire"
            name="Commentaire"
            value={formData.Commentaire}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="ImageUrl">URL de l'Image</label>
          <input
            type="file"
            id="ImageUrl"
            name="ImageUrl"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default Publication;
