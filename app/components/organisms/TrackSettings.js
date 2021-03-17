import React from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '_theme/ThemeProvider';

const TrackSettings = ({currentItem}) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.titleHolder}>
        <Text style={styles.title}>
          {currentItem ? currentItem.title : 'No Track Selected'}
        </Text>
        <Text style={styles.subTitle}>
          {currentItem
            ? currentItem.artists.map((artist) => artist.label)
            : 'No Track Selected'}
        </Text>
      </View>

      <View style={styles.settingsHolder}>
        <TouchableOpacity style={styles.settingsRow}>
          <Icon style={styles.icon} size={16} name="add-circle-outline" />
          <Text style={styles.text}>Add to Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsRow}>
          <Icon style={styles.icon} size={16} name="share-social" />
          <Text style={styles.text}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsRow}>
          <Icon style={styles.icon} size={16} name="heart-outline" />
          <Text style={styles.text}>Add to Favorite</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsRow}>
          <Icon style={styles.icon} size={16} name="sad-outline" />
          <Text style={styles.text}>Don't like this</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsRow}>
          <Icon style={styles.icon} size={16} name="people-outline" />
          <Text style={styles.text}>Song Credits</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = ({colors, typography, spacing}) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.SURFACE,
      padding: 16,
      height: 600,
      alignContent: 'flex-start',
    },
    titleHolder: {
      alignItems: 'center',
    },
    title: {
      fontSize: typography.FONT_SIZE_18,
      color: colors.PRIMARY,
      ...typography.FONT_BOLD,
    },
    subTitle: {
      fontSize: typography.FONT_SIZE_14,
      color: colors.PRIMARY,
      ...typography.FONT_MEDIUM,
    },
    settingsHolder: {
      flex: 1,
      paddingTop: spacing.SCALE_18,
    },
    settingsRow: {
      flexDirection: 'row',
      padding: spacing.SCALE_12,
    },
    icon: {
      color: colors.PRIMARY,
      marginRight: spacing.SCALE_8,
    },
    text: {
      color: colors.PRIMARY,
      fontSize: typography.FONT_SIZE_14,
    },
  });
};

export default TrackSettings;
