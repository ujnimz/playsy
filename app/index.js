import React, {useEffect} from 'react';
import TrackPlayer from 'react-native-track-player';

import SplashScreen from '_screens/SplashScreen';

const AppRoot = () => {
  TrackPlayer.updateOptions({
    //stopWithApp: false,
    // Media controls capabilities
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_STOP,
      TrackPlayer.CAPABILITY_NEXT,
      TrackPlayer.CAPABILITY_PREVIOUS,
    ],

    // Capabilities that will show up when the notification is in the compact form on Android
    compactCapabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
    ],
  });

  const setupTrackPlayer = async () => {
    try {
      await TrackPlayer.setupPlayer();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setupTrackPlayer();
    return () => {
      TrackPlayer.destroy();
    };
  }, []);

  return <SplashScreen />;
};

export default AppRoot;
