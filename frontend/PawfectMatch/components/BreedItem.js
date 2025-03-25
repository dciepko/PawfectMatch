import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { getImageSource } from "../utils/imageMapper";

function BreedItem({ data, onClick }) {
  const imageSource = getImageSource(data.imagePatch);

  return (
    <Pressable style={styles.container} onPress={() => onClick(data)}>
      <View>
        {imageSource ? (
          <Image source={imageSource} style={styles.image} resizeMode="cover" />
        ) : (
          <Text>Brak obrazka</Text>
        )}
      </View>
      <View style={styles.breedTxtContainers}>
        <Text style={styles.breedNameTxt}>{data.name}</Text>
        <Text style={styles.breedDescTxt}>{data.description}</Text>
      </View>
    </Pressable>
  );
}

export default BreedItem;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primaryTxt,
    margin: 5,
    flexDirection: "row",
    padding: 10,
    backgroundColor: Colors.primaryTxt,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 10,
  },
  breedTxtContainers: {
    paddingVertical: 20,
    width: "64%",
    flexWrap: "wrap",
  },
  breedNameTxt: {
    fontSize: 24,
    fontFamily: "Nunito-Bold",
    width: "100%",
    flexWrap: "wrap",
  },
  breedDescTxt: {
    fontSize: 12,
    fontFamily: "Nunito-Italic",
    width: "100%",
    flexWrap: "wrap",
  },
});
