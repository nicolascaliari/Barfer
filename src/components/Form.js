import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useFonts} from 'expo-font'



const Form = () => {

const [fontsLoaded] = useFonts({
  DMSans: require("../../assets/fonts/DM_Sans/DMSans-Regular.ttf")
});

// if(!fontsLoaded) return null;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleEmailChange = (email) => setEmail(email);
  const handlePasswordChange = (password) => setPassword(password);
  const handleNameChange = (name) => setName(name);

  const handleSubmit = () => {
    console.log(`Email: ${email}\nPassword: ${password}\nName: ${name}`);
  };

  return (
    <View style={styles.contenedor_father}>

      <View style={styles.contenedor_imagen}>
        <Image style={styles.image} source={require('../../perro_gato.png')} ></Image>
        <Image style={styles.logo} source={require('../../Logo.png')} ></Image>
      </View>

  
      
      <View style={styles.container}>
        <View style={styles.container_botones_arriba}>
          <TouchableOpacity style={styles.button_ingresar} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_registrarse} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.headerText}>Bienvenido a Barfer</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            onChangeText={handleEmailChange}
            value={email}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Contraseña"
            onChangeText={handlePasswordChange}
            value={password}
            secureTextEntry={true}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Nombre"
            onChangeText={handleNameChange}
            value={name}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor_father:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f2',
    height:'200%'
  },
  contenedor_imagen:{
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: -20,
    zIndex: 0,
    backgroundColor: '#f2f2f2',
  },
  image:{
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent:"center",
    top:0,
    zIndex: -1,
  },
  logo:{
    position: 'absolute',
  width: 315,
  height: 123,
  alignSelf: 'center',
  top: 60,
  zIndex: 1,
  },
  container: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width: '100%',
    height:450,
    marginTop: -40,
    backgroundColor:'#ffff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  headerText: {
    fontFamily: 'DMSans',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginTop:10,
    marginBottom: 20,
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'transparent',
    marginBottom: 30,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width:250,
  },
  button: {
    backgroundColor: '#3662FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    marginBottom: 10,
    width: 250
  },
  container_botones_arriba: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_ingresar: {
    backgroundColor: '#3662FF',
    margin:10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    marginBottom: 10,
    width: '40%'
  },
  button_registrarse: {
    backgroundColor: '#D9D9D9',
    margin:10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    marginBottom: 10,
    width: '40%'
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Form;
