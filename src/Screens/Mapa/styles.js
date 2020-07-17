import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  map: {
    flex: 1,
  },
  me: {
    color: "#009688",
    textAlign: "center",
  },
  marker: {
    width: 45,
    height: 45,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  callout: {
    width: 260,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#009688",
  },
  description: {
    color: "#666",
    marginTop: 5,
  }
})