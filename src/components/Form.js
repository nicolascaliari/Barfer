import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [registrationPassword, setRegistrationPassword] = useState('');

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  }

  const handleLogin = () => {
    console.log(`Email: ${email}\nPassword: ${password}`);
  }

  const handleRegistration = () => {
    console.log(`Name: ${name}\nEmail: ${registrationEmail}\nPassword: ${registrationPassword}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLoginForm ? 'Ingresar' : 'Registrarse'}</Text>

      {isLoginForm ? (
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

          <Button
            title="Ingresar"
            onPress={handleLogin}
          />

          <Text style={styles.toggleForm} onPress={toggleForm}>No tenes cuenta? Registrate aca.</Text>
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

          <Button
            title="Registrarse"
            onPress={handleRegistration}
          />

          <Text style={styles.toggleForm} onPress={toggleForm}>Ya tenes cuenta? Login aca</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  toggleForm: {
    color: 'blue',
    marginTop: 20,
    textAlign: 'center',
  },
});
