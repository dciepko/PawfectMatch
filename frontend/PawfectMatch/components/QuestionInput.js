import { View, Text, StyleSheet, FlatList } from "react-native";
import QuestionAnswear from "./QuestionAnswear";
import Colors from "../constants/Colors";
import { useState } from "react";

function QuestionInput({ handleChooseOption, data }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleOptionPress = (answer) => {
    if (selectedAnswer === answer) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(answer);
      console.log(data.answearsKey[data.answears.indexOf(answer)]);
      handleChooseOption(
        data.questionKey,
        data.answearsKey[data.answears.indexOf(answer)]
      );
    }
  };

  return (
    <View style={style.container}>
      <View>
        <Text style={style.questionTxt}>{data.question}</Text>
      </View>
      <View style={style.answearsContainer}>
        <FlatList
          data={data.answears}
          renderItem={(itemData) => {
            return (
              <QuestionAnswear
                itemData={itemData.item}
                isSelected={itemData.item === selectedAnswer}
                onPress={() => handleOptionPress(itemData.item)}
              />
            );
          }}
          keyExtractor={(item) => item.toString()}
          style={style.answearsList}
        />
      </View>
    </View>
  );
}

export default QuestionInput;

const style = StyleSheet.create({
  container: {},
  questionContainer: {},
  questionTxt: {
    fontSize: 24,
    fontFamily: "Nunito-Bold",
    color: Colors.primaryTxt,
    paddingHorizontal: 6,
  },
  answearsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  answearsList: {
    width: "97.5%",
  },
});
