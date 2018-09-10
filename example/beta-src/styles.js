import { StyleSheet } from 'react-native';

import { SCREEN_WIDTH } from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'transparent'
  },
  scrollView: {
    backgroundColor: 'transparent'
  },
  background: {
    position: 'absolute',
    backgroundColor: 'white',
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

export default styles;
