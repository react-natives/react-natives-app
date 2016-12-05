import { combineReducers } from 'redux';

import eventsReducer from './events';
import linksReducers from './links';
import locationsReducer from './locations';

const rootReducer = combineReducers({
  events: eventsReducer,
  links: linksReducers,
  locations: locationsReducer,
});

export default rootReducer
