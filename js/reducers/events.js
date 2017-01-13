import eventsDatabase from '../../database/events.json'

const initialState = eventsDatabase;

export default function(state = initialState, action = {}) {
    let nextState = [...state];
    switch (action.type) {
        case 'DELETE_EVENT':
            nextState.splice(action.index, 1);
            return nextState;
        case 'ADD_EVENT':
            nextState.push(action.event)
            return nextState;
    }

    return state
}