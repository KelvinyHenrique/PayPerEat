import React, {
  useState,
} from 'react';

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function Register({ navigation }) {


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}> Cadastrar </Text>
        <Text style={styles.subtitle}>Está é uma tela de cadastro e estou digitando este texto pois não tenho</Text>
        <View>
          <TextInput
            title="Nome"
            style={styles.input}
            placeholder="Nome"
          />

          <TextInput
            title="Email"
            style={styles.input}
            placeholder="Email"
          />

          <TextInput
            title="Telefone"
            style={styles.input}
            placeholder="Telefone"
          />

          <TextInput
            title="Senha"
            style={styles.input}
            placeholder="Senha"
          />

          <TextInput
            title="reinsertPassword"
            style={styles.input}
            placeholder="Reinsira a Senha"
          />

          <View style={styles.goAccout}>
            <Text>Já tem uma conta?</Text>
            <Icon
              color='#34CB79'
              name='arrow-right'
              size={24}
            />
          </View>


        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>
            INCREVER-SE
     </Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  )


}