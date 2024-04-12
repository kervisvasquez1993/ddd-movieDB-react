import {HttpAdapter} from '../../../config/adapters/http/http.adapters';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import type {Movies} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movies[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
    console.log({nowPlaying});
    return [];
  } catch (error) {
    throw new Error('Error fetching movies - NowPlaying');
  }
};
