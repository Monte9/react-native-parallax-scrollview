import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

import ParallaxScrollView from './beta-src/ParallaxScrollView';

export const SCREEN_HEIGHT = Dimensions.get('window').height;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0
    };
  }

  customView() {
    return (
      <ParallaxScrollView
        windowHeight={SCREEN_HEIGHT}
        backgroundSource={{uri:'http://i.imgur.com/s4JEY9E.jpg'}}
        navBarTitle='Custom Title'
        navBarTitleColor='black'
        navBarColor='white'
        headerView={(
          <View style={styles.headerView}>
            <View style={styles.headerTextView}>
              <Text style={styles.headerTextViewTitle}>My App</Text>
              <Text style={styles.headerTextViewSubtitle}>
                Custom Header View
              </Text>
            </View>
          </View>
        )}
        leftIcon={{name: 'rocket', color: 'rgba(228, 117, 125, 1)', size: 30, type: 'font-awesome'}}
        leftIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
        rightIcon={{name: 'user', color: 'rgba(228, 117, 125, 1)', size: 30, type: 'font-awesome'}}
        rightIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
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
    );
  }

  defaultView() {
    return (
      <ParallaxScrollView
        leftIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
        rightIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
      />
    );
  }

  johnOliverView() {
    return (
      <ParallaxScrollView
        windowHeight={SCREEN_HEIGHT * 0.4}
        backgroundSource={{uri:'http://i.imgur.com/ao1nxlD.png'}}
        navBarTitle='John Oliver'
        userName='John Oliver'
        userTitle='Comedian'
        userImage='http://i.imgur.com/RQ1iLOs.jpg'
        leftIcon={{name: 'rocket', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
        leftIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
        rightIcon={{name: 'user', color: 'rgba(193, 193, 193, 1)', size: 30, type: 'font-awesome'}}
        rightIconOnPress={() => this.setState({index: (this.state.index + 1 ) % 3})}
      />
    );
  }

  render() {
    const { index } = this.state;

    switch(index) {
      case 0:
      return this.defaultView();
      case 1:
      return this.johnOliverView();
      case 2:
      return this.customView();
    }
  }
}

const styles = StyleSheet.create ({
  headerTextView: {
    backgroundColor: 'transparent',
  },
  headerTextViewTitle: {
    fontSize: 35,
    color: 'white',
    fontWeight: '300',
    paddingBottom: 10,
    textAlign: 'center'
  },
  headerTextViewSubtitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '300'
  },
});

Expo.registerRootComponent(App);
