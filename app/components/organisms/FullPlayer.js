import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useTheme} from '_theme/ThemeProvider';
import {windowWidth} from '_utilities/Dimentions';

import BounceText from '_atoms/BounceText';

const artist = require('_assets/images/artist.jpg');

const FullPlayer = ({onCloseBottomSheet}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerControl}>
          <Icon
            name="chevron-down-outline"
            color={theme.colors.PRIMARY}
            size={28}
            onPress={onCloseBottomSheet}
          />
          <Text style={styles.headerTitle}>Athma Liyanage</Text>
          <Icon
            name="add-circle-outline"
            color={theme.colors.PRIMARY}
            size={28}
          />
        </View>
      </View>
      <View style={styles.body}>
        <Image source={artist} resizeMode="cover" style={styles.image} />
        <View style={styles.textContent}>
          <BounceText
            text="Me Hitha Thaniyen – Athma Liyanage ft. Thilina Ruhunage"
            style={styles.title}
          />
          <BounceText text="Athma Liyanage" style={styles.meta} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.progress}>
          <View style={styles.progressTime}>
            <Text style={styles.progressTimeText}>0.00</Text>
            <Text style={styles.progressTimeText}>3.45</Text>
          </View>
          <View style={styles.progressBar}></View>
        </View>

        <View style={styles.controls}>
          <Icon
            name="play-skip-back-sharp"
            color={theme.colors.PRIMARY}
            size={28}
          />
          <Icon
            name="play-circle-sharp"
            color={theme.colors.PRIMARY}
            size={windowWidth / 6}
          />
          <Icon
            name="play-skip-forward-sharp"
            color={theme.colors.PRIMARY}
            size={28}
          />
        </View>
        <View style={styles.settings}>
          <Icon
            name="chevron-down-outline"
            color={theme.colors.PRIMARY}
            size={28}
          />
          <Icon
            name="add-circle-outline"
            color={theme.colors.PRIMARY}
            size={28}
          />
        </View>
      </View>
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      padding: spacing.SCALE_18,
    },
    header: {
      height: spacing.SCALE_18 * 3,
    },
    body: {
      flex: 1,
      justifyContent: 'space-around',
    },
    headerControl: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: windowWidth - spacing.SCALE_18 * 2,
      height: windowWidth - spacing.SCALE_18 * 2,
    },
    headerTitle: {
      ...typography.FONT_BOLD,
      fontSize: typography.FONT_SIZE_14,
      color: colors.PRIMARY,
    },
    textContent: {
      alignItems: 'flex-start',
    },
    title: {
      ...typography.FONT_BOLD,
      fontSize: typography.FONT_SIZE_18,
      color: colors.PRIMARY,
      marginBottom: spacing.SCALE_12,
    },
    meta: {
      ...typography.FONT_REGULAR,
      fontSize: typography.FONT_SIZE_14,
      color: colors.GREY,
    },
    progress: {
      alignContent: 'center',
      justifyContent: 'space-between',
    },
    progressTime: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    progressTimeText: {
      fontSize: typography.FONT_SIZE_12,
      color: colors.GREY,
    },
    progressBar: {
      height: spacing.SCALE_12 - 12,
      backgroundColor: colors.GREY,
      marginBottom: spacing.SCALE_16,
    },
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: spacing.SCALE_16,
    },
    settings: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: spacing.SCALE_16,
    },
  });
};

FullPlayer.propTypes = {
  onCloseBottomSheet: PropTypes.func.isRequired,
};

export default FullPlayer;
