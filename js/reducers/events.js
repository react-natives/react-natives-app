import eventsDatabase from '../../database/events.json'

const initialState = eventsDatabase;

export default function(state = initialState, action = {}) {
    return state
}