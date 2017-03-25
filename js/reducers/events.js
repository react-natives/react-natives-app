//import eventsDatabase from "../../database/events.json";
import { ADD_EVENTS } from "../constants/action-types";

const initialState = {}; //eventsDatabase;

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_EVENTS:
      const allEvents = [...state, ...action.events];

      let sortOrder = [];
      allEvents.map(event => {
        sortOrder.push(event.time);
      });
      sortOrder.sort((a, b) => {
        return b - a;
      });
      const uniqueEventTimeStamps = [...new Set(sortOrder)];

      let nextState = [];
      uniqueEventTimeStamps.map(time => {
        let eventAlreadyFound = false;
        allEvents.map(event => {
          if (time === event.time && !eventAlreadyFound) {
            nextState.push(event);
            eventAlreadyFound = true;
          }
        });
      });

      return nextState;
  }
  return state;
}
