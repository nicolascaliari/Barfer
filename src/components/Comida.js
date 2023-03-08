import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from "react-native-vector-icons";
const productImage = require("../../comida.png");
const PRODUCTS = [
  { id: 1, name: 'Barfer box perro pollo', price: 3000, priceDos: 4344, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
  { id: 2, name: 'Barfer box perro cerdo', price: 3222, priceDos: 5333, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
  { id: 3, name: 'Barfer box perro vaca', price: 1112, priceDos: 3555, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
  { id: 4, name: 'Barfer box perro mix', price: 19995, priceDos: 2777, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
  { id: 5, name: 'Huesos carnosos', price: 19995, priceDos: 2777, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
];


const PRODUCTS_CAT = [
  { id: 6, name: "Barfer box Gato pollo", price: 10, priceDos: 4344, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
  { id: 7, name: "Barfer box perro pollo", price: 20, priceDos: 4344, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
  { id: 8, name: "Barfer box perro pollo", price: 30, priceDos: 4344, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
  { id: 9, name: "Barfer box perro pollo", price: 40, priceDos: 4344, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
  { id: 10, name: "Barfer box perro pollo", price: 50, priceDos: 4344, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, }
];


const COMPLEMENTOS = [
  { id: 11, name: "Sardinas", price: 900, priceDos: 4344, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
  { id: 12, name: "Cornalitos", price: 500, priceDos: 4344, kilo1: '5 kg', kilo2: '10 kg', imageUri: productImage, },
]


const ProductItem = ({ product, onPress }) => {
  const [selectedKilo, setSelectedKilo] = useState(product.kilo1);

  return (
    <View style={styles.productItem}>
      <Image source={product.imageUri} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${selectedKilo === product.kilo1 ? product.price : product.priceDos}</Text>
      <View style={styles.kiloButtonsContainer}>
        <TouchableOpacity
          style={[styles.kiloButton, selectedKilo === product.kilo1 && styles.selectedKiloButton]}
          onPress={() => setSelectedKilo(product.kilo1)}
        >
          <Text style={styles.kiloButtonText}>{product.kilo1}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.kiloButton, selectedKilo === product.kilo2 && styles.selectedKiloButton]}
          onPress={() => setSelectedKilo(product.kilo2)}
        >
          <Text style={styles.kiloButtonText}>{product.kilo2}</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.contenedor_boton}>
        <TouchableOpacity style={styles.addButton} onPress={() => onPress(product , selectedKilo)}>
          <FontAwesome name="shopping-cart" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const CartItem = ({ item }) => (
//   <View style={styles.cartItem}>
//     <Text style={styles.cartItemName}>{item.name}</Text>
//     <Text style={styles.cartItemPrice}>{item.price} € / kg</Text>
//     <Text style={styles.cartItemQuantity}>Cantidad: {item.quantity} {item.kilo}</Text>
//   </View>
// );

const Comida = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product, kilo) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id && item.price === (kilo === product.kilo1 ? product.price : product.priceDos));
    if (existingItemIndex !== -1) {
      // El producto ya existe en el carrito con el mismo precio
      setCartItems(prevCartItems => {
        const newCartItems = [...prevCartItems];
        newCartItems[existingItemIndex].quantity += 1;
        return newCartItems;
      });
    } else {
      // El producto no existe en el carrito
      setCartItems(prevCartItems => [
        ...prevCartItems,
        {
          id: product.id,
          name: product.name,
          price: kilo === product.kilo1 ? product.price : product.priceDos,
          quantity: 1,
          kilo: kilo,
        },
      ]);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

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
          <TouchableOpacity style={styles.clearCartButton} onPress={handleClearCart}>
            <Text style={styles.clearCartButtonText}>Vaciar carrito</Text>
          </TouchableOpacity>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={item.imageUri} style={styles.cartItemImage} />
                <View style={styles.cartItemDetails}>
                  <Text>{item.name}</Text>
                  <View style={styles.contenedor_cantidad_precio}>
                  
                  <Text>Precio: {item.price}</Text>
                  <Text>Cantidad: {item.quantity}</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
                  <FontAwesome name="trash" size={18} color="black" />
                </TouchableOpacity>
              </View>
            )}

          />
          <TouchableOpacity style={styles.checkoutButton} onPress={() => console.log('Redirigiendo a MercadoPago')}>
            <Text style={styles.checkoutButtonText}>Realizar compra</Text>
            <Text style={styles.checkoutButtonTotal}>{`Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)} $`}</Text>
          </TouchableOpacity>
        </View>
      )}
<Text style={styles.txt_flatList}>Para perro</Text>
      <FlatList
      style={styles.flatList}
        data={PRODUCTS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} onPress={handleAddToCart} />}
        horizontal
      />
<Text style={styles.txt_flatList}>Para gato</Text>
      <FlatList
       style={styles.flatList}
        data={PRODUCTS_CAT}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} onPress={handleAddToCart} />}
        horizontal
      />
<Text style={styles.txt_flatList}>Complementos</Text>
      <FlatList
       style={styles.flatList}
        data={COMPLEMENTOS}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductItem product={item} onPress={handleAddToCart} />}
        horizontal
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  contenedor_boton: {
    display: "flex",
    justifyContent: "center",
    alignSelf: "flex-end",
    margin: 20,
    position: "relative",
    bottom: 25,
    left: 1
  },
  productItem: {
    width: 163,
    height: 254,
    marginTop: 50,
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
  flatList:{
    position: "relative",
    right: 10,
    width: 340,
    height: 310,
    marginBottom: 60,
    marginTop: -40
  },
  txt_flatList: {
    position: "relative",
    bottom: 41,
    fontWeight: "700",
    fontSize: 15
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 8,
  },
  kiloButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding:10
  },
  kiloButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    padding:7,
    margin:10
  },
  selectedKiloButton: {
    backgroundColor: '#3662FF',
  },
  kiloButtonText: {
    fontSize: 12,
    color: '#333',
  },
  addButton: {
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    padding: 10,
  },
  cartButton: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    justifyContent: "flex-end",
    bottom:200
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cartIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  cartBadge: {
    backgroundColor: '#00bfff',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  cartBadgeText: {
    fontSize: 12,
    color: '#fff',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cartItemName: {
    fontSize: 14,
  },
  cartItemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 4,
  },
  title: {
    padding: 3,
    fontSize: 17,
    textAlign: "center",
    color: "#171717",
    fontWeight: "700"
  },
  price: {
    padding: 10,
    fontSize: 17,
    textAlign: "center",
    color: "#006AE3",
    fontWeight:"700"
  },
  emptyCartMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 32,
  },
  checkoutButton: {
    position: "relative",
    bottom: 1000,
    backgroundColor: '#00bfff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 16,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  cartItem: {
    display: "flex",
    flexDirection: "row",
    margin: 20,
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
  contenedor_cantidad_precio: {
    display: "flex",
    flexDirection: "colum",
    marginTop: 50,
  },
  cartItemDetails: {
    width: 180,
    height: 100,
  },
  cantidad: {
    padding: 5
  },
  precio: {
    padding: 5
  },
  comprar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 1000,
    fontSize: 20,
    backgroundColor: "#A0A0A0",
    borderRadius: 30,
    padding: 13
  },
  txt_comprar: {
    fontSize: 30,
    color: '#004DE3',
    fontWeight: "800"
  },
  txt_total: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 1040,
    fontSize: 25,
  }
});


export default Comida