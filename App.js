import 'react-native-gesture-handler';
import React from 'react';
// REDUX
import {Provider} from 'react-redux';
import mainStore from './app/redux/mainStore';
// REACT NAVIGATION
import {NavigationContainer} from '@react-navigation/native';
import {AppearanceProvider} from 'react-native-appearance';
// DARK LIGHT THEME
import {ThemeProvider} from './app/utilities/ThemeProvider';
import ThemeScreen from './app/utilities/ThemeScreen';
import SplashScreen from './app/containers/SplashScreen';

const App = () => {
  return (
    <Provider store={mainStore}>
      <AppearanceProvider>
        <ThemeProvider>
          <NavigationContainer>
            <ThemeScreen>
              <SplashScreen />
            </ThemeScreen>
          </NavigationContainer>
        </ThemeProvider>
      </AppearanceProvider>
    </Provider>
  );
};

export default App;
