import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import { useHandler } from 'react-native-reanimated';
import { FontAwesome } from "react-native-vector-icons";
// import { MercadoPagoCheckout } from 'react-native-mercadopago-checkout';

function Comida() {

  // const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  // const handlePaymentSuccess = () => {
  //   setIsCheckoutVisible(false);
  //   setCartItems([]);
  // };
  

  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [quantityKilos, setQuantityKilos] = useState(null);
  const [activeButton, setActiveButton] = useState("perro");
  const productImage = require("../../comida.png");
  const PRODUCTS_DOG = [
    { id: 1, name: "Barfer box perro pollo",kilo1:"5kg", kilo2:"10kg", price: 4.667, price2: 8.222, priceDef: 0, imageUri: productImage, },
    { id: 2, name: "Barfer box perro cerdo",kilo1:"5kg", kilo2:"10kg", price: 5.222, price2: 8.889, priceDef: 0, imageUri: productImage, },
    { id: 3, name: "Barfer box perro vaca", kilo1:"5kg", kilo2:"10kg",price: 5.222, price2: 8.889, priceDef: 0, imageUri: productImage, },
    { id: 4, name: "Barfer box perro mix",kilo1:"5kg", kilo2:"10kg", price: 4.889, price2: 8.556, priceDef: 0, imageUri: productImage, },
    { id: 5, name: "Huesos carnosos", kilo1:"5kg", kilo2:"10kg",price: 2.778, price2: 5.555, priceDef: 0, imageUri: productImage, }
  ];

  const PRODUCTS_CAT = [
    { id: 6, name: "Barfer box Gato pollo", price: 10, imageUri: productImage, },
    { id: 7, name: "Barfer box perro pollo", price: 20, imageUri: productImage, },
    { id: 8, name: "Barfer box perro pollo", price: 30, imageUri: productImage, },
    { id: 9, name: "Barfer box perro pollo", price: 40, imageUri: productImage, },
    { id: 10, name: "Barfer box perro pollo", price: 50, imageUri: productImage, }
  ];


  const COMPLEMENTOS = [
    { id: 11, name: "Sardinas", price: 900, imageUri: productImage, },
    { id: 12, name: "Cornalitos", price: 500, imageUri: productImage, },
  ]


  const handleFoodKilos = (type) => {
    setQuantityKilos(type);
    setActiveButton("perro"); // Reset breed type when changing animal type
  };


  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
    
    if (existingItemIndex !== -1)
    {
   
      console.log(product.priceDef)
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    }
    else
    {
      console.log(`estoy en el else: ${product.priceDef}`)
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
      <Text style={styles.price}>${item.price} - ${item.price2}</Text>

      <View style={styles.contenedor_botones_kilos}>
        <TouchableOpacity
          style={[styles.button,quantityKilos === "5kg" ? item.priceDef = item.price
                                                        : null,]}
          onPress={() => handleFoodKilos("5kg")}>
          <Text style={[styles.buttonTextDog, quantityKilos === "5kg"]}>
            5kg
          </Text>
        </TouchableOpacity>


    {/* BOTON 10 KILOS */}

        <TouchableOpacity
          style={[styles.button,quantityKilos === "10kg" ? item.priceDef = item.price2
                                                         : null,]}
          onPress={() => handleFoodKilos("10kg")}>
          <Text
            style={[styles.addButtonText,quantityKilos === "10kg",]}>
            10kg
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.contenedor_boton}>
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <FontAwesome name="shopping-cart" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );


  const cartTotal = cartItems.reduce((total, item) => total + item.priceDef * item.quantity, 0);

  return (
     <View style={styles.container}>
            <TouchableOpacity style={styles.cartButton} onPress={() => setShowCart(!showCart)}>
        <FontAwesome name="shopping-cart" size={30} color="black" />
        <Text style={styles.cartButtonText}>{cartItems.length}</Text>
      </TouchableOpacity>
 {/* MERCADO PAGO AGUS 
       <TouchableOpacity style={styles.cartButton} onPress={() => setShowCart(!showCart)}>
        <FontAwesome name="shopping-cart" size={30} color="#000" />
         <Text style={styles.cartButtonText}> {cartItems.length}</Text>
      </TouchableOpacity>
       {showCart && (
        <View style={styles.cartContainer}>
          <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              <Text style={styles.cartTitle}>{item.name}</Text>
              <Text style={styles.cartItemQuantity}>x{item.quantity}</Text>
              <Text style={styles.cartItemPrice}>${item.priceDef * item.quantity}</Text>
              <TouchableOpacity style={styles.cartItemRemoveButton} onPress={() => removeItem(item.id)}>
                <FontAwesome name="remove" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={
            <View style={styles.cartContainer}>
              <Text style={styles.emptyCartText}>Tu carrito esta vacio</Text>
            </View>
          }
          ListFooterComponent={
            <View style={styles.cartContainer}>
              <Text style={styles.cartTotalText}>Total: ${cartTotal.toFixed(2)}</Text>
              <TouchableOpacity style={styles.cartCheckoutButton} onPress={() => setIsCheckoutVisible(true)}>
                <Text style={styles.cartCheckoutButtonText}>Pagar</Text>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
      )}
    {isCheckoutVisible && (
      <MercadoPagoCheckout
        publicKey="PUBLIC_KEY"
        preferenceId="PREFERENCE_ID"
        onPaymentSuccess={handlePaymentSuccess}
        onClose={() => setIsCheckoutVisible(false)}
      />
)}

MERCADO PAGO AGUS FIN  */}



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
                  <View style={styles.contenedor_cantidad_precio}>

                    <Text style={styles.cantidad}>Cantidad:{item.quantity}</Text>
                    <Text style={styles.precio}>Precio:{cartTotal}</Text>
                    

                  </View>
                </View>
                <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
                  <FontAwesome name="trash" size={18} color="black" />
                </TouchableOpacity>
              </View>

            )}
            keyExtractor={item => item.id.toString()}
          />
          <Text style={styles.txt_total}>Total: ${cartTotal.toFixed(3)}</Text>
          <TouchableOpacity style={styles.comprar}>
            <Text style={styles.txt_comprar}>Comprar:</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.txt_dog}>Para perro</Text>
      <FlatList style={styles.flatList_products_dog}
        data={PRODUCTS_DOG}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
      />


      <Text style={styles.txt_cat}>Para gato</Text>
      <FlatList style={styles.flatList_products_cat}
        data={PRODUCTS_CAT}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
      />

      <Text style={styles.txt_cat}>Complementos</Text>
      <FlatList style={styles.flatList_products_cat}
        data={COMPLEMENTOS}
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
  contenedor_botones_kilos: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    padding: 8
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
    height: 280,
    marginBottom: 60,
    marginTop: -40
  },
  flatList_products_cat: {
    position: "relative",
    right: 10,
    width: 340,
    height: 280,
    marginBottom: 60
  },
  item: {
    width: 153,
    height: 224,
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
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
    bottom: 25,
    left: 1
  },
  addButtonText: {
    color: 'black',
    textAlign: "center"
  },
  cartButton: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    bottom: 240,
    left: 300
  },
  activeButton: {
    backgroundColor: "#3662FF",
  },
  cartButtonText: {

  },
  cartTitle: {
    fontSize: 30,
    color: "#0053B1",
    fontWeight: "700"

  },
  cartContainer: {
    display: "flex",
    backgroundColor: '#E2E2E2',
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
    flexDirection: "row",
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