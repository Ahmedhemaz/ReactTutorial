import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';
const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.payload.result }) });

        case actionTypes.DELETE_RESULT:
            const updatedResults = state.results.filter(result => result.id !== action.payload.id);
            return updateObject(state, { results: updatedResults });

        default:
            break;
    }
    return state;
}

export default reducer;