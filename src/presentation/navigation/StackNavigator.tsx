import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen} from '../screens/details/DetailsScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {useNavigation} from '@react-navigation/native';

export type RootStatckParams = {
  Home: undefined;
  Details: {movieId: number};
};

const Stack = createStackNavigator<RootStatckParams>();

export const StackNavigator = () => {
  const navigator = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
