import { combineReducers } from 'redux';

import eventsReducer from './events';

const rootReducer = combineReducers({
    events: eventsReducer
});

export default rootReducer