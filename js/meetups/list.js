/**
 * React Natives App
 * https://github.com/react-natives/react-natives-app
 * @flow
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  RefreshControl
} from "react-native";
import moment from "moment";
import meetupApiConfig from "../../config/meetup-api";
import * as eventActionCreators from "../actions/events";

class List extends Component {
  props: {
    events: Object,
    eventActions: Object,
    isRefreshing: boolean,
    navigation: Object
  };

  static navigationOptions = {
    title: "Meetups"
  };

  static defaultProps = {
    isRefreshing: false
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(props.events),
      isRefreshing: this.props.isRefreshing
    };
    this._renderRow = this._renderRow.bind(this);
    this._pressRow = this._pressRow.bind(this);
  }

  _pressRow(rowData) {
    this.props.navigation.navigate("Map", {
      longitude: rowData.venue.lon,
      latitude: rowData.venue.lat
    });
  }

  _renderRow(rowData: string, sectionID: number) {
    return (
      <TouchableHighlight
        onPress={() => {
          this._pressRow(rowData);
          //highlightRow(sectionID, rowID);
        }}
      >
        <View style={{ flexDirection: "row", backgroundColor: "white" }}>
          <View style={styles.row}>
            <Text style={styles.text}>
              {moment(rowData.time).format("LL")}, {rowData.venue.city}
            </Text>
            <Text style={styles.title}>
              {rowData.group.name}

            </Text>

            <Text style={styles.description}>
              {rowData.name}
            </Text>

          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _renderSeparator(
    sectionID: number,
    rowID: number,
    adjacentRowHighlighted: boolean
  ) {
    return (
      <View
        key={`${sectionID}-${rowID}`}
        style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? "#3B5998" : "#CCCCCC",
          marginLeft: 15
        }}
      />
    );
  }

  fetchMeetupEvents = () => {
    meetupApiConfig.signedEventRequests.map(async signedEventRequest => {
      try {
        const response = await fetch(signedEventRequest.url, {
          method: "GET"
        });
        const json = await response.json();
        this.props.eventActions.addEvents(json);
        this.setState({ isRefreshing: false });
      } catch (error) {
        console.error(error);
        this.setState({ isRefreshing: false });
      }
    });
  };

  componentWillReceiveProps(nextProps) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.setState({ dataSource: ds.cloneWithRows(nextProps.events) });
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          style={{ flex: 1 }}
          dataSource={this.state.dataSource}
          enableEmptySections={true}
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

let styles = {
  container: {
    //...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: "white"
    //marginTop: 63,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
    margin: 3,
    color: "black",
    backgroundColor: "transparent"
  },
  text: {
    fontSize: 12,
    fontWeight: "normal",
    textAlign: "left",
    margin: 3,
    color: "gray",
    backgroundColor: "transparent"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  row: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 15,
    backgroundColor: "white"
  }
};

styles.description = {
  ...styles.text,
  fontSize: 14,
  color: "black"
};

styles = StyleSheet.create(styles);

function mapStateToProps(state) {
  return {
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return {
    eventActions: bindActionCreators(eventActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
