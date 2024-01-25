import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from 'react-bootstrap';

const CardCarousel = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('Error in fetching the data', error);
      });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 475 },
      items: 2,
    },
  };
  return (
    <Carousel responsive={responsive} containerClass="carousel-container">
      {characters.map((character) => (
        <div className='card-container'>
        <Card key={character.id}>
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>
              {`Status: ${character.status}`}
              <br />
              {`Species: ${character.species}`}
              <br />
              {`Gender: ${character.gender}`}
              <br />
              {`Location :${character.location.name}`}
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default CardCarousel;
