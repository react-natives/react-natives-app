# React Natives App

App for React & React Native developers developed together with the community as a live React Native example

## Install development tools
- Getting started guide (select your mobile and desktop OS): https://facebook.github.io/react-native/docs/getting-started.html

## Install the project
- git clone https://github.com/react-natives/react-natives-app.git
- npm install

## Run the project
- download Expo app from App Store or Google Play
- run "yarn start" in the project root directory
- scan in the QR code in the terminal that shows up after the project has started on your phone with the Expo app

## Troubleshooting
- restart the packager after npm install or if you have strange problems in general
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
