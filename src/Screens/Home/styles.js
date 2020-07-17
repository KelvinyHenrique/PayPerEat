import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
    width:'100%',
    marginTop:20,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  content:{
      alignItems:'center',
  },

  searchContainer:{
    flexDirection:'row',
    width:'100%',
  },
  search: {
      width:'90%',
      height:50,
      borderRadius:50,
      borderColor:'#8E8E93',
      paddingLeft:30,
      borderWidth:1,
      marginBottom:20,
  },
  scroll: {
      width:'100%',
  },
  sugestionText: {
     padding:20,
     fontSize:16,
    textAlign:'left',
    paddingLeft:20
  },    
  scrollProducts:{
      width:'100%',
  },
  productInitialText: {
    width:windowWidth,
    textAlign:'left',
    fontSize:16,
    padding:15,
  },
  buttonTest: {
    width:100,
    height:40,
  }
});