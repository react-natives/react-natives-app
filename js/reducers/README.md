# About this directory
This directory should contain all **redux** reducers used within this app. The index.js file of this directory should 
export the rootReducer.

```javascript
import { combineReducers } from 'redux';

const reducers = {
    reducerA: require('./reducer-a.js'),
    reducerB: require('./reducer-b.js')
};

module.exports = combineReducers(reducers);
```