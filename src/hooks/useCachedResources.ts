import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering our app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          "figtree-regular": require("@src/assets/fonts/Figtree-Regular.ttf"),
          "figtree-bold": require("@src/assets/fonts/Figtree-Bold.ttf"),
          "figtree-medium": require("@src/assets/fonts/Figtree-Medium.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
