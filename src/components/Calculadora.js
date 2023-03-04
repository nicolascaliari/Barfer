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



  const handleCalcular = () => {
    //Porcentajes de perros cachorros
    let porcentajesDosACuatro = 0.1;
    let porcentajesCuatroASeis = 0.08;
    let porcentajesSeisAOcho = 0.06;
    let porcentajesOchoADiez = 0.04;
    let porcentajesDiezADoce = 0.03;

    //porcentajes de perros adultos
    let porcentajeBajo = 0.02;
    let porcentajeMedio = 0.025;
    let porcentajeAlto = 0.03;


    //porcentajes de gatos cachorros
    let porcentajeDestete = 0.1;
    let porcentaje3A4 = 0.08;
    let porcentaje5A6 = 0.06;
    let porcentaje7A8 = 0.06;
    let porcentaje9A10 = 0.05;
    let porcentaje11A12 = 0.04;

    //porcentajes de gatos adultos
    let porcentajeBajoGato = 0.03;
    let porcentajeMedioGato = 0.035;
    let porcentajeAltoGato1 = 0.045;


    let calculo = 0;
    // Condicionales y calculos para perro
    if (animalType === "perro" && breedType === "cachorro" && selectedValue === "2-4") {
      calculo = name * porcentajesDosACuatro;
    } else if (animalType == "perro" && breedType === "cachorro" && selectedValue == "4-6") {
      calculo = name * porcentajesCuatroASeis;
    } else if (animalType == "perro" && breedType === "cachorro" && selectedValue == "6-8") {
      calculo = name * porcentajesSeisAOcho;
    } else if (animalType == "perro" && breedType === "cachorro" && selectedValue == "8-10") {
      calculo = name * porcentajesOchoADiez;
    } else if (animalType == "perro" && breedType === "cachorro" && selectedValue == "10-12") {
      calculo = name * porcentajesDiezADoce;
    } else {
      if (animalType == "perro" && breedType === "adulto" && selectedValue == "baja") {
        calculo = name * porcentajeBajo;
      } else if (animalType == "perro" && breedType === "adulto" && selectedValue == "media") {
        calculo = name * porcentajeMedio;
      } else if (animalType == "perro" && breedType === "adulto" && selectedValue == "alta") {
        calculo = name * porcentajeAlto;
      }else{
        calculo = 20;
      }

    }

    //Condicionales y calculos para gato:

    if (animalType == "gato" && breedType === "cachorro" && selectedValue == "Destete") {
      calculo = name * porcentajeDestete;
    } else if (animalType == "gato" && breedType === "cachorro" && selectedValue == "3-4") {
      calculo = name * porcentaje3A4;
    } else if (animalType == "gato" && breedType === "cachorro" && selectedValue == "5-6") {
      calculo = name * porcentaje5A6;
    } else if (animalType == "gato" && breedType === "cachorro" && selectedValue == "7-8") {
      calculo = name * porcentaje7A8;
    } else if (animalType == "gato" && breedType === "cachorro" && selectedValue == "9-10") {
      calculo = name * porcentaje9A10;
    } else if (animalType == "gato" && breedType === "cachorro" && selectedValue == "11-12") {
      calculo = name * porcentaje11A12;
    }else{
      if (animalType === "gato" && breedType === "adulto" && selectedValue == "baja") {
        calculo = name * porcentajeBajoGato;
      } else if (animalType === "gato" && breedType === "adulto" && selectedValue == "media") {
        calculo = name * porcentajeMedioGato;
      } else if (animalType === "gato" && breedType === "adulto" && selectedValue == "alta") {
        calculo = name * porcentajeAltoGato1;
      }
    }


    if(calculo < 1 ) {
      precioFinal = `${calculo * 1000} gramos`;
    }else {
      precioFinal = `${calculo.toFixed(1)} kilos`;
    }
    alert(precioFinal)

  }


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
                styles.buttonTextDog,
                animalType === "perro" && styles.activeButtonText,]}>
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
                  styles.buttonTextCachorro,
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

        {breedType === "cachorro" && animalType === "perro" && (
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
                <Picker.Item label="2 - 4" value="2-4" />
                <Picker.Item label="4 - 6 Meses" value="4-6" />
                <Picker.Item label="6 - 8 Meses" value="6-8" />
                <Picker.Item label="8 - 10 Meses" value="8-10" />
                <Picker.Item label="10 - 12 Meses" value="10-12" />
              </Picker>
            </View>
          </View>
        )}
        {/* Cachorro para gato: */}

        {breedType === "cachorro" && animalType === "gato" && (
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
                <Picker.Item label="Destete-2 Meses" value="deteste" />
                <Picker.Item label="3 - 4 Meses" value="3-4" />
                <Picker.Item label="5 - 6 Meses" value="5-6" />
                <Picker.Item label="7 - 8 Meses" value="7-8" />
                <Picker.Item label="9 - 10 Meses" value="9-10" />
                <Picker.Item label="11 - 12 Meses" value="11-12" />
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
                <Picker.Item label="Actividad Baja" value="baja" />
                <Picker.Item label="Actividad Media" value="media" />
                <Picker.Item label="Actividad Alta" value="alta" />
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
            <Text style={styles.buttonText} onPress={handleCalcular}>Calcular</Text>
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
    justifyContent: "center",
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
    width: 160,
    position: "absolute",
    right: 130,
  },
  button1: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    textAlign: "left",
    width: 140,
    textAlign: "center",
    position: "relative",
    left: 60,
  },
  contenedor_input: {
    marginTop:90,
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
  buttonTextDog: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 18,
  },
  buttonTextCachorro: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 18,
  }
});

export default Calculadora;