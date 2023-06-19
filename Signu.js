import React from 'react'
import {Text, View, StyleSheet, Image, Alert, TouchableOpacity, TextInput} from 'react-native'
import image from './assets/logo.png'
import image_1 from './assets/usu1.png'
const Signu = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar</Text>
      <Text style={styles.title_2}>Sesión</Text>
      <Text style={styles.subtitle}>Como usuario:</Text>
      <Image
        source = {image}
        style={styles.image}
      />
      <Image
        source = {image_1}
        style={styles.image_1}
      />
      <TextInput style={styles.id}
        placeholder='ID'
      />
      <TextInput style={styles.contraseña}
        placeholder='Contraseña'
      />

      <TouchableOpacity
        onPress={() => Alert.alert("Ingresando...")}
        style={styles.button_1}
      >
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert("Dirigiendo a registro de usuario")}
        style={styles.button_2}
      >
        <Text style={styles.buttonText_1}>*Crear cuenta de usuario</Text>
      </TouchableOpacity>


    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'},
  title: {fontSize: 50, color: 'white', textAlign: 'center', position: 'absolute', top: 150, fontWeight: 'bold'},
  title_2: {fontSize: 50, color: 'white', textAlign: 'center', position: 'absolute', top: 200, fontWeight: 'bold'},
  id: {fontSize: 20, color: 'white', position: 'absolute', top: 390, left: 90 },
  contraseña: {fontSize: 20, color: 'white', position: 'absolute', top: 502, left: 90},
  subtitle: {fontSize: 20, color: 'white', position: 'absolute', top: 320, left: 20, fontWeight: 'bold'},
  image: {height: 20, width: 150, position: 'absolute', top: 40, left: 20},
  image_1: {height: 190, width: 340, position: 'absolute', top: 365, textAlign: 'center'},
    button_1 : {backgroundColor: "#4ABEDE", padding: 10, borderRadius: 10, position: 'absolute', top: 590, left: 230},
  buttonText : {color: "aliceblue", fontSize: 25, fontWeight: 'bold'},
  button_2 : {backgroundColor: "black", padding: 10, borderRadius: 10, position: 'absolute', top: 700, alignContent: 'center'},
  buttonText_1 : {color: "aliceblue", fontSize: 15, fontWeight: 'bold'}
})
export default Signu;