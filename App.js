import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { NotesProvider } from './src/context/NotesContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './src/components/RootNavigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NotesProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotesProvider>
  );
}

export default App;