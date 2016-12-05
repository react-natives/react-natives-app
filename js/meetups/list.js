/**
 * React Natives App
 * https://github.com/react-natives/react-natives-app
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} from 'react-native';
import moment from 'moment';
import { Actions } from 'react-native-router-flux';
import events from '../../database/events.json';

let styles = {
  container: {
    // ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    flex: 1,
    backgroundColor: 'white',
    marginTop: 63,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 3,
    color: 'black',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
    margin: 3,
    color: 'gray',
    backgroundColor: 'transparent',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: 'white',
  },
};

styles.description = {
  ...styles.text,
  fontSize: 14,
  color: 'black',
};

styles = StyleSheet.create(styles);

export default class List extends Component {

  static pressRow() {
    Actions.map();
  }

  static renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
          marginLeft: 15,
        }}
      />
    );
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(events),
    };
    this.renderRow = this.renderRow.bind(this);
    this.pressRow = this.pressRow.bind(this);
  }

  renderRow(
    rowData: string,
    sectionID: number,
    rowID: number,
  ) {
    return (
      <TouchableHighlight
        onPress={() => {
          this.pressRow(rowID);
          // highlightRow(sectionID, rowID);
        }}
      >
        <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
          <View style={styles.row}>
            <Text style={styles.text}>
              {moment(rowData.time).format('LL')}, {rowData.location.city}
            </Text>
            <Text style={styles.title}>
              {rowData.group}

            </Text>

            <Text style={styles.description}>
              {rowData.title}
            </Text>

          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
        />
      </View>
    );
  }
}
