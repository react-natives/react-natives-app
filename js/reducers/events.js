import events from '../../database/events.json'

const initialState = events

export default (state = initialState, action) => {
    alert(JSON.stringify(action));
    let nextState = state;
    switch (action.type) {
        case 'DELETE_EVENT':
            return nextState.events(action.index, 1);
        case 'ADD_EVENT':
            return nextState.push(action.event);
        default:
            return state;
    }
}