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
  ListView,
  TouchableHighlight,
  Linking,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class List extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          title: 'Munich, October 11, 2016',
          description: 'React Native Intro, React Native Munich, Codecentric, Elsenheimerstr. 55a, Munich',
          coodinates: {
             latitude: 48.1368369,
             longitude: 11.523603
          }
        },
        {
          title: 'Cologne, October 27, 2016',
          description: 'React Native Intro, React Native Cologne, InTradeSys, Dillenburgerstr. 75, Cologne',
          coodinates: {
             latitude: 50.934017,
             longitude: 7.011037
          },
        },
        {
          title: 'Munich, November 10, 2016',
          description: 'React Native Demo & Workshop, React Native Munich, Codecentric, Elsenheimerstr. 55a, Munich',
          coodinates: {
             latitude: 48.1368369,
             longitude: 11.523603
          },
        }
      ]),
      nav: [
        (data) => Actions.map(data),
        (data) => Actions.map(data),
        (data) => Actions.map(data),
      ]
    };
    this._renderRow = this._renderRow.bind(this);
    this._pressRow = this._pressRow.bind(this);
  }

  _pressRow(rowID: number) {
    let data = this.state.dataSource.getRowData(0, rowID);

    // convert data from type Object to Map, otherwise is will not passed thru to the scene
    this.state.nav[rowID]( new Map( Object.keys(data).map(key => [key, data[key]]) ) );
  }

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    let rowHash = Math.abs(hashCode(rowData));
    return (
      <TouchableHighlight onPress={() => {
          this._pressRow(rowID);
          //highlightRow(sectionID, rowID);
      }}>
        <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={styles.row}>
            <Text style={styles.textBold}>
              {rowData.title}
            </Text>
            <Text style={styles.text}>{rowData.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _renderSeparator (sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
  return (
    <View key={`${sectionID}-${rowID}`}
          style={{
            height: adjacentRowHighlighted ? 4 : 1,
            backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
            marginHorizontal: 15
          }}
    />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={{flex:1}}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSeparator={this._renderSeparator}
        />
      </View>
    );
  }
}

/* eslint no-bitwise: 0 */
let hashCode = function(str) {
  let  hash = 15;
  for (let ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};


let styles = {
  container: {
    //...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 63,
  },
  text: {
    fontSize: 14,
    fontWeight: 'normal',
    textAlign: 'left',
    margin: 3,
    color: 'gray',
    backgroundColor: 'transparent'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: 'white',
  },
};

styles.textBold = {
  ...styles.text,
  fontWeight: 'bold',
  fontSize: 16,
  color: 'black'
};

styles = StyleSheet.create(styles);

