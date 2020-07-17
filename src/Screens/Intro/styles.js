import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  input: {
      height: 50,
      width:310,
      marginBottom: 12,
      borderRadius: 4
  },
  title:{
      fontSize: 25,
      fontStyle: "normal",
      fontWeight: "bold",
      lineHeight: 25,
      color: "#9B9B9B",
      marginBottom: 30
  },
  compra:{

  backgroundColor: "#2BB673",
  borderRadius: 8,
  height: 50,
  width: 310,
  justifyContent: "center",
  alignItems: "center",
  margin: 4

  },

  venda:{
    
    backgroundColor: "#E03268",
    borderRadius: 8,
    height: 50,
    width: 310,
    justifyContent: "center",
    alignItems: "center",
    margin: 4
    },
  text: {
      color: "white",
      fontWeight: "bold",

  }
});