/**
 * React Natives App
 * https://github.com/react-natives/react-natives-app
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AsyncStorage
} from "react-native";
import { StackNavigator } from "react-navigation";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { composeWithDevTools } from "remote-redux-devtools";
import logger from "redux-logger";

import Map from "./js/meetups/map";
import List from "./js/meetups/list";
import Videos from "./js/meetups/videos";
import reducer from "./js/reducers/";

const composeEnhancers = composeWithDevTools(
  {
    // Specify here name, actionsBlacklist, actionsCreators and other options if needed
  }
);
const store = createStore(
  reducer,
  /* preloadedState, */
  composeEnhancers(applyMiddleware(logger), autoRehydrate())
);
persistStore(store, { storage: AsyncStorage });

const Router = StackNavigator(
  {
    List: { screen: List },
    Map: { screen: Map },
    Videos: { screen: Videos }
  },
  {
    navigationOptions: {
      header: {
        style: {
          backgroundColor: "#5555FF"
        },
        tintColor: "white"
      }
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <Router />
        </View>
      </Provider>
    );
  }
}

let styles = {
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  navBar: {
    backgroundColor: "#5555FF"
  },
  navBarText: {
    color: "white",
    fontWeight: "bold"
  }
};

styles = StyleSheet.create(styles);
//AppRegistry.registerComponent("ReactNatives", () => App);
