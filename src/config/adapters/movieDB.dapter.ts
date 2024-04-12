import {AxiosAdapter} from './http/axios.adapters';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie/',
  params: {
    api_key: 'c2b2eff9256fa0a5804e998f26c26a32',
    language: 'es',
  },
});
