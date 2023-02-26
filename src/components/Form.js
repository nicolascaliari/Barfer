import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [registrationPassword, setRegistrationPassword] = useState('');
  const [activeButton, setActiveButton] = useState('login');

  // const handleLoginPress = () => {
  //   setActiveButton('login');
  //   // Código para manejar la acción del botón de login
  // };

  // const handleRegisterPress = () => {
  //   setActiveButton('register');
  //   // Código para manejar la acción del botón de registro
  // };


  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  }

  const handleLogin = () => {
    console.log(`Email: ${email}\nPassword: ${password}`);
  }

  const handleRegistration = () => {
    console.log(`Name: ${name}\nEmail: ${registrationEmail}\nPassword: ${registrationPassword}`);
  }

  const [showLogin, setShowLogin] = useState(true);

  const handleLoginPress = () => {
    setShowLogin(true);
    setActiveButton('login');

  };

  const handleRegisterPress = () => {
    setShowLogin(false);
    setActiveButton('register');
  };

  return (
    <View style={styles.contenedor_father}>


      <View style={styles.contenedor_imagen}>
        <Image style={styles.image} source={require('../../perro_gato.png')} ></Image>
        <Image style={styles.logo} source={require('../../Logo.png')} ></Image>
      </View>

      <View style={styles.container}>

        <View style={styles.container_btn_arriba}>
          <TouchableOpacity
            style={[styles.button1, activeButton === 'login' ? styles.activeButton : null]}
            onPress={handleLoginPress}
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button2, activeButton === 'register' ? styles.activeButton : null]}
            onPress={handleRegisterPress}
          >
            <Text style={{ color: 'white' }}>Register</Text>
          </TouchableOpacity>

        </View>


        {showLogin ? (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setPassword(text)}
              value={password}
              placeholder="Password"
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>


            <Text style={styles.toggleForm} onPress={handleRegisterPress}>No tenes cuenta? Registrate aca.</Text>
          </View>
        ) : (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={text => setName(text)}
              value={name}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setRegistrationEmail(text)}
              value={registrationEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setRegistrationPassword(text)}
              value={registrationPassword}
              placeholder="Password"
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>

            <Text style={styles.toggleForm} onPress={handleLoginPress}>Ya tenes cuenta? Login aca</Text>
          </View>

        )}
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  contenedor_father: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f2',
    height: '100%'
  },
  activeButton: {
    backgroundColor: '#3662FF',
  },
  activeButtonText: {
    color: 'white',
  },
  container_btn_arriba: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 50,
  },
  button1: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    textAlign: "center",
    width: 140,
    position: "absolute",
    right: 50
  },
  button2: {
    backgroundColor: "#D9D9D9",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    textAlign: "center",
    width: 140,
    textAlign: 'center',
    position: "relative",
    left: 60,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    height: 450,
    marginTop: -50,
    backgroundColor: '#ffff',
    padding: 10,
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3662FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 61,
    marginBottom: 10,
    width: 250,
    textAlign: 'center'
  },
  input: {
    backgroundColor: 'transparent',
    marginBottom: 30,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 250,
  },
  toggleForm: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
  contenedor_imagen: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: -20,
    zIndex: 0,
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  logo: {
    position: 'absolute',
    width: 315,
    height: 123,
    alignSelf: 'center',
    top: 60,
    zIndex: 1,
  },
});
