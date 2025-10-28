import API_KEY, { BASE_URL } from '../constants/index';

export const trendingMoviesEndpoint = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
export const upcomingMoviesEndpoint = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`
export const topRatedMoviesEndpoint = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`

//DetailsId
export const movieDetailsIdEndpoint = id =>`${BASE_URL}/movie/${id}?api_key=${API_KEY}`
export const movieCreditEndpoint = id =>`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
export const movieSimilarEndpoint = id =>`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`

//PersonId
export const personEndpoint = id => `${BASE_URL}/person/${id}?api_key=${API_KEY}`
//PersonMoviesCredit
export const personMoviesCreditEndpoint = id => `${BASE_URL}/person/${id}/movie_credits?api_key=${API_KEY}`

//SearchMovie
export const searchMovieEndpoint = query =>
  `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false&page=1&query=${encodeURIComponent(query)}`

//for image.
export const getImages500 = path => path ? `https://image.tmdb.org/t/p/w500${path}` : null
export const getImages342 = path => path ? `https://image.tmdb.org/t/p/w342${path}` : null
export const getImages185 = path => path ? `https://image.tmdb.org/t/p/w185${path}` : null
//path vereceğimiz görsel olacak.boyutlar diğerleri.
