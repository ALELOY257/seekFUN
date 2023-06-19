import React from 'react'
import {Text, View, StyleSheet, Image, Alert, TouchableOpacity, TextInput, Button} from 'react-native'
import image from './assets/logo.png'

const Regest = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Registrar nuevo establecimiento:</Text>
      <Text style={styles.subtitle}>*Nombre:</Text>
      <Text style={styles.subtitle_1}>*Contraseña:</Text>
      <Text style={styles.subtitle_2}>*Confirmar contraseña:</Text>
      <Text style={styles.subtitle_3}>*ID:</Text>
      <Text style={styles.subtitle_4}>*Dirección establecimiento:</Text>
      <Text style={styles.subtitle_5}>*Descripción:</Text>
      <Image
        source = {image}
        style={styles.image}
      />
      <TextInput style={styles.id}
        placeholder='Número de 4 dígitos'
      />
      <TextInput style={styles.contra}
        placeholder='•••••••••••••••'
      />
      <TextInput style={styles.concontra}
        placeholder='•••••••••••••••'
      />
      <TextInput style={styles.name}
        placeholder='EN MAYÚSCULAS'
      />
      <TextInput style={styles.direc}
        placeholder='Ej: Calle 42 # 15-34'
      />
      <TextInput style={styles.desc}
        placeholder='¿Qué hace único a su establecimiento?, escriba información importante.'
      />

      <TouchableOpacity
        onPress={() => Alert.alert("Creando nuevo establecimiento...")}
        style={styles.button_1}
      >
        <Text style={styles.buttonText}>Crear establecimiento</Text>
      </TouchableOpacity>


    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'},
  title: {fontSize: 30, color: 'white', position: 'absolute', top: 60, left: 20, fontWeight: 'bold', textAlign: 'left'},
  id: {fontSize: 16, position: 'absolute', top: 416, left: 20, backgroundColor: 'lavender', width: 200, 
  height: 40, paddingBottom: 2,paddingLeft: 7, borderRadius: 9},
  contra: {fontSize: 16, position: 'absolute', top: 276, left: 20, backgroundColor: 'lavender', width: 290, 
  height: 40, paddingBottom: 2,paddingLeft: 7, borderRadius: 9},
  concontra: {fontSize: 16, position: 'absolute', top: 346, left: 20, backgroundColor: 'lightblue', width: 290, 
  height: 40, paddingBottom: 2,paddingLeft: 7, borderRadius: 9},
  name: {fontSize: 16, position: 'absolute', top: 206, left: 20, backgroundColor: '#C78BCA', width: 335, 
  height: 40, paddingBottom: 2,paddingLeft: 7, borderRadius: 9},
  direc: {fontSize: 16, position: 'absolute', top: 486, left: 20, backgroundColor: 'lavender', width: 335, 
  height: 40, paddingBottom: 2,paddingLeft: 7, borderRadius: 9},
  desc: {fontSize: 16, position: 'absolute', top: 556, left: 20, backgroundColor: 'lavender', width: 335, 
  height: 110,paddingLeft: 7, paddingRight: 7, paddingTop: 7, borderRadius: 9},
  subtitle: {fontSize: 18, color: 'white', position: 'absolute', top: 180, left: 20, fontWeight: 'bold'},
  subtitle_1: {fontSize: 18, color: 'white', position: 'absolute', top: 250, left: 20, fontWeight: 'bold'},
  subtitle_2: {fontSize: 18, color: 'white', position: 'absolute', top: 320, left: 20, fontWeight: 'bold'},
  subtitle_3: {fontSize: 18, color: 'white', position: 'absolute', top: 390, left: 20, fontWeight: 'bold'},
  subtitle_4: {fontSize: 18, color: 'white', position: 'absolute', top: 460, left: 20, fontWeight: 'bold'},
  subtitle_5: {fontSize: 18, color: 'white', position: 'absolute', top: 530, left: 20, fontWeight: 'bold'},
  image: {height: 20, width: 150, position: 'absolute', top: 800, left: 220},
button_1 : {backgroundColor: "#C462C8", padding: 10, borderRadius: 10, position: 'absolute', top: 700, alignContent: 'center'},
  buttonText : {color: "aliceblue", fontSize: 25, fontWeight: 'bold'},

})
export default Regest;