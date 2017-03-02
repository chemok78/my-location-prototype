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
//Import Form components
import Form from './form.js';

class MyLocation extends Component {

  constructor(props){

    super(props);

    this.state = {

        selectedTab: 0,
        myActivity: " ",
        gender: " ",

    };

    this.changeActivity = this.changeActivity.bind(this);
    this.changeGender = this.changeGender.bind(this);

  }//constructor

  changeActivity(activity){
  //function to change myActivity in the state, passed on to form as prop
  //this refers to this function closure, so we need to bind it to the class in the constructor
  //this does not auto bind to class

      this.setState({

        myActivity: activity

      })

  };

  changeGender(gender){
  //function to change gender in the state, passed on to form as prop
  //this refers to this function close, so we need to bind it to the class in the constructor
  //this does not auto bind to class
      this.setState({

          gender: gender

      })

  };



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
              <View style={Style.mapContainer}>
                <Text style={Style.mapTitle}>Find People Doing The Same Thing</Text>
                <Map />
              </View>
          </TabBarIOS.Item>

          <TabBarIOS.Item
            icon={require('../assets/images/quickaction_icon_location.png')}
            title="Me"
            selected={this.state.selectedTab === 1}
            onPress={this.handleTabPress.bind(this,1)}
          >
              <View style={Style.formContainer}>
                <View style={Style.displayContainer}>
                  <Text style={Style.displayText}>Male</Text>
                  <Text style={Style.displayText}>Shopping</Text>
                </View>
                <View style={Style.inputContainer}>
                  <Form changeActivity={this.changeActivity} changeGender={this.changeGender} />
                </View>
              </View>
          </TabBarIOS.Item>
        </TabBarIOS>
    )

  }//render

};//MyLocation Component

//Register the MyLocation app
AppRegistry.registerComponent('MyLocation', () => MyLocation);
