import React from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";
import { StyleSheet } from "react-native";

const Reparto = () => {
  return (
    <View style={styles.contenedor_father}>
      <View style={styles.contenedor}>
        <Text style={styles.tittle}>Repardo Barfer</Text>
        <View style={styles.container_map}>
          <WebView
            source={{
              uri: "https://www.google.com/maps/d/embed?mid=1gX6ClDRQSXW4KsDgE34ZuBqbh6Vlrlc&ehbc=2E312F",
            }}
            style={{ flex: 1 }}
          />
        </View>
        <View style={styles.horarios_bg}>
          <View style={styles.horarios_color}></View>
          <Text style={styles.text_horarios}>JUEVES DE 14 A 21HS</Text>
        </View>
        <View style={styles.horarios_bg}>
          <View style={styles.horarios_color}></View>
          <Text style={styles.text_horarios}>SABADOS DE 10 A 17HS</Text>
        </View>
        <View style={styles.horarios_bg}>
          <View style={styles.horarios_color}></View>
          <Text style={styles.text_horarios}>MIERCOLES DE 15 A 20HS</Text>
        </View>
        <View style={styles.horarios_bg}>
          <View style={styles.horarios_color}></View>
          <Text style={styles.text_horarios}>LUNES DE 14 A 21HS</Text>
        </View>
        <View style={styles.horarios_bg}>
          <View style={styles.horarios_color}></View>
          <Text style={styles.text_horarios}>MIERCOLES DE 14 A 21HS</Text>
        </View>
      </View>
    </View>
  );
};

export default Reparto;

const styles = StyleSheet.create({
  contenedor_father: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f2f2f2",
    height: 800,
  },
  contenedor: {
    flex: 1,
    backgroundColor: "#fff",
    width: 370,
    height: "100%",
    borderRadius: 25,
    margin: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    alignItems: "center",
  },
  tittle: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: 27,
    marginTop: 20,
    marginBottom: 40,
  },
  container_map: {
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.11,
    shadowRadius: 14,
    elevation: 2,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 31,
    width: 350,
    height: 300,
    bottom: 15,
    marginBottom: 15,
  },
  horarios_bg: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 41,
    borderRadius: 31,
    width: 340,
    backgroundColor: "#D9D9D9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 4,
    shadowRadius: 14,
    elevation: -2,
    overflow: "hidden",
    marginBottom: 15,
  },

  //CORREGIR CODIGO SEA MAS LEGIBLE
  horarios_color: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 108,
    height: "100%",
    overflow: "hidden",
    shadowColor: "rgba(0, 0, 0, 0.11)",
    boxShadow: "inset 0px 2px 14px rgba(0, 0, 0, 0.11)",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 2,
    backgroundColor:
      "linear-gradient(0deg, rgba(249, 168, 37, 0.75), rgba(249, 168, 37, 0.75)), #FFFFFF",
    borderRadius: 31,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },

  //FIN CORRECCION
  text_horarios: {
    color: "rgba(0, 0, 0, 0.77);",
    fontWeight: "bold",
    textAlign: "center",
    right: 25,
    bottom: 10,
    fontSize: 15,
  },
});
