import { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import BreedItem from "../components/BreedItem";
import BreedModal from "../components/BreedModal";
import Breeds from "../constants/Breeds";
import Colors from "../constants/Colors";

function BreedsListScreen({ onScreenChange }) {
  const [dogBreeds, setDogBreeds] = useState(Breeds);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState("");

  function handleModalEnable(data) {
    setIsModalVisible(true);
    setModalData(data);
  }

  function handleModalDisable() {
    setIsModalVisible(false);
  }

  // useEffect(() => {
  //   console.log("probujesz wgl?");
  //   fetch("http://localhost:5110/api/DogBreeds")
  //     .then((response) => {
  //       if (!response.ok) {
  //         console.log("nie okej");
  //         throw new Error("Network response was not ok");
  //       }
  //       console.log("okej");
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setDogBreeds(data);
  //       console.log("coś");
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Fetch error:", error);
  //     });
  // }, []);

  function renderModal() {
    return (
      <BreedModal
        visible={isModalVisible}
        data={modalData}
        onClick={handleModalDisable}
      />
    );
  }

  return (
    <ScrollView style={style.container}>
      <Pressable onPress={() => onScreenChange("MainMenu")}>
        <View style={style.arrowContainer}>
          <Text style={style.arrowTxt}>{"\u2190"}</Text>
        </View>
      </Pressable>
      <View>
        <FlatList
          alwaysBounceVertical={false}
          data={dogBreeds}
          renderItem={(itemData) => {
            return (
              <>
                <BreedItem onClick={handleModalEnable} data={itemData.item} />
              </>
            );
          }}
        />
      </View>
      {renderModal()}
    </ScrollView>
  );
}

export default BreedsListScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  arrowContainer: {
    marginLeft: 5,
  },
  arrowTxt: {
    fontSize: 40,
    color: Colors.primaryTxt,
    fontFamily: "Nunito-Bold",
  },
});
