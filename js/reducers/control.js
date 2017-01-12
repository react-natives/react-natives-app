const initialState = {
    visibleGroups: [
        'React Native Munich',
        'React Native Cologne']
}

export default (state = initialState, action) => {
    alert(JSON.stringify(action));
    let nextState = state;
    switch(action.type) {
        case 'TOGGLE_VISIBILITY':
            if (nextState.visibleGroups.indexOf(action.group) >= 0) {
                nextState.visibleGroups.splice(nextState.visibleGroups.indexOf(action.group), 1);
            }
            else {
                nextState.visibleGroups.push(action.group);
            }
            return nextState;
        default:
            return state
    }
}