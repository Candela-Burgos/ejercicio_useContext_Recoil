import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useMovie } from '../../hooks/useMovie';

const ListaDeFavoritos = () => {
  const { moviesState, cleanMovie, removeMovie } = useMovie();

  return (
    <Box w="100%" display="flex" justifyContent="center" alignItems="center">
      <Heading>ListaDeFavoritos</Heading>
      <Button onClick={() => cleanMovie()}>Vaciar lista</Button>
      {!moviesState.length
        ? (
        <Text>No hay peliculas favoritas</Text>
          )
        : (
            moviesState.map((favs) => (
          <Box
            key={favs.id}
            w="20%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Image w="250px" src={favs.img} alt={favs.name} />
            <Heading fontSize="1em">{favs.name}</Heading>
            <Button onClick={() => removeMovie(favs.id)}>
              Quitar de la lista
            </Button>
          </Box>
            ))
          )}
    </Box>
  );
}

export { ListaDeFavoritos }
