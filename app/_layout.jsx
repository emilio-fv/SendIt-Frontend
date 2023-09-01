import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { FONTS } from '../constants';

// Make splash screen visible while assets/resources loading
SplashScreen.preventAutoHideAsync();

export default () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts(FONTS);

  // Handle preparing app 
  useEffect(() => {
    async function prepare() {
      try {
        // TODO: Handle preloading other assets or fetching resources
        await new Promise(resolve => setTimeout(resolve, 2500));
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  })

  // Handle hiding splash screen upon successful loading
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded])

  if (!appIsReady) {
    return null;
  } 

  return (
    <Slot />
  )
};