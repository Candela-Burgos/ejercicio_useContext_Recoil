import { useRecoilValue, useSetRecoilState } from 'recoil';
import { movieState } from '../context/FavoriteContext';

const useMovie = () => {
  const setMovieState = useSetRecoilState(movieState);
  const moviesState = useRecoilValue(movieState);

  const addMovie = (movie) => {
    const existMovie = moviesState.find((mov) => mov.id === movie.id);
    if (existMovie) return false;
    setMovieState([...moviesState, movie]);
  };

  const cleanMovie = () => setMovieState([]);

  const removeMovie = (id) => {
    const filterToRemove = moviesState.filter((mov) => mov.id !== id);
    setMovieState(filterToRemove);
  };

  return {
    moviesState,
    addMovie,
    cleanMovie,
    removeMovie
  };
}

export { useMovie }
