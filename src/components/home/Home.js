import React    from "react";
import template from "./Home.jsx";
import UrbexCard from "../urbexCard/UrbexCard.js";
import axios from "axios";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {urbexData: []};
  }

  componentDidMount() {
    this.getData();
        console.log('mount it!');
  }

  getData(){
    axios.get("http://localhost:7265/urbex")
      .then(response => {
        console.log(response.data); // Affiche les données reçues depuis le serveur
        this.setState({urbexData: response.data}); // Met à jour le state avec les données
      })
      .catch(error => {
        console.error("Erreur de requête :", error.message);
      });
  }


  render() {
    return     (<div className="Home">
    <header className="Home-header">

    </header>
    {this.state.urbexData.map(urbex => {
  return <UrbexCard key={urbex.urbexId} urbex={urbex}></UrbexCard>;
})}
  </div>)
  }
}

export default Home;