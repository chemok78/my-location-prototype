// @flow

"use strict";

//Import React library and components
import React, { Component } from 'react';
//Import React Native library and components
import {AppRegistry, View, StyleSheet, Text, TabBarIOS} from 'react-native';
//Import StyleSheet
import Style from './style.js';

//Import Map components
import Map from './map.js';

class MyLocation extends Component {

  constructor(props){

    super(props);

    this.state = {

        selectedTab: 0

    };

  }//constructor

  handleTabPress(tab){
  //handle which tab is pressed

    this.setState({selectedTab: tab});

  }

  render(){

    return(

        <TabBarIOS>
          <TabBarIOS.Item
            icon={require('../assets/images/pin.png')}
            selected={this.state.selectedTab === 0}
            title="Find People"
            onPress={this.handleTabPress.bind(this,0)}
          >
              <View style={styles.view}>
                <Text style={styles.text}>Find People Doing The Same Thing</Text>
                <Map />
              </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            icon={require('../assets/images/quickaction_icon_location.png')}
            title="Me"
            selected={this.state.selectedTab === 1}
            onPress={this.handleTabPress.bind(this,1)}
          >
              <View style={styles.view}>
                <Text style={styles.text}>What Are You Doing?</Text>
                <Text style={styles.text}>Dropdown</Text>
              </View>
          </TabBarIOS.Item>
        </TabBarIOS>
    )

  }//render

};//MyLocation Component

const styles = StyleSheet.create({

    text: {

        textAlign: "center",
        color: "#333333",
        marginTop: 50

    },
    view: {

        backgroundColor: "#fed",
        flex:1

    }

});//styles

//Register the MyLocation app
AppRegistry.registerComponent('MyLocation', () => MyLocation);
