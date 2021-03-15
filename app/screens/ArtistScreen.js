import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import {getSingles, clearSingles} from '_redux/actions/singles';

import {useTheme} from '_theme/ThemeProvider';

import AppLoading from '_atoms/AppLoading';
import IconButton from '_atoms/IconButton';
import TrackList from '_molecules/TrackList';

const ArtistScreen = ({
  route,
  navigation,
  getSingles,
  clearSingles,
  singlesState,
}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const {item} = route.params;

  useEffect(() => {
    getSingles();
    return () => {
      clearSingles();
    };
  }, []);

  const DATA = singlesState.singlesArray;

  if (singlesState.loading) return <AppLoading />;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={{uri: item.image}} style={styles.image}>
          <LinearGradient
            style={styles.textHolder}
            colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}>
            <Text style={styles.text}>{item.title}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                style={styles.metaIcon}
                name="heart-outline"
                onPress={() => navigation.goBack()}
              />
              <Text style={styles.meta}>10K</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={styles.body}>
        <View style={styles.controlPanel}>
          <IconButton
            icon="share-social"
            bgColor={theme.colors.SECONDARY}
            iconColor={theme.colors.PRIMARY}
          />
          <IconButton
            icon="play"
            bgColor={theme.colors.SECONDARY}
            iconColor={theme.colors.PRIMARY}
            text="Play"
          />
          <IconButton
            icon="heart-outline"
            bgColor={theme.colors.SECONDARY}
            iconColor={theme.colors.PRIMARY}
          />
        </View>

        <TrackList data={DATA} />
      </View>
    </ScrollView>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.BACKGROUND,
    },
    header: {
      height: 400,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      alignContent: 'space-between',
      justifyContent: 'flex-end',
    },
    textHolder: {
      padding: spacing.SCALE_12,
    },
    text: {
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_16 * 2,
      ...typography.FONT_BOLD,
    },
    meta: {
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_12,
      ...typography.FONT_REGULAR,
    },
    metaIcon: {
      textAlign: 'center',
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_14,
      marginRight: spacing.SCALE_8 / 2,
    },
    iconHolder: {
      paddingTop: spacing.SAFE_TOP,
      paddingLeft: spacing.SCALE_12,
    },
    iconButton: {
      backgroundColor: colors.BACKGROUND,
      padding: spacing.SCALE_12 / 4,
      width: 34,
      borderRadius: (34 * 10) / 2,
      opacity: 0.7,
    },
    backIcon: {
      textAlign: 'center',
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_12 * 2,
    },
    body: {
      padding: spacing.SCALE_12,
    },
    controlPanel: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: spacing.SCALE_18,
      paddingBottom: spacing.SCALE_18,
    },
    shareIcon: {
      color: colors.PRIMARY,
      padding: spacing.SCALE_12,
      backgroundColor: colors.SECONDARY,
      borderRadius: 20,
      overflow: 'hidden',
    },
    playIcon: {
      color: colors.PRIMARY,
      padding: spacing.SCALE_12,
      backgroundColor: colors.SECONDARY,
      borderRadius: 20,
      overflow: 'hidden',
    },
    playText: {
      paddingLeft: 25,
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_14,
      ...typography.FONT_BOLD,
    },
  });
};

ArtistScreen.propTypes = {
  getSingles: PropTypes.func.isRequired,
  clearSingles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  singlesState: state.singlesState,
});

export default connect(mapStateToProps, {getSingles, clearSingles})(
  ArtistScreen,
);
