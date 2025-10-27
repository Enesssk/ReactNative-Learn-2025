import { apiKey, BASE_URL } from '../constants/index';

export const trendingMoviesEndpoint = `${BASE_URL}/movie/day?api_key=${apiKey}`
export const upcomingMoviesEndpoint = `${BASE_URL}/movie/upcoming?api_key=${apiKey}`
export const topRatedMoviesEndpoint = `${BASE_URL}/movie/top_rated?api_key=${apiKey}`
