import React    from "react";
import template from "./UrbexCard.jsx";
import { TextField, Button, Typography, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import { Link } from "react-router-dom";

class UrbexCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {urbex:null};
  }

  componentDidUpdate(prevProps) {
      if(prevProps.urbex?.name !== this.props.urbex?.name || this.state.urbex !== this.props.urbex){
        this.setState({urbex:this.props.urbex}); // Met à jour le state avec les données
        console.log('updated it!',this.props);
      }
  }

  render() {
    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {this.state.urbex?.name}
        </Typography>
        <Typography variant="body2" >
        {this.state.urbex?.commentaire}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={"/urbex/"+this.state.urbex?.urbexId}>
      <Button size="small">En savoir plus</Button>
      </Link>
      </CardActions>
    </Card>

    )
  }
}

export default UrbexCard;
