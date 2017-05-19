import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

import ParallaxScrollView from './beta-src/ParallaxScrollView';

export const SCREEN_HEIGHT = Dimensions.get('window').height;

class App extends React.Component {
  customView() {
    return (
      <ParallaxScrollView
        windowHeight={SCREEN_HEIGHT * 0.4}
        backgroundSource='http://i.imgur.com/UyjQBkJ.png'
        navBarTitle='John Oliver'
        userName='John Oliver'
        userTitle='Comedian'
        userImage='http://i.imgur.com/RQ1iLOs.jpg'
        leftIcon={{name: 'rocket', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
        rightIcon={{name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
      >
        <ScrollView style={{flex: 1, backgroundColor: 'rgba(228, 117, 125, 1)'}}>
          <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 32, color: 'white'}}>Custom view</Text>
          </View>
          <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 32, color: 'white'}}>keep going.</Text>
          </View>
          <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 32, color: 'white'}}>keep going..</Text>
          </View>
          <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 32, color: 'white'}}>keep going...</Text>
          </View>
          <View style={{height: 300, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 32, color: 'white'}}>the end! :)</Text>
          </View>
        </ScrollView>
      </ParallaxScrollView>
    )
  }

  defaultView() {
    return (
      <ParallaxScrollView />
    )
  }

  johnOliverView() {
    return (
      <ParallaxScrollView
        windowHeight={SCREEN_HEIGHT * 0.4}
        backgroundSource='http://i.imgur.com/UyjQBkJ.png'
        navBarTitle='John Oliver'
        userName='John Oliver'
        userTitle='Comedian'
        userImage='http://i.imgur.com/RQ1iLOs.jpg'
        leftIcon={{name: 'rocket', color: 'rgba(131, 175, 41, 1)', size: 30, type: 'font-awesome'}}
        rightIcon={{name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
      />
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.customView()}
      </View>
    )
  }
}

Expo.registerRootComponent(App);
