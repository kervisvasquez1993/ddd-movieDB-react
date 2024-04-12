import React from 'react';
import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';

export const HomeScreen = () => {
  const {nowPlaying, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading) {
    return <Text>Cargando..</Text>;
  }
  return (
    <ScrollView style={{marginTop: top + 20, paddingBottom: 30}}>
      <PosterCarousel movies={nowPlaying} />
    </ScrollView>
  );
};
