import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_SCALE = Dimensions.get('window').scale;

export const DEFAULT_WINDOW_MULTIPLIER = 0.50;
export const DEFAULT_NAVBAR_HEIGHT = 65;

export const USER = {
  name: 'Katy Friedson',
  title: 'Engineering Manager',
  image: 'http://i.imgur.com/uma9OfG.jpg',
};

export const FACEBOOK_LIST = [
  {
    title: 'Friends',
    icon: 'people'
  },
  {
    title: 'Pictures',
    icon: 'wallpaper'
  },
  {
    title: 'Payment',
    icon: 'credit-card'
  },
  {
    title: 'Nearby',
    icon: 'location-city'
  },
  {
    title: 'Games',
    icon: 'videogame-asset'
  },
];

export const SLACK_LIST = [
  {
    title: 'Activity',
    icon: 'bookmark-border'
  },
  {
    title: 'Notifications',
    icon: 'notifications-none'
  },
  {
    title: 'Starred Items',
    icon: 'star-border'
  },
  {
    title: 'Your Files',
    icon: 'cloud-queue'
  },
];

export const GENERIC_LIST = [
  {
    title: 'Edit Profile',
    icon: 'person'
  },
  {
    title: 'Change Password',
    icon: 'fingerprint'
  },
  {
    title: 'Settings',
    icon: 'settings'
  },
  {
    title: 'History',
    icon: 'history'
  },
  {
    title: 'Help',
    icon: 'help'
  },
];
