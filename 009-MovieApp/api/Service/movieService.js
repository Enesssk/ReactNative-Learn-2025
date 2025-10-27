import apiClient from '../Client';
import { topRatedMoviesEndpoint, trendingMoviesEndpoint, upcomingMoviesEndpoint } from '../Endpoint';


export const movieService = {
  getTrendingMovies: async () => {
    const response = await apiClient.get(trendingMoviesEndpoint)
    return response.data
  },
  getUpcomingMovies: async () => {
    const response = await apiClient.get(upcomingMoviesEndpoint)
    return response.data
  },
  getTopRatedMovies: async () => {
    const response = await apiClient.get(topRatedMoviesEndpoint)
    return response.data
  }
}