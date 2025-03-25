import { Pressable, View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

function QuestionAnswear({ itemData, onPress, isSelected }) {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.answerItem, isSelected && styles.selectedAnswer]}
    >
      <View>
        <Text
          style={[styles.answerText, isSelected && styles.selectedAnswerTxt]}
        >
          {itemData}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  answerItem: {
    width: "100%",
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primaryTxt,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedAnswer: {
    backgroundColor: Colors.primaryTxt,
  },
  answerText: {
    fontSize: 18,
    fontFamily: "Nunito-Regular",
    color: Colors.primaryTxt,
  },
  selectedAnswerTxt: {
    color: Colors.primaryBcg,
  },
});

export default QuestionAnswear;
