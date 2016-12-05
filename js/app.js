/**
 * React Natives App
 * https://github.com/react-natives/react-natives-app
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Map from './meetups/map';
import List from './meetups/list';
import chevron from '../assets/back_chevron.png';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navBar: {
    backgroundColor: '#5555FF',
  },
  navBarText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" />
    <Router>
      <Scene key="root">
        <Scene
          navigationBarStyle={styles.navBar}
          backButtonImage={chevron}
          titleStyle={styles.navBarText} key="map" component={Map} title="Meetup Location"
        />
        <Scene
          navigationBarStyle={styles.navBar}
          titleStyle={styles.navBarText} key="list" component={List} title="Meetups" initial
        />
      </Scene>
    </Router>
  </View>
);

AppRegistry.registerComponent('ReactNatives', () => App);
