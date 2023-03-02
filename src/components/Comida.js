import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesome } from "react-native-vector-icons";

function Comida() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const productImage = require("../../comida.png");
  const products = [
    { id: 1, name: "Barfer box perro pollo", price: 1000, imageUri: productImage, },
    { id: 2, name: "Barfer box perro pollo", price: 2340, imageUri: productImage, },
    { id: 3, name: "Barfer box perro pollo", price: 3660, imageUri: productImage, },
    { id: 4, name: "Barfer box perro pollo", price: 4230, imageUri: productImage, },
    { id: 5, name: "Barfer box perro pollo", price: 5041, imageUri: productImage, }
  ];

  const productsCat = [
    { id: 6, name: "Barfer box Gato pollo", price: 10, imageUri: productImage, },
    { id: 7, name: "Barfer box perro pollo", price: 20, imageUri: productImage, },
    { id: 8, name: "Barfer box perro pollo", price: 30, imageUri: productImage, },
    { id: 9, name: "Barfer box perro pollo", price: 40, imageUri: productImage, },
    { id: 10, name: "Barfer box perro pollo", price: 50, imageUri: productImage, }
  ];


  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.imageUri} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>

      <View style={styles.contenedor_boton}>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <FontAwesome name="shopping-cart" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );







  const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.cartButton} onPress={() => setShowCart(!showCart)}>
        <FontAwesome name="shopping-cart" size={30} color="black" />
        <Text style={styles.cartButtonText}>{cartItems.length}</Text>
      </TouchableOpacity>
      {showCart && (
        <View style={styles.cartContainer}>
          <TouchableOpacity onPress={() => setShowCart(false)}>
            <FontAwesome name="close" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.cartTitle}>Carritos de compras</Text>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={item.imageUri} style={styles.cartItemImage} />
                <View style={styles.cartItemDetails}>
                  <Text>{item.name}</Text>
                  <Text>${item.price} x {item.quantity}</Text>
                </View>
                <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
                  <FontAwesome name="trash" size={18} color="black" />
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}

      <Text style={styles.txt_dog}>Para perro</Text>
      <FlatList style={styles.flatList_products_dog}
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
      />


      <Text style={styles.txt_cat}>Para gato</Text>
      <FlatList style={styles.flatList_products_cat}
        data={productsCat}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  txt_dog: {
    position: "relative",
    bottom: 41,
    fontWeight: "700",
    fontSize: 15
  },
  txt_cat: {
    fontWeight: "700",
    fontSize: 15
  },
  flatList_products_dog: {
    position: "relative",
    right: 10,
    width: 340,
    height: 270,
    marginBottom: 60,
    marginTop: -40
  },
  flatList_products_cat: {
    position: "relative",
    right: 10,
    width: 340,
    height: 270,
    marginBottom:60
  },
  item: {
    width: 153,
    height: 214,
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 30,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    padding: 5,
    fontSize: 17,
    textAlign: "center",
    color: "#171717",
    fontWeight: "700"
  },
  price: {
    padding: 15,
    fontSize: 17,
    textAlign: "center",
    color: "#006AE3"
  },
  addButton: {
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    padding: 10,
  },
  contenedor_boton: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "flex-end",
    margin: 20,
    position: "relative",
    bottom: 21,
    left: 1
  },
  addButtonText: {
    color: 'white',
    textAlign: "center"
  },
  cartButton: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    bottom: 240,
    left: 300
  },
  cartButtonText: {

  },
  cartTitle: {
    fontSize: 30,
    color: "#0053B1",
    fontWeight: "700"

  },
  cartContainer: {
    backgroundColor: '#fff',

  }
});


export default Comida