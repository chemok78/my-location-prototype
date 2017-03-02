// @flow

import React, { Component } from 'react';
import {

  Text,
  View,
  StyleSheet

} from 'react-native';

export default class Form extends Component {

    render(){

        const props = this.props;

        console.log(props);

        return(

            <View style={styles.view}>
              <View>
                <Text style={styles.text}>Gender</Text>
              </View>

              <View>
                <Text style={styles.text}>What are you doing?</Text>
              </View>
            </View>

        )


    }

}//Form Component

const styles = StyleSheet.create({

  view:{

    paddingTop: 50,
    paddingRight: 30,
    paddingBottom: 50,
    paddingLeft: 50,
    flex: 1

  },
  text: {

    color: "white",
    marginBottom: 30,
    fontWeight: "bold",
    paddingTop:10

  }


});
