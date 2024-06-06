import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UrbexCard from './UrbexCard'; // Assurez-vous que le chemin est correct
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Rechercher..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

const UrbexPage = () => {
  const [urbexData, setUrbexData] = useState([]);
  const [filteredUrbexs, setFilteredUrbexs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:7265/urbex')
      .then(response => {
        setUrbexData(response.data);
        setFilteredUrbexs(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  const handleSearch = searchTerm => {
    const filtered = urbexData.filter(urbex =>
      urbex.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUrbexs(filtered);
  };

  return (
    <div className="urbex-page">
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      {error && <p className='error'>{error}</p>}
      <div className="urbex-list">
        {filteredUrbexs.map(urbex => (
          <UrbexCard key={urbex.urbexId} urbex={urbex} />
        ))}
      </div>
    </div>
  );
};

export default UrbexPage;
