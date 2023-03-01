import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
const Calculadora = () => {
  const [animalType, setAnimalType] = useState(null);
  const [breedType, setBreedType] = useState(null);
  const [name, setName] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [activeButton, setActiveButton] = useState("perro");
  const handleAnimalTypePress = (type) => {
    setAnimalType(type);
    setBreedType(null);
    setActiveButton("perro"); // Reset breed type when changing animal type
  };

  const handleBreedTypePress = (breed) => {
    setBreedType(breed);
    setActiveButton("adulto");
  };

  return (
    <View style={styles.contenedor_father}>
      <View style={styles.contenedor}>
        <Text style={styles.tittle}>CALCULADORA</Text>
        <View style={styles.row}>
          <TouchableOpacity
            style={[
              styles.button,
              animalType === "perro" || activeButton === "perro"
                ? styles.activeButton
                : null,
            ]}
            onPress={() => handleAnimalTypePress("perro")}
          >
            <Text
              style={[
                styles.buttonText,
                animalType === "perro" && styles.activeButtonText,
              ]}
            >
              Perro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.button1,
              animalType === "gato" || activeButton === "gato"
                ? styles.activeButton
                : null,
            ]}
            onPress={() => handleAnimalTypePress("gato")}
          >
            <Text
              style={[
                styles.buttonText,
                animalType === "gato" && styles.activeButtonText,
              ]}
            >
              Gato
            </Text>
          </TouchableOpacity>
        </View>

        {animalType === "perro" && (
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.button,
                breedType === "cachorro" && styles.activeButton,
              ]}
              onPress={() => handleBreedTypePress("cachorro")}
            >
              <Text
                style={[
                  styles.buttonText,
                  breedType === "cachorro" && styles.activeButtonText,
                ]}
              >
                Cachorro
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button1,
                breedType === "adulto" && styles.activeButton,
              ]}
              onPress={() => handleBreedTypePress("adulto")}
            >
              <Text
                style={[
                  styles.buttonText,
                  breedType === "adulto" && styles.activeButtonText,
                ]}
              >
                Adulto
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {animalType === "gato" && (
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.button,
                breedType === "cachorro" && styles.activeButton,
              ]}
              onPress={() => handleBreedTypePress("cachorro")}
            >
              <Text
                style={[
                  styles.buttonText,
                  breedType === "cachorro" && styles.activeButtonText,
                ]}
              >
                Cachorro
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button1,
                breedType === "adulto" && styles.activeButton,
              ]}
              onPress={() => handleBreedTypePress("adulto")}
            >
              <Text
                style={[
                  styles.buttonText,
                  breedType === "adulto" && styles.activeButtonText,
                ]}
              >
                Adulto
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {breedType === "cachorro" && (
          <View style={styles.row_picker}>
            <View style={styles.container}>
              <Picker
                selectedValue={selectedValue}
                style={{
                  height: 50,
                  width: 200,
                  borderRadius: 50,
                }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Destete-2 Meses" value="java" />
                <Picker.Item label="3 - 4 Meses" value="js" />
                <Picker.Item label="5 - 6 Meses" value="java" />
                <Picker.Item label="7 - 8 Meses" value="js" />
                <Picker.Item label="9 - 10 Meses" value="java" />
                <Picker.Item label="11 - 12 Meses" value="js" />
              </Picker>
            </View>
          </View>
        )}

        {breedType === "adulto" && (
          <View style={styles.row_picker}>
            <View style={styles.container}>
              <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 200 }}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedValue(itemValue)
                }
              >
                <Picker.Item label="Actividad Baja" value="java" />
                <Picker.Item label="Actividad Media" value="js" />
                <Picker.Item label="Actividad Alta" value="java" />
              </Picker>
            </View>
          </View>
        )}

        <View style={styles.contenedor_input}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Ingrese el peso"
          />

          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            // value={name}
            placeholder="Total"
          />
        </View>
        <View style={styles.contenedor_btn_calcular}>
          <TouchableOpacity
            style={styles.calcular}
            onPress={() => handleBreedTypePress("cachorro")}
          >
            <Text style={styles.buttonText}>Calcular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor_father: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f2f2f2",
    height: "100%",
  },
  contenedor: {
    flex: 1,
    backgroundColor: "#fff",
    width: 350,
    height: "100%",
    borderRadius: 25,
    margin: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    elevation: 13,
  },
  activeButton: {
    backgroundColor: "#3662FF",
  },
  activeButtonText: {
    color: "white",
  },
  tittle: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 27,
    marginTop: 20,
    marginBottom: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginTop: 20,
  },
  row_picker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    textAlign: "center",
    width: 140,
    position: "absolute",
    right: 160,
  },
  button1: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    textAlign: "center",
    width: 140,
    textAlign: "center",
    position: "relative",
    left: 60,
  },
  contenedor_input: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "transparent",
    marginBottom: 30,
    borderBottomColor: "#D9D9D9",
    borderBottomWidth: 2,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 250,
  },
  contenedor_btn_calcular: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    position: "relative",
    left: 100,
    marginTop: 30,
    marginBottom: 30,
  },
  calcular: {
    backgroundColor: "#3662FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    textAlign: "center",
    width: 140,
  },
});

export default Calculadora;