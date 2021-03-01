import 'react-native-gesture-handler';
import React from 'react';
// REACT NAVIGATION
import {NavigationContainer} from '@react-navigation/native';
import {AppearanceProvider} from 'react-native-appearance';
// REDUX
import {Provider} from 'react-redux';
import mainStore from '_redux/mainStore';
// DARK LIGHT THEME
import {ThemeProvider} from '_theme/ThemeProvider';
import ThemeScreen from '_theme/ThemeScreen';
import AppRoot from './app/index';

const App = () => {
  return (
    <Provider store={mainStore}>
      <AppearanceProvider>
        <ThemeProvider>
          <NavigationContainer>
            <ThemeScreen>
              <AppRoot />
            </ThemeScreen>
          </NavigationContainer>
        </ThemeProvider>
      </AppearanceProvider>
    </Provider>
  );
};

export default App;
