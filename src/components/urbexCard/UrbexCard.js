import React from "react";
import { Button, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

class UrbexCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { urbex: null };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.urbex?.name !== this.props.urbex?.name || this.state.urbex !== this.props.urbex) {
      this.setState({ urbex: this.props.urbex });
      console.log('updated it!', this.props);
    }
  }

  render() {
    return (
      <div style={{ display: "inline-block", margin: "10px" }}> {/* Style pour afficher les cartes en ligne */}
        <Card sx={{ minWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/logo512.png"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.state.urbex?.name}
            </Typography>
            <Typography variant="body2" >
              {this.state.urbex?.commentaire}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default UrbexCard;
