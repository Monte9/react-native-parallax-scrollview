import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    Animated,
    ScrollView,
    StyleSheet
} from 'react-native';

import {Icon, List, ListItem} from 'react-native-elements';

import {
    USER,
    FACEBOOK_LIST,
    SLACK_LIST,
    GENERIC_LIST,
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    DEFAULT_WINDOW_MULTIPLIER,
    DEFAULT_NAVBAR_HEIGHT
} from './constants';

const ScrollViewPropTypes = ScrollView.propTypes;
const PropTypes = require('prop-types');
export default class ParallaxScrollView extends Component {
    constructor() {
        super();

        this.state = {
            scrollY: new Animated.Value(0)
        };
    }

    renderBackground() {
        var {windowHeight, backgroundSource, backgroundColor} = this.props;
        var {scrollY} = this.state;
        if (!windowHeight || !backgroundSource) {
            return null;
        }

        return (
            <Animated.Image
                style={[
                    styles.background,
                    {
                        height: windowHeight,
                        backgroundColor: backgroundColor,
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
        var {windowHeight, backgroundSource, userImage, userName, userTitle} = this.props;
        var {scrollY} = this.state;
        if (!windowHeight || !backgroundSource) {
            return null;
        }

        const newWindowHeight = windowHeight - DEFAULT_NAVBAR_HEIGHT;

        return (
            <Animated.View
                style={{
                    opacity: scrollY.interpolate({
                        inputRange: [-windowHeight, 0, windowHeight * DEFAULT_WINDOW_MULTIPLIER + DEFAULT_NAVBAR_HEIGHT],
                        outputRange: [1, 1, 0]
                    })
                }}
            >
                <View style={{height: newWindowHeight, justifyContent: 'center', alignItems: 'center'}}>
                    {this.props.headerView ||
                    (
                        <View>
                            <View
                                style={styles.avatarView}
                            >
                                <Image source={{uri: userImage || USER.image}}
                                       style={{height: 120, width: 120, borderRadius: 60}}/>
                            </View>
                            <View style={{paddingVertical: 10}}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 22,
                                    color: 'white',
                                    paddingBottom: 5
                                }}>{userName || USER.name}</Text>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 17,
                                    color: 'rgba(247,247, 250, 1)',
                                    paddingBottom: 5
                                }}>{userTitle || USER.title}</Text>
                            </View>
                        </View>
                    )
                    }
                </View>
            </Animated.View>
        );
    }

    renderNavBarTitle() {
        var {windowHeight, backgroundSource, navBarTitleColor} = this.props;
        var {scrollY} = this.state;
        if (!windowHeight || !backgroundSource) {
            return null;
        }

        return (
            <Animated.View
                style={{
                    opacity: scrollY.interpolate({
                        inputRange: [-windowHeight, windowHeight * DEFAULT_WINDOW_MULTIPLIER, windowHeight * 0.8],
                        outputRange: [0, 0, 1]
                    })
                }}
            >
                <Text style={{fontSize: 18, fontWeight: '600', color: navBarTitleColor || 'white'}}>
                    {this.props.navBarTitle || USER.name}
                </Text>
            </Animated.View>
        );
    }

    rendernavBar() {
        var {
            windowHeight, backgroundSource, leftIcon,
            rightIcon, leftIconOnPress, rightIconOnPress, navBarColor, rightIcons
        } = this.props;

        var {scrollY} = this.state;
        if (!windowHeight || !backgroundSource) {
            return null;
        }

        return (
            <Animated.View
                style={{
                    height: DEFAULT_NAVBAR_HEIGHT,
                    width: SCREEN_WIDTH,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: navBarColor || 'rgba(0, 0, 0, 1.0)',
                    opacity: scrollY.interpolate({
                        inputRange: [-windowHeight, windowHeight * DEFAULT_WINDOW_MULTIPLIER, windowHeight * 0.8],
                        outputRange: [0, 0, 1]
                    })
                }}
            >

                <View
                    style={{
                        marginTop: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9
                    }}
                >
                    {leftIcon && <Icon
                        name={leftIcon && leftIcon.name || 'menu'}
                        type={leftIcon && leftIcon.type || 'simple-line-icon'}
                        color={leftIcon && leftIcon.color || 'white'}
                        size={leftIcon && leftIcon.size || 23}
                        onPress={leftIconOnPress}
                        underlayColor='transparent'
                    />}
                </View>

                <View
                    style={{
                        marginTop: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}
                >
                    {this.renderNavBarTitle()}
                </View>

                <View

                    style={{
                        marginTop: 20,
                        alignItems: 'center',
                        zIndex: 9,
                        flexDirection: 'row'

                    }}
                >
                    {rightIcons && rightIcons.map((v, k) => (

                        <Icon
                            key={k}
                            name={v && v.name || 'present'}
                            type={v && v.type || 'simple-line-icon'}
                            color={v && v.color || 'white'}
                            size={v && v.size || 23}
                            onPress={v.onPress}
                            underlayColor='transparent'
                            iconStyle={{marginRight: 10}}
                        />

                    ))}
                </View>
            </Animated.View>
        );
    }

    renderTodoListContent() {
        return (
            <View style={styles.listView}>
                <List>
                    {
                        FACEBOOK_LIST.map((item, index) => (
                            <ListItem
                                key={index}
                                onPress={() => console.log('List item pressed')}
                                title={item.title}
                                leftIcon={{name: item.icon}}/>
                        ))
                    }
                </List>
                <List>
                    {
                        SLACK_LIST.map((item, index) => (
                            <ListItem
                                key={index}
                                onPress={() => console.log('List item pressed')}
                                title={item.title}
                                leftIcon={{name: item.icon}}/>
                        ))
                    }
                </List>
                <List>
                    {
                        GENERIC_LIST.map((item, index) => (
                            <ListItem
                                key={index}
                                onPress={() => console.log('List item pressed')}
                                title={item.title}
                                leftIcon={{name: item.icon}}/>
                        ))
                    }
                </List>
                <List containerStyle={{marginBottom: 15}}>
                    <ListItem
                        key={1}
                        hideChevron={true}
                        onPress={() => console.log('Logout Pressed')}
                        title='LOGOUT'
                        titleStyle={styles.logoutText}
                        icon={{name: ''}}/>
                </List>
            </View>
        );
    }

    render() {
        var {style, ...props} = this.props;

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
                        {nativeEvent: {contentOffset: {y: this.state.scrollY}}}
                    ])}
                    scrollEventThrottle={16}
                >
                    {this.renderHeaderView()}
                    <View style={[styles.content, props.scrollableViewStyle]}>
                        {this.props.children || this.renderTodoListContent()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

ParallaxScrollView.defaultProps = {
    backgroundSource: {uri: 'http://i.imgur.com/6Iej2c3.png'},
    windowHeight: SCREEN_HEIGHT * DEFAULT_WINDOW_MULTIPLIER,
    leftIconOnPress: () => console.log('Left icon pressed'),
};

ParallaxScrollView.propTypes = {
    ...ScrollViewPropTypes,
    backgroundSource: Image.propTypes.source,
    backgroundColor: PropTypes.string,
    windowHeight: PropTypes.number,
    navBarTitle: PropTypes.string,
    navBarTitleColor: PropTypes.string,
    navBarColor: PropTypes.string,
    userImage: PropTypes.string,
    userName: PropTypes.string,
    userTitle: PropTypes.string,
    headerView: PropTypes.node,
    leftIcon: PropTypes.object,
    rightIcons: PropTypes.array
};

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
        width: SCREEN_WIDTH,
        resizeMode: 'cover'
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    listView: {
        backgroundColor: 'rgba(247,247, 250, 1)'
    },
    logoutText: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
