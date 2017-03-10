// @flow

//Note: MapView can follow the user itself using showUserLocation, followUserLocation. onRegionChangeComplete to get the currentposition, it prints lat,long, latdelt, londelta
//Note: We can use GeoLocation API to find track user location explicitly.

//Import React library and components
import React, { Component } from 'react';
//Import React Native library and components
import {
  MapView,
  View,
  StyleSheet,
  Text

} from 'react-native';

// Geolocation settings
// Export settings

exports.framework = "React";
exports.title = "Geolocation";
exports.decription = "Using Geolocation API";

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): React.Element<any> {
      return <GeolocationExample />;
    },
  }
];

console.log(exports);

export default class Map extends Component {

  //constructor
  constructor(props){

    super(props)

    this.state = {

          initialPosition: 'unknown',
          lastPosition: 'unknown'

    }

  };

  // Expect watchID to be a number, if not we set it to null
  watchID: ?number = null;

  // When the component was mounted we get and set the locations
componentDidMount(){

      //use native Geolocation API to get the current position for the first time and set state
      navigator.geolocation.getCurrentPosition(
          (position) => {

              //get initialPosition and convert this JS object to a JSON string
              //var initialPosition = JSON.stringify(position);

              initialPosition = position

              //check in system logs!
              console.log(initialPosition);
              this.setState({initialPosition});

          },
          (error) => console.log(JSON.stringify(error)),
          {enableHighAccuracy: false, timeout: 60000, maximumAge: 500}

      );//navigator.geolocation.getCurrentPosition

      //use native Geolocation API to start watching the position and set state
      this.watchID = navigator.geolocation.watchPosition((position) => {
        //var lastPosition = JSON.stringify(position);
        var lastPosition = position;
        this.setState({lastPosition}, function(){
        //lastPosition is saved as a JSON object

            console.log("last position changed");
            //console.log(this.state.lastPosition.coords.longitude);
            //console.log(this.state.lastPosition.coords.latitude)

        });
      });

  }//componentDidMount

  componentWillUnmount(){

    navigator.geolocation.clearWatch(this.watchID);

  }

  render(){

    return(
      <View style={styles.mapView}>
        <View style={styles.mapInfo}>
          <Text>
            <Text style={styles.title}>Initial position: </Text>
            <Text>{JSON.stringify(this.state.initialPosition)}</Text>
          </Text>
          <Text>
            <Text style={styles.title}>Current position: </Text>
            <Text>{JSON.stringify(this.state.lastPosition)}</Text>
          </Text>
        </View>
        <MapView
          style={styles.map}
          //map follows the user when location changes
          //showsUserLocation must be enabled
          followUserLocation= {true}
          //Build in function to follow Geolocation, so maybe don't even need GeoLocation API
          //If true the app will ask for the user's location and display it on the map.
          //You'll need to add the NSLocationWhenInUseUsageDescription key in Info.plist to enable geolocation, otherwise it will fail silently.
          showsUserLocation = {true}
          //when user moves the map and done
          onRegionChangeComplete = {function(position){console.log("new position!:",position)}}
          //show annotation popups by default
          showsAnnotationCallouts = {false}
          //enable zoom
          zoomEnable = {true}
          showsCompass = {true}
          showsPointsOfInterest = {true}
          mapType={"hybrid"}
          //set the region here with state
          region={{
            latitude: 22.2978,
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
      </View>
    )//return

  }//render

}//Map component

const styles = StyleSheet.create({

    mapView: {

      flex:1

    },

    mapInfo: {

      flex:1,
      paddingTop: 20,
      paddingLeft: 20

    },

    map: {

      flex:2

    }

})//styles
