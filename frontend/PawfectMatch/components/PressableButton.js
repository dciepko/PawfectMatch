import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function PressableButton({ title, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={style.buttonContainer}>
        <Text style={style.buttonTxt}>{title}</Text>
      </View>
    </Pressable>
  );
}

export default PressableButton;

const style = StyleSheet.create({
  buttonContainer: {
    borderWidth: 2,
    borderColor: Colors.primaryTxt,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonTxt: {
    color: Colors.primaryTxt,
    fontSize: 24,
    fontFamily: "Nunito-Bold",
  },
});
