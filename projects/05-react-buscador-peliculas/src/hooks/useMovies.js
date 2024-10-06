import { useState } from "react";
import { searchMovies } from "../services/movies.js";

export function useMovies ({ search }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const getMovies = async() => {
      try {
        setLoading(true);
        setError(null);
        const newMovies = await searchMovies({ search })
        setMovies(newMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        // esto se va a ejecutar siempre, tanto en el try como el catch
        setLoading(false);
      }

    };

    return { movies, getMovies, loading, error };
  }