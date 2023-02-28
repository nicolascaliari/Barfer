import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, onPress} from 'react-native';

const Carrito = ({ productos }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de compras</Text>
      {productos.map((producto) => (
        <View key={producto.id} style={styles.producto}>
          <Text style={styles.nombre}>{producto.nombre}</Text>
          <Text style={styles.precio}>${producto.precio}</Text>
        </View>
      ))}
           <TouchableOpacity style={styles.button1}>
            <Text style={{ color: 'white' }}>Comprar</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#E2E2E2',
    padding: 10,
    borderRadius: 23,
    borderWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom:300,
    right:-130,
    zIndex: 999,
    height:400,
    width:300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign:"center"

  },
  producto: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    marginVertical: 5,
  },
  nombre: {
    flex: 1,
    marginRight: 10,
  },
  precio: {
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: "#3662FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    textAlign: "center",
    width: 140,
    position: "absolute",
    right: 50
  },
});

export default Carrito;
