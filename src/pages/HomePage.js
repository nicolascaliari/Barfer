import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Comida from "../components/Comida"

const Options = ({ onSelectOption }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Que producto estas buscando?</Text>
      </View>

      <View style={styles.optionsContainer}>
        <Text style={styles.option} onPress={() => onSelectOption("comida")}>
          Comida
        </Text>
        <Text style={styles.option} onPress={() => onSelectOption("complementos")}>
          Complementos
        </Text>
        <Text style={styles.option} onPress={() => onSelectOption("calculadora")}>
          Calculadora
        </Text>
        <Text style={styles.option} onPress={() => onSelectOption("repartos")}>
          Repartos
        </Text>
      </View>
    </View>
  );
};

// const Comida = () => {
//   return <Text>Componente de Comida</Text>;
// };

// const Complementos = () => {
//   return <Text>Componente de Complementos</Text>;
// };

// const Calculadora = () => {
//   return <Text>Componente de Calculadora</Text>;
// };

// const Repartos = () => {
//   return <Text>Componente de Repartos</Text>;
// };

const Menu = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const renderOptionComponent = () => {
    switch (selectedOption) {
      case "comida":
        return <Comida />;
      case "complementos":
        return <Complementos />;
      case "calculadora":
        return <Calculadora />;
      case "repartos":
        return <Repartos />;
      default:
        return null;
    }
  };

  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar producto..."
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>
      <Options onSelectOption={setSelectedOption} />
      <View style={styles.optionComponentContainer}>
        {renderOptionComponent()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    marginBottom: 140,
    fontSize: 20,
    fontWeight: "bold",
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  option: {
    fontSize: 14,
    fontWeight: "bold",
    paddingVertical: 10,
    margin: 10,
  },
  optionComponentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    width: "100%",
    padding: 20,
  },
  searchInput: {
    backgroundColor: "#D9D9D9",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  
  },
});

export default Menu;
