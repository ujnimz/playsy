import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppearanceProvider} from 'react-native-appearance';

import {ThemeProvider} from './app/utilities/ThemeProvider';
import ThemeScreen from './app/utilities/ThemeScreen';
import SplashScreen from './app/containers/SplashScreen';

const App = () => {
  return (
    <AppearanceProvider>
      <ThemeProvider>
        <NavigationContainer>
          <ThemeScreen>
            <SplashScreen />
          </ThemeScreen>
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default App;
