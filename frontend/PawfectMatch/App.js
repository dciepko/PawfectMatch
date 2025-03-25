import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Colors from "./constants/Colors";
import MainMenuScreen from "./screens/MainMenuScreen";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import BreedsListScreen from "./screens/BreedsListScreen";
import MatchFormScreen from "./screens/MatchFormScreen";
import MatchScreen from "./screens/MatchScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("MainMenu");
  const [fontsLoaded] = useFonts({
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold-Italic": require("./assets/fonts/Nunito-BoldItalic.ttf"),
    "Nunito-Italic": require("./assets/fonts/Nunito-Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  function handleChangeScreen(screen) {
    setCurrentScreen(screen);
  }

  function renderScreen() {
    switch (currentScreen) {
      case "MainMenu":
        return <MainMenuScreen onScreenChange={handleChangeScreen} />;
      case "BreedsList":
        return <BreedsListScreen onScreenChange={handleChangeScreen} />;
      case "MatchForm":
        return <MatchFormScreen onScreenChange={handleChangeScreen} />;
      case "MatchScreen":
        return <MatchScreen onScreenChange={handleChangeScreen} />;
      default:
        return <MainMenuScreen onScreenChange={handleChangeScreen} />;
    }
  }

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.container} onLayout={onLayoutRootView}>
        {renderScreen()}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBcg,
  },
});
