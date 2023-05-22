import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login/Login';
import SignUp from './src/pages/signup/SignUp';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}  >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
  
}