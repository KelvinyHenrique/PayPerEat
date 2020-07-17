import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default StyleSheet.create({
  container: {
    flex: 1,
    height:height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#34CB79'
  },

  anim: {
    width: width-80,
    height: width-80,
    borderRadius: 40
  },
  welcome: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },

  subtitle: {
    color:'#FFF',
    marginTop:20,
    marginBottom:10,
    textAlign:'center',
  },

  community: {
    color: '#FFF',
    marginTop:50,
    fontSize: 13,
    fontWeight: 'bold',
  },
  login: {
   marginTop:80,
   width:width-40,
   height:48,
   paddingLeft:17,
   paddingRight:17,
   borderRadius:4,
   backgroundColor: '#59E097',
   alignItems:'center',
   justifyContent:'space-between',
   flexDirection:'row',
  },

  textLogin: {
     color:'#FFF',
  },

  sigin: {
    marginTop:20,
    width:width-40,
    height:48,
    paddingLeft:17,
    paddingRight:17,
    borderRadius:4,
    backgroundColor: '#2BB673',
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row',
  }


});