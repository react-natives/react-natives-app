/**
 * React Natives App
 * https://github.com/react-natives/react-natives-app
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends Component {
  render() {
    const latitude = this.props.data.get('coodinates').latitude, longitude = this.props.data.get('coodinates').longitude;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker
            coordinate={{
              latitude,
              longitude,
            }}
            centerOffset={{ x: -18, y: -60 }}
            anchor={{ x: 0.69, y: 1 }}
          />
        </MapView>
        <TouchableOpacity onPress={() => Linking.openURL('http://maps.apple.com/?ll='+latitude+','+longitude)} style={{backgroundColor: '#5555FF', borderRadius: 10, opacity: 1, margin: 20}}>
          <Text style={styles.textBold}>
            <Text style={styles.text}>> Take me to the </Text>Meetup
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

let styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
};

styles.textBold = {
  ...styles.text,
  fontWeight: 'bold'
};

styles = StyleSheet.create(styles);

