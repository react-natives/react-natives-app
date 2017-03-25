import React, { Component } from "react";
import { WebView } from "react-native";

const Videos = props => (
  <WebView
    style={{ flex: 1 }}
    javaScriptEnabled={true}
    source={{
      uri: "https://www.youtube.com/embed/videoseries?list=PLRDU4UY3L4pbjm33TJBftPR_dbN95gddI"
    }}
  />
);

export default Videos;
