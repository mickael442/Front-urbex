import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Card, CardMedia, CardContent } from '@mui/material';

function EnSavoirPlus() {
  const { id } = useParams();
  const [urbex, setUrbex] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Remplacer l'URL par celle de votre API
    axios.get(`http://localhost:7265/urbex/${id}`)
      .then(response => {
        setUrbex(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <p className='error'>Erreur: {error}</p>;
  }

  if (!urbex) {
    return <p>Chargement...</p>;
  }

  return (
    <Card sx={{ minWidth: 300, margin: '20px' }}>
      <CardMedia
        sx={{ height: 400 }}
        image={urbex.image || '/logo512.png'}
        title={urbex.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {urbex.name}
        </Typography>
        <Typography variant='body2' component='p'>
          {urbex.commentaire}
        </Typography>
        <Typography variant='body2' color='textSecondary'>
          {urbex.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default EnSavoirPlus;
