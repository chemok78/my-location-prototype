// @flow

//Import React library and components
import React, { Component } from 'react';
//Import React Native library and components
import {

  MapView,
  View,
  StyleSheet

} from 'react-native';

export default class Map extends Component {

  render(){

    return(

      <MapView
        style={styles.map}
        region={{
          latitude: 22.2978835,
          longitude: 114.1761721,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
          title: "Me"
        }}
      />

    )

  }

}//Map component

const styles = StyleSheet.create({

    map: {

      flex:1

    }

})//styles
