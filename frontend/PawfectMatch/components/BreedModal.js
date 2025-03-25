import {
  Modal,
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { getImageSource } from "../utils/imageMapper";
import Colors from "../constants/Colors";

const translations = {
  requiredAttention: "Wymagana uwaga",
  activityLevel: "Poziom aktywności",
  independenceLevel: "Poziom samodzielności",
  isAllergenic: "Alergiczny",
  isGoodWithKids: "Dobry dla dzieci",
  isGoodWithDogs: "Dobry dla psów",
  isGoodWithCats: "Dobry dla kotów",
  isGoodWithOtherAnimals: "Dobry dla innych zwierząt",
  size: "Rozmiar",
};

const valueTranslations = {
  HIGH: "Wysoki",
  MEDIUM: "Średni",
  LOW: "Niski",
  true: "Tak",
  false: "Nie",
  LARGE: "Duży",
  MEDIUM: "Średni",
  SMALL: "Mały",
};

function BreedModal({ data, visible, onClick }) {
  const imageSource = getImageSource(data.imagePatch);

  const breedInfo = Object.entries(data)
    .filter(([key]) => Object.keys(translations).includes(key))
    .map(([key, value]) => ({
      label: translations[key],
      value: valueTranslations[value] || value,
    }));

  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView style={styles.modalContainer}>
        <Pressable onPress={onClick} style={styles.closeContainer}>
          <View>
            <Text style={styles.closeTxt}>X</Text>
          </View>
        </Pressable>
        <View style={styles.breedContainer}>
          <View style={styles.imageContainer}>
            {imageSource ? (
              <Image
                source={imageSource}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <Text>Brak obrazka</Text>
            )}
          </View>
          <View style={styles.mainInfoContainer}>
            <Text style={styles.nameTxt}>{data.name}</Text>
            <Text style={styles.descTxt}>{data.description}</Text>
          </View>
          <View style={styles.additionalInfoContainer}>
            <View style={styles.additionalInfoContainer}>
              {breedInfo.map((item, index) => (
                <View key={index} style={styles.infoRow}>
                  <Text style={styles.label}>{item.label}:</Text>
                  <Text style={styles.value}>{item.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

export default BreedModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: Colors.secondaryBcg,
    flex: 1,
  },
  closeContainer: {
    margin: 10,
  },
  closeTxt: {
    color: Colors.primaryTxt,
    fontSize: 24,
    fontFamily: "Nunito-Bold",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 360,
    height: 360,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  mainInfoContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
  },
  nameTxt: {
    fontSize: 32,
    fontFamily: "Nunito-Bold",
    color: Colors.primaryTxt,
    paddingBottom: 10,
  },
  descTxt: {
    fontSize: 16,
    fontFamily: "Nunito-Italic",
    color: Colors.secondaryTxt,
  },
  additionalInfoContainer: {
    width: "100%",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondaryTxt,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontFamily: "Nunito-Bold",
    color: Colors.primaryTxt,
  },
  value: {
    fontSize: 16,
    fontFamily: "Nunito-Regular",
    color: Colors.secondaryTxt,
  },
});
