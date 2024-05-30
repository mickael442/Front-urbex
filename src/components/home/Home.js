import React, { Component } from "react";
import PropTypes from "prop-types";
import template from "./Home.jsx";
import UrbexCard from "../urbexCard/UrbexCard.js";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { urbexData: [], error: null };
  }

  componentDidMount() {
    this.getData();
    console.log("Component mounted!");
  }

  getData() {
    axios
      .get("http://localhost:7265/urbex")
      .then((response) => {
        console.log(response.data); // Affiche les données reçues depuis le serveur
        this.setState({ urbexData: response.data });
      })
      .catch((error) => {
        console.error("Request error:", error.message);
        this.setState({ error: error.message });
      });
  }

  render() {
    const { urbexData, error } = this.state;

    return (
      <div className="Home">
        <header className="Home-header"></header>
        {error && <p className="error">{error}</p>}
        {urbexData.map((urbex) => (
          <UrbexCard key={urbex.urbexId} urbex={urbex} />
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  // Ajoutez des propTypes si nécessaire
};

export default Home;
