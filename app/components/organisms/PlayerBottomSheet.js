import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

import MiniPlayer from '_organisms/MiniPlayer';
import FullPlayer from '_organisms/FullPlayer';

import {useTheme} from '_theme/ThemeProvider';
import {windowHeight} from '_utilities/Dimentions';

const PlayerBottomSheet = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const theme = useTheme();
  const styles = getStyles(theme);

  const sheetRef = React.createRef();
  const fall = new Animated.Value(0);

  const onOpenBottomSheet = () => {
    sheetRef.current.snapTo(0);
  };
  const onCloseBottomSheet = () => {
    sheetRef.current.snapTo(1);
  };

  const fadeAnimation = new Animated.Value(1);

  const miniPlayerFadeIn = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 100,
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
      <BottomSheet
        ref={sheetRef}
        snapPoints={[
          windowHeight,
          theme.spacing.SCALE_18 * 6,
          theme.spacing.SCALE_18 * 6,
        ]}
        initialSnap={1}
        renderContent={renderContent}
        callbackNode={fall}
        enabledGestureInteraction={true}
        enabledBottomInitialAnimation={true}
        onOpenStart={miniPlayerFadeOut}
        onCloseEnd={miniPlayerFadeIn}
      />
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
                isFocused ? theme.colors.PRIMARY : theme.colors.GREY,
                isFocused ? '' : '-outline',
              )}
              <Text
                style={[
                  styles.label,
                  {color: isFocused ? theme.colors.PRIMARY : theme.colors.GREY},
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

const getStyles = ({colors, spacing}) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      backgroundColor: colors.BACKGROUND,
      zIndex: 999999,
      paddingTop: 17,
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    label: {
      fontSize: 12,
    },
    icon: {
      color: colors.GREY,
      marginBottom: 5,
    },
    activeIcon: {
      color: colors.PRIMARY,
    },
    playerScreen: {
      height: windowHeight,
      backgroundColor: colors.BACKGROUND,
    },
  });
};

PlayerBottomSheet.propTypes = {
  state: PropTypes.object.isRequired,
  descriptors: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default PlayerBottomSheet;
