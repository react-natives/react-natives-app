import { ADD_EVENTS } from '../constants/action-types'

export function addEvents(events) {
    return {
        type: ADD_EVENTS,
        events: events
    };
};