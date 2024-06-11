import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UrbexCard from '../urbexCard/UrbexCard.js';
import axios from 'axios';
import './Home.css';  // Assurez-vous que ce chemin est correct

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
    const { selectedCategory } = this.props;

    const filteredData = selectedCategory
      ? urbexData.filter(urbex => urbex.typeId === selectedCategory)
      : urbexData;

    return (
      <div className='Home'>
        <header className='Home-header'></header>
        <section className='Home-intro'>
          <h1>Bienvenue sur Urbex France</h1>
          <p>
            Vous êtes passionné par la découverte de lieux abandonnés, mystiques et empreints d'histoire ? Vous êtes au bon endroit. Urbex France est un guide pour tous les explorateurs urbains en quête de nouveaux terrains à découvrir en France.
          </p>
          <h2>Qu'est-ce que l'Urbex ?</h2>
          <p>
            L'exploration urbaine, ou urbex, consiste à visiter des structures abandonnées ou rarement accessibles au public, telles que des usines désaffectées, des châteaux en ruines, des hôpitaux abandonnés et bien plus encore. C'est une aventure qui mêle histoire, architecture et adrénaline.
          </p>
          <p>
            Merci de visiter Urbex France. Préparez votre sac à dos, chargez votre appareil photo, et partez à l'aventure avec nous !
          </p>
        </section>
        <h1>Les dernières expériences d'urbex</h1>
        {error && <p className='error'>{error}</p>}
        <div className='UrbexCard-container'>
          {filteredData.map(urbex => (
            <UrbexCard key={urbex.urbexId} urbex={urbex} className='UrbexCard' />
          ))}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  selectedCategory: PropTypes.number,
};

export default Home;
