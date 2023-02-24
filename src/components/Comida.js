
import React from 'react';
import { View, Text, StyleSheet, Image, FlatList , TouchableOpacity} from 'react-native';
import { useState } from 'react';

const productImage = require("../../comida.png");
const products = [
  {
    id: 1,
    imageUri: productImage,
    title: 'Producto 1',
    price: 10.99,
  },
  {
    id: 2,
    imageUri:productImage,
    title: 'Producto 2',
    price: 15.99,
  },
  {
    id: 3,
    imageUri: productImage,
    title: 'Producto 3',
    price: 20.99,
  },
  {
    id: 4,
    imageUri: productImage,
    title: 'Producto 4',
    price: 25.99,
  },
  {
    id: 5,
    imageUri: productImage,
    title: 'Producto 5',
    price: 30.99,
  },
];

const ProductSquare = ({ product, onPress }) => {
    const { imageUri, title, price } = product;
  
    return (
      <View style={styles.square}>
        <TouchableOpacity onPress={onPress} style={styles.imageContainer}>
          <Image source={imageUri} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>Precio: {price}</Text>
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Agregar al carrito</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const ProductsList = ({ products }) => {
    const [cartItems, setCartItems] = useState([]);
  
    const handleAddToCart = (product) => {
      setCartItems((prevItems) => [...prevItems, product]);
    };
  
    return (
      <View style={styles.container}>
        <FlatList
          data={products}
          keyExtractor={(product) => product.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <ProductSquare
              product={item}
              onPress={() => handleAddToCart(item)}
            />
          )}
        />
        <View style={styles.cartContainer}>
          <Text style={styles.cartText}>Carrito: {cartItems.length} productos</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  square: {
    width: 150,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 5,
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
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
  },
});

export default function App() {
  return <ProductsList products={products} />;
}






