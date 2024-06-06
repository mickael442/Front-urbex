import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const urbexs = [
  {
    id: 1,
    name: 'urbex A',
    description: 'Description du urbex A',
    image: 'imageA.jpg'
  },
  {
    id: 2,
    name: 'urbex B',
    description: 'Description du urbex B',
    image: 'imageB.jpg'
  },
  {
    id: 3,
    name: 'urbex C',
    description: 'Description du urbex C',
    image: 'imageC.jpg'
  }
];

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

const urbexPage = () => {
  const [filteredurbexs, setFilteredurbexs] = useState(urbexs);

  const handleSearch = searchTerm => {
    const filtered = urbexs.filter(urbex =>
      urbex.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredurbexs(filtered);
  };

  return (
    <div className="urbex-page">
      <h1>Bienvenue à la page du urbex!</h1>
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="urbex-list">
        {filteredurbexs.map(urbex => (
          <div key={urbex.id} className="urbex">
            <img src={urbex.image} alt={urbex.name} />
            <h3>{urbex.name}</h3>
            <p>{urbex.description}</p>
            <Link to={`/urbex/${urbex.id}`}>
              <button>Voir plus</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default urbexPage;
