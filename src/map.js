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
        //map follows the user when location changes
        //showsUserLocation must be enabled
        followUserLocation= {true}
        //If true the app will ask for the user's location and display it on the map.
        //You'll need to add the NSLocationWhenInUseUsageDescription key in Info.plist to enable geolocation, otherwise it will fail silently.
        showsUserLocation = {true}
        //when user moves the map and done
        onRegionChangeComplete = {function(){console.log("region change!")}}
        //show annotation popups by default
        showsAnnotationCallouts = {false}
        //enable zoom
        zoomEnable = {true}
        showsCompass = {true}
        showsPointsOfInterest = {true}
        mapType={"hybrid"}
        region={{
          latitude: 22.2978835,
          longitude: 114.1761721,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
          title: "Me"
        }}
        annotations={[{
            title:"me",
            draggable: false,
            subtitle: "my current location",
            latitude: 22.2978835,
            longitude: 114.1761721,
            animateDrop: true,
            draggable: true
        }
        ]}
      />

    )

  }

}//Map component

const styles = StyleSheet.create({

    map: {

      flex:1

    }

})//styles
