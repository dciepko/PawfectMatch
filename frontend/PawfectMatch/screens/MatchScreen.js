import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import Colors from "../constants/Colors";
import Breeds from "../constants/Breeds";
import BreedItem from "../components/BreedItem";
import { useState } from "react";
import BreedModal from "../components/BreedModal";

function MatchScreen({ onScreenChange }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState("");

  function handleModalEnable(data) {
    setIsModalVisible(true);
    setModalData(data);
  }

  function handleModalDisable() {
    setIsModalVisible(false);
  }

  return (
    <ScrollView style={style.container}>
      <Pressable onPress={() => onScreenChange("MainMenu")}>
        <View style={style.arrowContainer}>
          <Text style={style.arrowTxt}>{"\u2190"} </Text>
          <Text style={style.arrowTxtWithoutArrow}>Powrót do menu</Text>
        </View>
      </Pressable>
      <View style={style.upperTextContainer}>
        <Text style={style.upperText}>Oto twoje idealne połączenie!</Text>
      </View>
      <Pressable onPress={() => handleModalEnable(Breeds[3])}>
        <View style={style.mainMatchContainer}>
          <View style={style.mainImageContainer}>
            <Image
              source={require("../assets/pictures/German Shepherd.png")}
              style={style.mainImage}
            />
          </View>
          <View style={style.mainTextContainer}>
            <Text style={style.nameText}>{Breeds[3].name}</Text>
            <Text style={style.descriptionText}>{Breeds[3].description}</Text>
          </View>
        </View>
      </Pressable>
      <View style={style.otherMatchesContainer}>
        <View style={style.otherMatchesTextContainer}>
          <Text style={style.otherMatchesText}>Oto inne połączenia:</Text>
        </View>
        <View>
          <BreedItem
            data={Breeds[21]}
            onClick={() => {
              handleModalEnable(Breeds[21]);
            }}
          />
          <BreedItem
            data={Breeds[22]}
            onClick={() => {
              handleModalEnable(Breeds[22]);
            }}
          />
        </View>
      </View>
      <BreedModal
        visible={isModalVisible}
        data={modalData}
        onClick={handleModalDisable}
      />
    </ScrollView>
  );
}

export default MatchScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  arrowContainer: {
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  arrowTxt: {
    fontSize: 40,
    color: Colors.primaryTxt,
    fontFamily: "Nunito-Bold",
  },
  arrowTxtWithoutArrow: {
    fontSize: 20,
    color: Colors.primaryTxt,
    fontFamily: "Nunito-Bold",
    paddingTop: 14,
  },
  upperTextContainer: {
    marginBottom: 20,
    paddingBottom: 10,
    paddingTop: 10,
    height: 100,
  },
  upperText: {
    fontSize: 30,
    color: Colors.secondaryTxt,
    fontFamily: "Nunito-Bold-Italic",
    textAlign: "center",
  },
  mainMatchContainer: {
    padding: 20,
    borderWidth: 2,
    borderColor: Colors.secondaryTxt,
    borderStyle: "dotted",
    borderRadius: 5,
  },
  mainImageContainer: {
    alignItems: "center",
  },
  mainImage: {
    width: 350,
    height: 350,
    borderRadius: 5,
  },
  mainTextContainer: {
    alignItems: "center",
    padding: 8,
  },
  nameText: {
    fontSize: 30,
    fontFamily: "Nunito-Bold",
    color: Colors.primaryTxt,
  },
  descriptionText: {
    fontSize: 18,
    fontFamily: "Nunito-Italic",
    color: Colors.primaryTxt,
    textAlign: "center",
  },
  otherMatchesContainer: {
    margin: 18,
  },
  otherMatchesTextContainer: {
    marginBottom: 10,
  },
  otherMatchesText: {
    fontSize: 20,
    fontFamily: "Nunito-Bold",
    color: Colors.primaryTxt,
  },
});
