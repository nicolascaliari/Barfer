import { StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Contacto } from "./src/pages/Contacto";
import HomePage from "./src/pages/HomePage";
import Form from "./src/components/Form"

const Menu = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Menu.Navigator>
      <Menu.Screen
        name="Barfer"
        options={{
            headerTitleAlign: 'center',
            headerTitle: () => (
              <Image
                style={{ width:120, height: 50 }}
                source={require('./LogoAzul.png')}
              />
              
            ),
            headerStyle: {
              backgroundColor: 'white',  // Puedes cambiar el color de fondo aquí
            },
        }}
        component={Form}
      />
      <Menu.Screen name="Contacto" 
       options={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image
            style={{ width:120, height: 50 }}
            source={require('./LogoAzul.png')}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',  // Puedes cambiar el color de fondo aquí
        },
    }}
      
      component={Contacto} />
      <Menu.Screen name="HomePage"
       options={{
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image
            style={{ width:120, height: 50 }}
            source={require('./LogoAzul.png')}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',  // Puedes cambiar el color de fondo aquí
        },
    }} component={HomePage} />
    </Menu.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  nav: {
    backgroundColor:'black',
    position:"relative",
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
