import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UrbexCard from '../urbexCard/UrbexCard.js';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { urbexData: [], error: null };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      console.log(`Catégorie sélectionnée mise à jour : ${this.props.selectedCategory}`);
    }
  }

  getData() {
    axios
      .get('http://localhost:7265/urbex')
      .then(response => {
        this.setState({ urbexData: response.data });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { urbexData, error } = this.state;
    const { selectedCategory } = this.props; // Récupérer la catégorie sélectionnée des props

    // Filtrer les données urbex en fonction de l'ID de la catégorie sélectionnée
    const filteredData = selectedCategory
      ? urbexData.filter(urbex => urbex.typeId === selectedCategory)
      : urbexData;

    return (
      <div className='Home'>
        <header className='Home-header'></header>
        {error && <p className='error'>{error}</p>}
        <p>Filtre sélectionné: {selectedCategory ? `ID = ${selectedCategory}` : 'Aucun filtre'}</p>
        {filteredData.map(urbex => (
          <UrbexCard key={urbex.urbexId} urbex={urbex} />
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  selectedCategory: PropTypes.number, // Ajoutez des propTypes si nécessaire
};

export default Home;
