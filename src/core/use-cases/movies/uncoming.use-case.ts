import {HttpAdapter} from '../../../config/adapters/http/http.adapters';
import {UpComingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movies} from '../../entities/movie.entity';

export const UpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movies[]> => {
  try {
    const popular = await fetcher.get<UpComingResponse>('/top_rated');
    return popular.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies - UpcomingResponse');
  }
};
