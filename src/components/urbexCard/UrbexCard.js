import React from 'react';
import { Button, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

class UrbexCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { urbex: null };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.urbex !== this.props.urbex) {
      this.setState({ urbex: this.props.urbex });
    }
  }

  render() {
    const { urbex } = this.state;

    return (
      <div style={{ display: 'inline-block', margin: '10px' }}>
        <Card sx={{ minWidth: 300 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={urbex?.image || '/logo512.png'}
            title={urbex?.name}
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {urbex?.name}
            </Typography>
            <Typography variant='body2'>{urbex?.commentaire}</Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/EnSavoirPlus/55`} size='small'>En savoir plus</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default UrbexCard;
