import { Dimensions } from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SCREEN_WIDTH = Dimensions.get('window').width;

export const COLORS = {
  titleGreyInComplete: 'rgba(0, 0, 0, 1)',
  titleGreyComplete: 'rgba(117, 117, 119, 1)',
  subtitleGreyInComplete: 'rgba(117, 117, 119, 1)',
  subtitleGreyComplete: 'rgba(172, 171, 173, 1)',
  checkmarkGreen: 'rgba(131, 175, 41, 1)',
  checkmarkBlack: 'rgba(0, 0, 0, 1)',
  addItemIconWithValue: 'rgba(193, 193, 193, 1)',
  addItemIconNoValue: 'rgba(79, 94, 248, 1)'
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
