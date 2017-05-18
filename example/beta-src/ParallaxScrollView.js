import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  ScrollView,
  Dimensions,
  StyleSheet
} from 'react-native';

import { Icon, List, ListItem } from 'react-native-elements';

import { COLORS, LIST, SCREEN_WIDTH, SCREEN_HEIGHT } from './constants'

const SCREEN = Dimensions.get('window');
const ScrollViewPropTypes = ScrollView.propTypes;

export default class ParallaxScrollView extends Component {
  constructor() {
    super();

    this.state = {
      scrollY: new Animated.Value(0)
    };
  }

  getScrollResponder() {
    return this._scrollView.getScrollResponder();
  }

  setNativeProps(props) {
    this._scrollView.setNativeProps(props);
  }

  itemCompleteIconStyle() {
    return {
      name: 'ios-checkmark-circle',
      type: 'ionicon',
      size: 30,
      color: COLORS.checkmarkGreen
    };
  }

  itemInCompleteIconStyle() {
    return {
      name: 'ios-radio-button-off',
      type: 'ionicon',
      size: 30,
      color: COLORS.checkmarkBlack
    };
  }

  renderBackground() {
    var { windowHeight, backgroundSource, blur } = this.props;
    var { scrollY } = this.state;
    if (!windowHeight || !backgroundSource) {
      return null;
    }

    return (
      <Animated.Image
        style={[
          styles.background,
          {
            height: windowHeight,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-windowHeight, 0, windowHeight],
                  outputRange: [windowHeight / 2, 0, -windowHeight / 3]
                })
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-windowHeight, 0, windowHeight],
                  outputRange: [2, 1, 1]
                })
              }
            ]
          }
        ]}
        source={backgroundSource}
      >
      </Animated.Image>
    );
  }

  renderHeaderView() {
    var { windowHeight, backgroundSource } = this.props;
    var { scrollY } = this.state;
    if (!windowHeight || !backgroundSource) {
      return null;
    }

    const newWindowHeight = windowHeight - 65;

    return (
      <Animated.View
        style={{
          position: 'relative',
          height: newWindowHeight,
          opacity: scrollY.interpolate({
            inputRange: [-windowHeight, 0, windowHeight / 2],
            outputRange: [1, 1, 0]
          })
        }}
      >
        {this.props.headerView ?
          this.props.header :
          <View style={styles.headerView}>
            <View style={styles.headerTextView}>
              <Text style={styles.headerTextViewTitle}>My Day</Text>
              <Text style={styles.headerTextViewSubtitle}>
                Wednesday, May 17
              </Text>
            </View>
          </View>
        }
      </Animated.View>
    );
  }

  renderHeaderTitle() {
    var { windowHeight, backgroundSource } = this.props;
    var { scrollY } = this.state;
    if (!windowHeight || !backgroundSource) {
      return null;
    }

    const newWindowHeight = windowHeight - 65;

    return (
      <Animated.View
        style={{
          opacity: scrollY.interpolate({
            inputRange: [-windowHeight, 0, windowHeight / 1.3],
            outputRange: [0, 0, 1]
          })
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: '600', color: 'white' }}>
          My Day
        </Text>
      </Animated.View>
    );
  }

  navBarStyle() {
    var { windowHeight, backgroundSource } = this.props;
    var { scrollY } = this.state;
    if (!windowHeight || !backgroundSource) {
      return null;
    }

    var backgroundColor = scrollY.interpolate({
      inputRange: [-windowHeight, 0, windowHeight / 1.3],
      outputRange: ['transparent', 'transparent', 'rgba(0, 0, 0, 1.0)']
    });

    return backgroundColor;
  }

  rendernavBar() {
    return (
      <Animated.View
        style={{
          height: 65,
          width: SCREEN.width,
          flexDirection: 'row',
          backgroundColor: this.navBarStyle()
        }}
      >
        <View
          style={{
            flex: 1,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon name="menu" type="simple-line-icon" color="white" size={23} />
        </View>
        <View
          style={{
            flex: 5,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
          }}
        >
          {this.renderHeaderTitle()}
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon name="present" type="simple-line-icon" color="white" size={23} />
        </View>
      </Animated.View>
    );
  }

  renderTodoListContent() {
    return (
      <List containerStyle={styles.listContainerView}>
        {LIST.map((item, index) => (
          <ListItem
            key={index}
            hideChevron
            title={item.description}
            titleStyle={
              item.checked
                ? styles.itemCompleteTitle
                : styles.itemInCompleteTitle
            }
            subtitle={item.category}
            subtitleStyle={
              item.checked
                ? styles.itemCompleteSubtitle
                : styles.itemInCompleteSubtitle
            }
            leftIcon={
              item.checked
                ? this.itemCompleteIconStyle()
                : this.itemInCompleteIconStyle()
            }
            leftIconOnPress={() => console.log("Icon pressed")}
            onPress={() => console.log("List Item pressed")}
          />
        ))}
      </List>
    );
  }

  render() {
    var { style, ...props } = this.props;
    return (
      <View style={[styles.container, style]}>
        {this.renderBackground()}
        {this.rendernavBar()}
        <ScrollView
          ref={component => {
            this._scrollView = component;
          }}
          {...props}
          style={styles.scrollView}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
          scrollEventThrottle={16}
        >
          {this.renderHeaderView()}
          <View style={[styles.content, props.scrollableViewStyle]}>
            {this.props.children ?
              this.props.children :
              <View style={styles.listView}>
                {this.renderTodoListContent()}
              </View>
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'transparent'
  },
  scrollView: {
    backgroundColor: 'transparent'
  },
  background: {
    position: 'absolute',
    backgroundColor: '#2e2f31',
    width: SCREEN.width,
    resizeMode: 'cover'
  },
  blur: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  content: {
    shadowColor: '#222',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column'
  },
  headerView: {
    flex: 5
  },
  headerTextView: {
    position: 'absolute',
    left: 25,
    bottom: 25,
    backgroundColor: 'transparent'
  },
  headerTextViewTitle: {
    fontSize: 35,
    color: 'white',
    fontWeight: '300',
    paddingBottom: 10
  },
  headerTextViewSubtitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '300'
  },
  listView: {
    flex: 7,
    backgroundColor: 'rgba(247,247, 250, 1)'
  },
  listContainerView: {
    marginTop: 0
  },
  itemCompleteTitle: {
    fontSize: 17,
    color: COLORS.titleGreyComplete,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  itemInCompleteTitle: {
    fontSize: 17,
    color: COLORS.titleGreyInComplete
  },
  itemCompleteSubtitle: {
    fontSize: 14,
    color: COLORS.subtitleGreyComplete,
    fontWeight: '400'
  },
  itemInCompleteSubtitle: {
    fontSize: 14,
    color: COLORS.subtitleGreyInComplete,
    fontWeight: '400'
  },
  addNewItemContainerView: {
    height: 60,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.addItemIconWithValue
  },
  addItemIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15
  },
  addItemTextInputContainer: {
    flex: 10,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  textInputStyle: {
    height: 40,
    fontSize: 18,
    fontWeight: '400'
  },
  submitItemIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15
  }
});

ParallaxScrollView.defaultProps = {
  backgroundSource: {uri: 'http://i.imgur.com/ytzr6ff.png'},
  windowHeight: SCREEN.height * 0.38,
  contentInset: {
    top: SCREEN.scale
  },
};

ParallaxScrollView.propTypes = {
  ...ScrollViewPropTypes,
  windowHeight: React.PropTypes.number,
  backgroundSource: React.PropTypes.oneOfType([
    React.PropTypes.shape({
      uri: React.PropTypes.string
    }),
    React.PropTypes.number
  ]),
  header: React.PropTypes.node,
  blur: React.PropTypes.string,
  contentInset: React.PropTypes.object
};
