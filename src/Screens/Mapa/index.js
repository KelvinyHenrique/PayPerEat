import * as React from 'react';
import { Text, View, StyleSheet , TouchableOpacity } from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm

export default function App({ navigation }) {
  return (
    <TouchableOpacity onPress={()=>{
      navigation.navigate('Intro')
    }}>
       <Text style={styles.paragraph}>
        Login
      </Text>
    </TouchableOpacity>
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

