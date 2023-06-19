/*import React from 'react'
import Signu from './Signu';

export default function App() {
  return <Signu />;
}*/

/*import React from 'react'
import Signe from './Signe';

export default function App() {
  return <Signe />;
}*/

/*import React from 'react'
import Regest from './Regest';

export default function App() {
  return <Regest />;
}*/

import React from 'react'
//import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import Regest from './Regest';
import Signe from './Signe';
import Signu from './Signu';
import {Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native'
import image from './assets/one.png'
import image_2 from './assets/logo.png'


//const Stack = createStackNavigator();


const App = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa a tu cuenta</Text>
      <Image
        //source={{uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cocker-spaniel-dog-royalty-free-image-1599653204.png?crop=0.644xw:0.725xh;0,0.0925xh&resize=640:*'}}
        source = {image}
        style={styles.image}
      />
      <Image
        source = {image_2}
        style={styles.image_2}
      />

      <TouchableOpacity
        onPress={() => Alert.alert("Ingresando como usuario")}
        style={styles.button_1}
      >
        <Text style={styles.buttonText}>Usuario</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert("Ingresando como establecimiento")}
        style={styles.button_2}
      >
        <Text style={styles.buttonText}>Establecimiento</Text>
      </TouchableOpacity>


    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'},
  title: {fontSize: 50, color: 'white', textAlign: 'center', fontWeight: 'bold'},
  image: {height: 420, width: 420, borderRadius: 210},
  image_2: {height: 20, width: 150, position: 'absolute', top: 800, left: 220},
  button_1 : {backgroundColor: "#041123", padding: 10, borderRadius: 10, position: 'absolute', top: 395, left: 143},
  button_2 : {backgroundColor: "#041123", padding: 10, borderRadius: 10, position: 'absolute', top: 490, left: 92},
  buttonText : {color: "aliceblue", fontSize: 25, fontWeight: 'bold'}
})
export default App;