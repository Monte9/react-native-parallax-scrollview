import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ParallaxScrollView from './beta-src/ParallaxScrollView'

class App extends React.Component {
  render() {
    return (
      <ParallaxScrollView />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

Expo.registerRootComponent(App);
