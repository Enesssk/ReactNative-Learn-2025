import apiClient from '../Client';
import {
  movieCreditEndpoint,
  movieDetailsIdEndpoint,
  movieSimilarEndpoint,
  personEndpoint,
  personMoviesCreditEndpoint, searchMovieEndpoint,
  topRatedMoviesEndpoint,
  trendingMoviesEndpoint,
  upcomingMoviesEndpoint,
} from '../Endpoint';


  export const getTrendingMovies = async () => {
    const response = await apiClient.get(trendingMoviesEndpoint)
    return response.data
  }

  export const getUpcomingMovies = async () => {
    const response = await apiClient.get(upcomingMoviesEndpoint)
    return response.data
  }

  export const getTopRatedMovies = async () => {
    const response = await apiClient.get(topRatedMoviesEndpoint)
    return response.data
  }

  //MovieDetailsWithId
  export const getMovieDetailsWithId = async id => {
    const response =  await apiClient.get(movieDetailsIdEndpoint(id))
    return response.data
  }

  //MovieCredits
  export const getMovieCredits = async id => {
    const response = await apiClient.get(movieCreditEndpoint(id))
    return response.data
  }

  //MovieSimilar
  export const getMovieSimilar = async id => {
    const response = await apiClient.get(movieSimilarEndpoint(id))
    return response.data
  }

  //PersonDetails
  export const getPersonDetails = async id => {
    const response = await apiClient.get(personEndpoint(id))
    return response.data
  }

  //PersonMovieCredits
  export const getPersonMoviesCredit = async id => {
    const response = await apiClient.get(personMoviesCreditEndpoint(id))
    return response.data
  }

  //SearchMovie
  export const getSearchMovie = async (query) => {
    const response = await apiClient.get(searchMovieEndpoint(query))
    return response.data
  }
