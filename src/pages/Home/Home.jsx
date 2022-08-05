import React from 'react';
import { movies } from '../../assets/movies'
import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useMovie } from '../../hooks/useMovie';

const Home = () => {
  const { addMovie } = useMovie();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" >
      {movies.map((movie) => (
        <Box key={movie.id} m="1em">
          <Image src={movie.img} alt={movie.name} w="250px"/>
          <Text>{movie.name}</Text>
          <Button onClick={() => addMovie(movie)}>Añadir a favoritos</Button>
        </Box>
      ))}
    </Box>
  );
}

export { Home }
