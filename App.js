import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import NewTask from './NewTask';
import { Provider } from 'react-redux';
import { Slice } from '@reduxjs/toolkit';
import { Store } from './Store';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions=
      {{
      headerShown: false
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewTask" component={NewTask} />
      
      
      
      
         
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
      
   
    
  );
}

export default App;
