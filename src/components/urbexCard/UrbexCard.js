import React    from "react";
import template from "./UrbexCard.jsx";
import { TextField, Button, Typography, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';

class UrbexCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ""};
  }

  componentDidUpdate(prevProps) {
      if(prevProps.urbex?.name !== this.props.urbex?.name || this.state.name !== this.props.urbex?.name){
        this.setState({name: this.props.urbex?.name}); // Met à jour le state avec les données
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
          {this.state.name}
        </Typography>
        <Typography variant="body2" >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    )
  }
}

export default UrbexCard;
