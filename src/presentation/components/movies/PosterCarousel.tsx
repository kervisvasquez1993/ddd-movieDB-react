import React from 'react';
import {Text, View} from 'react-native';
import {Movies} from '../../../core/entities/movie.entity';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';
interface Props {
  movies: Movies[];
  height?: number;
}
export const PosterCarousel = ({movies, height = 440}: Props) => {
  return (
    <View style={{height: height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
