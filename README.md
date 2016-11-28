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
- Android: react-native run-android runs the Android App. It is recommended to connect a real phone in development mode (see the official getting started) beforehand because the Android simulator is really slow (or try GenyMotion): https://facebook.github.io/react-native/docs/running-on-device-android.html. Also you need to register an Google maps API key: https://developers.google.com/maps/documentation/android-api/ and put it in the Android project as explained here: https://github.com/airbnb/react-native-maps/blob/master/docs/installation.md

## Troubleshooting
- restart the packager after npm install or if you have strange problems in general
- be sure to install Xcode 8 until I downgraded the Xcode project
- if you need more help check the react natives slack team for help
- when building on Linux/Android, installing `watchman` is not optional:

```
installed watchman: the app will need/use the .watchmanconfig file

run once system-wide (https://github.com/facebook/react-native/issues/3199):
echo 256 | sudo tee -a /proc/sys/fs/inotify/max_user_instances
echo 32768 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 65536 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
watchman shutdown-server
```

## Useful hints extending the app
- If you are adding new dependencies with npm install --save <npm-package-name> you may need to runs "react-native link" afterwards to link the package in the native iOS / Android projects

## Screenshots
![Map screen](https://github.com/react-natives/screenshots/blob/master/react-natives-app/map.png "Map screen")
![List screen](https://github.com/react-natives/screenshots/blob/master/react-natives-app/list.png "List screen")
