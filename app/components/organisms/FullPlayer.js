import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  trackPlay,
  trackPause,
  trackNext,
  trackPrevious,
} from '_redux/actions/player';

import {useTheme} from '_theme/ThemeProvider';
import {windowWidth} from '_utilities/Dimentions';

import BounceText from '_atoms/BounceText';

const artist = require('_assets/images/artist.jpg');

const FullPlayer = ({
  onCloseBottomSheet,
  trackPlay,
  trackPause,
  trackNext,
  trackPrevious,
  playerState,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {play} = playerState;

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
            onPress={trackPrevious}
          />
          {play ? (
            <Icon
              name="pause-circle-sharp"
              color={theme.colors.PRIMARY}
              size={windowWidth / 6}
              onPress={trackPause}
            />
          ) : (
            <Icon
              name="play-circle-sharp"
              color={theme.colors.PRIMARY}
              size={windowWidth / 6}
              onPress={trackPlay}
            />
          )}
          <Icon
            name="play-skip-forward-sharp"
            color={theme.colors.PRIMARY}
            size={28}
            onPress={trackNext}
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
      paddingLeft: spacing.SCALE_18,
      paddingRight: spacing.SCALE_18,
      paddingTop: Platform.OS === 'ios' ? spacing.SCALE_12 * 2 : 0,
      paddingBottom: Platform.OS === 'ios' ? spacing.SCALE_18 * 3 : 0,
    },
    header: {
      height: spacing.SCALE_18 * 2,
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
  trackPlay: PropTypes.func.isRequired,
  trackPause: PropTypes.func.isRequired,
  trackNext: PropTypes.func.isRequired,
  trackPrevious: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  playerState: state.playerState,
});

export default connect(mapStateToProps, {
  trackPlay,
  trackPause,
  trackNext,
  trackPrevious,
})(FullPlayer);
