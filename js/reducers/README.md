# About this directory
This directory should contain all **redux** reducers used within this app. The index.js file of this directory should 
export the combination of all reducers as rootReducer.

```javascript
import { combineReducers } from 'redux';

import reducerA from './a';
import reducerB from './b';

const rootReducer = combineReducers({
    a: reducerA,
    b: reducerB
});

export default rootReducer
```