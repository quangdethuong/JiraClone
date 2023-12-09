const historyState = {
    history: {}
}


export default (state = historyState, action) => {
    switch (action.type) {

        case 'ADD_HISTORY':
            state.history = action.history
            console.log('statehistory: ',
                state.history);
            return {...state }

        default:
            return {...state }
    }
}