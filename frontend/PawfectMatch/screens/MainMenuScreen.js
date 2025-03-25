import { View, StyleSheet, Image } from "react-native";
import PressableButton from "../components/PressableButton";

function MainMenuScreen({ onScreenChange }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoPart}>
        <Image
          source={require("../assets/pawfectmatch-high-resolution-logo_processed.png")}
          style={styles.logoImg}
        />
      </View>
      <View style={styles.buttonsPart}>
        <PressableButton
          title={"Wypełnij formularz!"}
          onPress={() => onScreenChange("MatchForm")}
        />
        <PressableButton
          title={"Lista ras"}
          onPress={() => onScreenChange("BreedsList")}
        />
      </View>
    </View>
  );
}

export default MainMenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoPart: { flex: 1, justifyContent: "center", alignItems: "center" },
  buttonsPart: { flex: 1 },
  logoImg: { width: 300, height: 300 },
});
