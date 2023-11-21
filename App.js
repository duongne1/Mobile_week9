import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './views/Screen1';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();
import store from './redux/stores';
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Screen1'
        screenOptions={{ headerShown: false }} >

        <Stack.Screen name="Screen1" component={Screen1} />
      </Stack.Navigator>
    </NavigationContainer> 
    </Provider> )
  ;
}