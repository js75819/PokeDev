import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="PokeDev"  component={HomeScreen} options={{
          headerStyle:{
            backgroundColor: '#134FA1'},
          headerTitleStyle:{
             alignSelf: 'center',
            color:'#fff'} }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{
          title:'PokeDev',
          headerStyle:{   
           backgroundColor: '#134FA1'},
          headerTitleStyle:{
             alignSelf: 'center',
            color:'#fff',
            marginLeft:-50} }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;