import { useRef, useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies.js";

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previousSearch = useRef(search);

  const getMovies = useCallback(async({search}) => {
      if (search === previousSearch.current) return

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search })
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      // esto se va a ejecutar siempre, tanto en el try como el catch
      setLoading(false);
    }          
  },[]) 

  const sortedMovies = useMemo(() => {
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, error };
}