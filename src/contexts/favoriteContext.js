/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext } from 'react';
import { ResultsContext } from './resultsContext';
import createPersistedState from 'use-persisted-state';

const useFavoriteMoviesById = createPersistedState('favoriteMoviesById');

export const FavoriteContext = createContext({
  favoriteMovies: [],
  toggleFavorite: () => {},
  isFavoriteMovie: () => {},
});

export function FavoriteContextProvider({ children }) {
  const { results } = useContext(ResultsContext);

  const [currentFavMoviesId, setCurrentFavMoviesId] = useFavoriteMoviesById({});

  const isFavoriteMovie = (movieId) => !!currentFavMoviesId[movieId];

  const toggleFavoriteMovie = (id) => {
    setCurrentFavMoviesId((prevFavs) => ({
      ...prevFavs,
      [id]: !isFavoriteMovie(id),
    }));
  };

  const favoriteMovies = results.filter((m) => isFavoriteMovie(m.id));

  return (
    <FavoriteContext.Provider
      value={{ toggleFavoriteMovie, isFavoriteMovie, favoriteMovies }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
