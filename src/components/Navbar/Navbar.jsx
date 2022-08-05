import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box w="100%" display="flex" justifyContent="center">
      <Link m="1em" as={NavLink} to="/">
        Home
      </Link>
      <Link m="1em" as={NavLink} to="/listaDeFavoritos">
        Lista de Favoritos
      </Link>
    </Box>
  );
}

export { Navbar }
