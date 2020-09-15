import * as actionTypes from '../actions';
const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }

        case actionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }

        case actionTypes.ADD_TO_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload.value
            }

        case actionTypes.SUBTRACT_FROM_COUNTER:
            return {
                ...state,
                counter: state.counter - action.payload.value
            }
        default:
            break;
    }
    return state;
}

export default reducer;