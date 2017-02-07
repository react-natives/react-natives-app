/**
 * React Natives App
 * https://github.com/react-natives/react-natives-app
 * @flow
 */

import React, { Component } from 'react';
import { connect, bindActionCreators } from 'react-redux'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  RefreshControl,
  Linking,
  Alert
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import meetupApiConfig from '../../config/meetup-api'

class List extends Component {

  static defaultProps = {
    isRefreshing: false
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.events),
      isRefreshing: this.props.isRefreshing
    };
    this._renderRow = this._renderRow.bind(this);
    this._pressRow = this._pressRow.bind(this);
  }

  _pressRow(rowID: number) {
    Actions.map();
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

  _renderSeparator (sectionID: number, rowID: number, adjacentRowHighlighted: bool)
  {
  return (
    <View key={`${sectionID}-${rowID}`}
          style={{
            height: adjacentRowHighlighted ? 4 : 1,
            backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC',
            marginLeft: 15
          }}
    />
    );
  };

  fetchMeetupEvents = () => {
    this.setState({isRefreshing: true});

    return fetch(
      meetupApiConfig.signedEventRequests[0].url,
      {
        method: 'GET'
      }
    )
    .then((response) => response.json())
    .then((responseJson) => {
      /*
      this.setState({
        annotations: responseJson.results[0].series[0].values
      })
      */
      console.log(responseJson);
      this.setState({isRefreshing: false});
    })
    .catch((error) => {
      console.error(error);
      this.setState({isRefreshing: false});
    });
  };

  componentWillReceiveProps(nextProps)
  {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const eventsFiltered = nextProps.events.filter((element) => {
      return nextProps.control.visibleGroups.indexOf(element.group) >= 0;
    });
    this.setState({dataSource: ds.cloneWithRows(eventsFiltered)});
  }

  render()
  {
    return (
      <View style={styles.container}>
        <ListView
          style={{flex:1}}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderSeparator={this._renderSeparator}
          refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.fetchMeetupEvents}
          />
        }
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
    backgroundColor: 'white',
    marginTop: 63,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 3,
    color: 'black',
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: 12,
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
    padding: 15,
    backgroundColor: 'white',
  },
};

styles.description =  {
  ...styles.text,
  fontSize: 14,
  color: 'black'
};

styles = StyleSheet.create(styles);

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

/*
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({...controlActionCreators, ...eventsActionCreators}, dispatch)
})
*/

export default connect(mapStateToProps /*, mapDispatchToProps*/ )(List)
