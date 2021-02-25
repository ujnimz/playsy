import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, {Easing} from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import MiniPlayer from './MiniPlayer';
import FullPlayer from './FullPlayer';

import {useTheme} from '../../utilities/ThemeProvider';
import {
  windowHeight,
  gapSize,
  miniPlayerHeight,
} from '../../utilities/Dimentions';

const BottomTabs = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const {colors} = useTheme();
  const styles = getStyles(colors);

  const sheetRef = React.createRef();
  const fall = new Animated.Value(0);

  const onOpenBottomSheet = () => {
    sheetRef.current.snapTo(0);
  };
  const onCloseBottomSheet = () => {
    sheetRef.current.snapTo(1);
  };

  //const [fadeAnimation, setFadeAnimation] = useState(new Animated.Value(0))
  const fadeAnimation = new Animated.Value(1);

  const miniPlayerFadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 200,
      easing: Easing.inOut(Easing.linear),
    }).start();
  };

  const miniPlayerFadeOut = () => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration: 200,
      easing: Easing.inOut(Easing.linear),
    }).start();
  };

  const renderContent = () => (
    <View style={styles.playerScreen}>
      <Animated.View
        style={{
          opacity: fadeAnimation,
        }}>
        <MiniPlayer onOpenBottomSheet={onOpenBottomSheet} />
      </Animated.View>

      <FullPlayer onCloseBottomSheet={onCloseBottomSheet} />
    </View>
  );

  return (
    <>
      <View>
        <Button title="Open Bottom Sheet" onPress={onOpenBottomSheet} />
        <BottomSheet
          ref={sheetRef}
          snapPoints={[
            windowHeight - miniPlayerHeight,
            miniPlayerHeight,
            miniPlayerHeight,
          ]}
          initialSnap={1}
          renderContent={renderContent}
          callbackNode={fall}
          enabledGestureInteraction={true}
          enabledBottomInitialAnimation={true}
          onOpenStart={miniPlayerFadeOut}
          onCloseEnd={miniPlayerFadeIn}
        />
      </View>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const tabIcon = options.tabBarIcon;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabItem}>
              {tabIcon(
                isFocused ? colors.text : colors.grey,
                isFocused ? '' : '-outline',
              )}
              <Text style={isFocused ? styles.activeLabel : styles.label}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const getStyles = (colors) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: gapSize,
    },
    label: {
      color: colors.grey,
      fontSize: 12,
    },
    activeLabel: {
      color: colors.text,
      fontSize: 12,
    },
    icon: {
      color: colors.grey,
      marginBottom: 5,
    },
    activeIcon: {
      color: colors.text,
    },
    playerScreen: {
      height: windowHeight,
      backgroundColor: colors.background,
    },
  });
};

export default BottomTabs;
