import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  Pressable,
} from "react-native";
import QuestionInput from "../components/QuestionInput";
import Colors from "../constants/Colors";
import FormQuestions from "../constants/FormQuestions";
import { useState } from "react";

function MatchFormScreen({ onScreenChange }) {
  const initialFormState = FormQuestions.reduce((acc, question) => {
    acc[question.questionKey] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  console.log(formData);

  return (
    <ScrollView style={style.container}>
      <Pressable onPress={() => onScreenChange("MainMenu")}>
        <View style={style.arrowContainer}>
          <Text style={style.arrowTxt}>{"\u2190"}</Text>
        </View>
      </Pressable>
      <View style={style.upperTextContainer}>
        <Text style={style.upperText}>
          Wypełnij formularz, aby sprawdzić, jaki pies najlepiej do Ciebie
          pasuje!
        </Text>
      </View>
      <View>
        <FlatList
          data={FormQuestions}
          alwaysBounceVertical={false}
          renderItem={(itemData) => {
            return (
              <QuestionInput
                handleChooseOption={handleInputChange}
                data={itemData.item}
              />
            );
          }}
        />
      </View>
      <View style={style.submitButtonContainer}>
        <Pressable
          style={style.submitButton}
          onPress={() => onScreenChange("MatchScreen")}
        >
          <View>
            <Text style={style.submitButtonTxt}>Zatwierdź</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default MatchFormScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 12,
  },
  arrowContainer: {
    marginLeft: 5,
  },
  arrowTxt: {
    fontSize: 40,
    color: Colors.primaryTxt,
    fontFamily: "Nunito-Bold",
  },
  upperTextContainer: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: Colors.secondaryTxt,
    borderStyle: "dotted",
    height: 100,
  },
  upperText: {
    fontSize: 20,
    color: Colors.secondaryTxt,
    fontFamily: "Nunito-Bold-Italic",
    textAlign: "center",
  },
  submitButtonContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: Colors.primaryTxt,
    padding: 16,
    borderRadius: 5,
    width: "97.5%",
  },
  submitButtonTxt: {
    textAlign: "center",
    fontSize: 32,
    color: Colors.primaryBcg,
    fontFamily: "Nunito-Bold",
  },
});
