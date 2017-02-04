# About this directory
This directory will contain **redux** actions used within this app

Actions should follow this pattern:
```javascript
import { SOME_ACTION } from '../constants/action-types'

export function someAction(payload) {
    return {
        type: SOME_ACTION,
        payload: {
            key: value
        }
    };
};
```

You can include actions into your components or stores like this:

```javascript
import * as someActionCreators from '../actions/some.js';
```