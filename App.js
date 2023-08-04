import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import LoggedOutNav from "./navigators/LoggedOutNav";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar } from "./apollo";
import LoggedInNav from "./navigators/LoggedInNav";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const isLoggedIn = useReactiveVar(isLoggedInVar);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        const fontsToLoad = [Ionicons.font];
        const fontPromises = fontsToLoad.map((font) => Font.loadAsync(font));
        const imagesToLoad = [
          require("./assets/logo.png"),
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png",
        ];
        const imagePromises = imagesToLoad.map((image) =>
          Asset.loadAsync(image)
        );
        await Promise.all([...fontPromises, ...imagePromises]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
      </NavigationContainer>
    </ApolloProvider>
  );
}
