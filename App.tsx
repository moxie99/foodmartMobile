import React from 'react';
import ParentNavigator from './src/navigations/ParentNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './src/Store';
import {Provider} from 'react-redux';

export default () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <ParentNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  </Provider>
);
