//@ flow

import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({

  formContainer: {

      flex:1

  },
  inputContainer: {

    flex:1,
    backgroundColor: "#3E606F",
    flexDirection: "column",

  },
  displayContainer: {
    flex:1,
    backgroundColor: "#193441",
    justifyContent: "center",
    alignItems: "center"
  },
  displayText:{

    color: "white",
    marginBottom: 30,
    fontWeight: "bold",
    paddingTop:10

  },
  mapContainer: {

    backgroundColor: "#fed",
    flex:1

  },
  mapTitle: {
    textAlign: "center",
    color: "#333333",
    marginTop: 50

  }

})//var Style

export default Style;
