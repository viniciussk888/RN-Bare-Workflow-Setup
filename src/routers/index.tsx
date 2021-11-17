import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ExamplePage } from '../screens/ExamplePage';
import { Login } from '../screens/Login';
import { AuthLoading } from '../screens/AuthLoadingScreen';
import theme from '../global/styles/theme';

const Stack = createStackNavigator();

export default function Router() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'AuthLoading'}>
        <Stack.Screen 
          name={'AuthLoading'} 
          component={AuthLoading} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name={'Login'} 
          component={Login} 
          options={{headerShown: false}} 
        />
        <Stack.Screen 
          name={'Main'} 
          component={ExamplePage} 
          options={{
            title: 'HOME',
            headerStyle: {
              backgroundColor: theme.colors.primary,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
