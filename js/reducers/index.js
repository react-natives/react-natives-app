import { combineReducers } from 'redux';
import eventsReducer from './events';
import controlReducer from './control';

const rootReducer = combineReducers({
    events: eventsReducer,
    control: controlReducer
});

export default rootReducer