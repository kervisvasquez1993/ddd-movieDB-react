import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Movies} from '../../../core/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStatckParams} from '../../navigation/StackNavigator';
interface Props {
  movie: Movies;
  height?: number;
  width?: number;
}
export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStatckParams>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}
      style={({pressed}) => ({
        width,
        height,
        marginHorizontal: 10,
        paddingBottom: 20,
        paddingHorizontal: 10,
        opacity: pressed ? 0.9 : 1,
      })}>
      <View style={{...style.imagenContaner, width: 300, height: 400}}>
        <Image style={style.image} source={{uri: movie.poster}} />
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imagenContaner: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
