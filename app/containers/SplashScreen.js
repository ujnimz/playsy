import React, {useState, useEffect} from 'react';

import auth from '@react-native-firebase/auth';

import AppLoading from '../components/misc/AppLoading';
import HomeScreen from './HomeScreen';
import AuthStack from '../navigation/AuthStack';

function SplashScreen() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <AppLoading />;

  if (!user) {
    return <AuthStack />;
  }
  return <HomeScreen />;
}

export default SplashScreen;
