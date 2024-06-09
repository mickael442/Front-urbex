import React, { useEffect, useState } from 'react';
import { Button, Typography, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Filtre = () => {
  const { id } = useParams();
  const [urbexData, setUrbexData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les données urbex
    const getData = () => {
      axios
        .get(`http://localhost:7265/urbex/urbexType/${id}`)
        .then(response => {
          setUrbexData(response.data);
        })
        .catch(error => {
          console.error('Erreur de requête :', error.message);
        });
    };

    getData();
  }, [id]);

  useEffect(() => {
    // Filtrer les données urbex
    setFilteredData(urbexData);
  }, [urbexData]);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      
      {filteredData.map(urbex => (
        <div key={urbex.id} style={{ display: 'inline-block', margin: '10px' }}>
          <Card sx={{ minWidth: 300 }}>
            <CardMedia
              sx={{ height: 200 }}
              image={urbex.image || '/logo512.png'}
              title={urbex.name}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {urbex.name}
              </Typography>
              <Typography variant='body2'>{urbex.commentaire}</Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={`/EnSavoirPlus/${urbex.id}`} size='small'>En savoir plus</Button>
            </CardActions>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Filtre;
