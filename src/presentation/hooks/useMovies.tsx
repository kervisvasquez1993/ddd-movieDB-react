import {useEffect, useState} from 'react';
import type {Movies} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.dapter';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movies[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    inittialLoad();
    

  }, []);

  const inittialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
  };
  return {};
};
