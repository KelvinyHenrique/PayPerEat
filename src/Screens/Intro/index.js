import React, {
  useState
} from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import styles from './styles';
import image from '../../assets/estore.png';

export default function Login({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <Image source={image} />

      <View>
        <TouchableOpacity style={styles.compra} onPress={() => {
          navigation.navigate('Client')
        }}>
          <Text style={styles.text}>
            Quero Comprar
     </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.venda}
        onPress={()=>{
          navigation.navigate('Saler')
        }}
        >
          <Text style={styles.text}>
            Quero Vender
     </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )


}