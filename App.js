import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DataEntryScreen from './src/screens/DataEntryScreen';
import DataVisualizationScreen from './src/screens/DataVisualizationScreen';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DataEntry" component={DataEntryScreen} />
          <Stack.Screen name="DataVisualization" component={DataVisualizationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
