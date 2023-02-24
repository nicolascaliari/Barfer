import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductSquare = ({ imageUri, title, price }) => {
    return (
      <View style={styles.container}>
        <Image source={imageUri} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>Precio: {price}</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    width: 150,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
  },
});

export default ProductSquare;
