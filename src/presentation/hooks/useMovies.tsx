import {useEffect, useState} from 'react';
import type {Movies} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.dapter';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movies[]>([]);
  const [popularMovie, setPopularMovie] = useState<Movies[]>([]);
  const [upComingMovie, setUpComingMovie] = useState<Movies[]>([]);
  const [topRateMovie, setTopRatedMovies] = useState<Movies[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    inittialLoad();
  }, []);

  const inittialLoad = async () => {
    const [nowPlayingMovies, popularMovies, upcomingMovies, topRatedMovies] =
      await Promise.all([
        UseCases.moviesNowPlayingUseCase(movieDBFetcher),
        UseCases.PopularMovieUseCase(movieDBFetcher),
        UseCases.UpcomingUseCase(movieDBFetcher),
        UseCases.TopRaredUseCase(movieDBFetcher),
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopularMovie(popularMovies);
    setUpComingMovie(upcomingMovies);
    setTopRatedMovies(topRatedMovies);
    setIsLoading(false);
  };
  return {nowPlaying, popularMovie, upComingMovie, topRateMovie, isLoading};
};
