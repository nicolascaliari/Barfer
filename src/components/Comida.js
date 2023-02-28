
import React from 'react';
import { View, Text, StyleSheet, Button,Image, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from "react-native-vector-icons";
import Carrito from './Carrito';


const productImage = require("../../comida.png");
const products = [
  {
    id: 1,
    imageUri: productImage,
    title: 'Barfer box perro pollo',
    price: 10.99,
  },
  {
    id: 2,
    imageUri: productImage,
    title: 'Barfer box perro pollo',
    price: 15.99,
  },
  {
    id: 3,
    imageUri: productImage,
    title: 'Barfer box perro pollo',
    price: 20.99,
  },
  {
    id: 4,
    imageUri: productImage,
    title: 'Barfer box perro pollo',
    price: 25.99,
  },
  {
    id: 5,
    imageUri: productImage,
    title: 'Barfer box perro pollo',
    price: 30.99,
  },
];




const ProductSquare = ({ product, onPress }) => {
  const { imageUri, title, price } = product;

  return (
    <View style={styles.square}>
        <Image source={imageUri} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>Precio: {price}</Text>
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Agregar al carrito</Text>
      </TouchableOpacity>

    </View>
  );
};



const ProductSquareCat = ({ product, onPress }) => {
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

const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto) => {
  setCarrito([...carrito, producto]);
}


const openCart = (productos) => {

 <Carrito productos={carrito} ></Carrito>
  // Aquí es donde puedes mostrar un componente que muestre los productos en el carrito
  console.log(carrito);
};




  return (
    <View style={styles.container}>

      <Text style={styles.txt_perro}>Comida para perro</Text>
      <FlatList style={styles.list}
        data={products}
        keyExtractor={(product) => product.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <ProductSquare
            product={item}
            onPress={() => agregarAlCarrito(item)}
          />
        )}
      />

       <Text style={styles.txt_gato}>Comida para gato</Text>
       <FlatList style={styles.list}
        data={products}
        keyExtractor={(product) => product.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <ProductSquareCat
            product={item}
            onPress={() => agregarAlCarrito(item)} 
          />
        )}
      />
      <View>
         <TouchableOpacity style={styles.cartContainer}
        onPress={openCart}>
        <FontAwesome name="shopping-cart" size={30} color="black" />
        <Text style={styles.cartText}>{carrito.length}</Text>
        </TouchableOpacity>
      </View>
        

<View style={styles.carrito}>
<Button title="Ver Carrito" onPress={() => console.log(carrito)} />
</View>


{/* <View style={styles.container}>
<View style={styles.carrito}>
  <Button title="Ver Carrito" onPress={() => console.log(carrito)} />
</View> */}
{/* {products.map((producto) => (
  <View key={producto.id} style={styles.producto}>
    <Text style={styles.nombre}>{producto.nombre}</Text>
    <Text style={styles.precio}>{producto.precio} €</Text>
    <Button title="Agregar al carrito" onPress={() => agregarAlCarrito(producto)} />
  </View>
))} */}

</View>

 
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartContainer:{
    display:"flex",
    flexDirection:"row",
    position:"relative",
    bottom:800,
    left:150,
  },
  cartText:{
    padding:5
  },
  txt_perro: {
    marginRight: 200,
    fontSize: 15,
    fontWeight: "600",
  },
  txt_gato: {
    marginRight: 200,
    fontSize: 15,
    fontWeight: "600",
  },
  list: {
    padding: 10,
    margin: 10
  },
  listContainer: {
    paddingHorizontal: 0,
  },
  square: {
    width: 170,
    height: 250,
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
    width: 115,
    height: 115,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
  },
});

export default function App() {
  return <ProductsList products={products} />;
}


// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';

// const Productos = () => {

//   const [carrito, setCarrito] = useState([]);

//   const productos = [
//     {
//       id: 1,
//       nombre: 'Producto 1',
//       precio: 10
//     },
//     {
//       id: 2,
//       nombre: 'Producto 2',
//       precio: 20
//     },
//     {
//       id: 3,
//       nombre: 'Producto 3',
//       precio: 30
//     }
//   ];

//   const agregarAlCarrito = (producto) => {
//     setCarrito([...carrito, producto]);
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.carrito}>
//         <Button title="Ver Carrito" onPress={() => console.log(carrito)} />
//       </View>
//       {productos.map((producto) => (
//         <View key={producto.id} style={styles.producto}>
//           <Text style={styles.nombre}>{producto.nombre}</Text>
//           <Text style={styles.precio}>{producto.precio} €</Text>
//           <Button title="Agregar al carrito" onPress={() => agregarAlCarrito(producto)} />
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   carrito: {
//     marginBottom: 10,
//   },
//   producto: {
//     marginBottom: 20,
//   },
//   nombre: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   precio: {
//     fontSize: 16,
//     color: 'gray',
//     marginBottom: 5,
//   },
// });

// export default Productos;




