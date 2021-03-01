import * as React from 'react';
import PropTypes from 'prop-types';
import {useColorScheme} from 'react-native-appearance';
//import {lightColors, darkColors} from '_styles/colors';
import {Typography, Spacing, Margin, Padding, Colors, Mixins} from '_styles';

export const ThemeContext = React.createContext({
  isDark: false,
  colors: Colors.LIGHT_COLORS,
  typography: Typography,
  spacing: Spacing,
  margin: Margin,
  padding: Padding,
  mixins: Mixins,
  setScheme: () => {},
});

export const ThemeProvider = ({children}) => {
  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = useColorScheme(); // Can be dark | light | no-preference

  /*
   * To enable changing the app theme dynamicly in the app (run-time)
   * we're gonna use useState so we can override the default device theme
   */
  const [isDark, setIsDark] = React.useState(colorScheme === 'dark');

  // Listening to changes of device appearance while in run-time
  React.useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  const defaultTheme = {
    isDark,
    // Chaning color schemes according to theme
    colors: isDark ? Colors.DARK_COLORS : Colors.LIGHT_COLORS,
    typography: Typography,
    spacing: Spacing,
    margin: Margin,
    padding: Padding,
    mixins: Mixins,
    // Overrides the isDark value will cause re-render inside the context.
    setScheme: (scheme) => setIsDark(scheme === 'dark'),
  };

  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
