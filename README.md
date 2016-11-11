# React Natives App

App for React & React Native developers developed together with the community as a live React Native example 

## Install development tools
- Getting started guide (select your mobile and desktop OS): https://facebook.github.io/react-native/docs/getting-started.html
- assuming you have installed node, watchman, react-native-cli
- for iOS development: you need a Mac and Xcode (version 8 is currently required, I will downgrade this requirement)
- for Android development: you need Android Studio and the Android SDK and follow the steps in the getting started

## Install the project
- git clone https://github.com/react-natives/react-natives-app.git
- npm install

## Run the project
- iOS react-native run-ios starts the App in the simulator (which is really good)
- Android: react-native run-android runs the Android App. It is recommended to connect a real phone in development mode (see the official getting started) beforehand because the Android simulator is really slow (or try GenyMotion): https://facebook.github.io/react-native/docs/running-on-device-android.html

## Useful tipps when you extend the app
- If you are adding new dependencies with npm install --save <npm-package-name> you may need to runs "react-native link" afterwards to link the package in the native iOS / Android projects



