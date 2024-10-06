const API_KEY = "e180afc8";
export const searchMovies = async ({ search }) => {
    if (search === "") return null
    
    try {
        const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`)
        const json = await response.json()

        const movies = json.Search;
  
        return movies?.map((movie) => ({
          id: movie.imdbID,
          title: movie.Title,
          year: movie.Year,
          poster: movie.Poster,
        }));

    // eslint-disable-next-line no-unused-vars
    } catch (e) {
        throw new Error('Error buscando las peliculas')
    } 
}