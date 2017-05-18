import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ParallaxScrollView from './beta/parallax_scroll_view';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ParallaxScrollView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
