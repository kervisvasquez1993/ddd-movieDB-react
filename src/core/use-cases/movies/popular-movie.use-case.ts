import {HttpAdapter} from '../../../config/adapters/http/http.adapters';
import {MoviePopularResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movies} from '../../entities/movie.entity';

export const PopularMovieUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movies[]> => {
  try {
    const popular = await fetcher.get<MoviePopularResponse>('/popular');
    return popular.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies - PopularMovieUseCase');
  }
};
