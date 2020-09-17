import * as actionTypes from './actionTypes';

export const incrementCounter = () => {
    return {
        type: actionTypes.INCREMENT_COUNTER
    }
}
export const decrementCounter = () => {
    return {
        type: actionTypes.DECREMENT_COUNTER
    }
}
export const addToCounter = (payload) => {
    return {
        type: actionTypes.ADD_TO_COUNTER,
        payload
    }
}
export const subtractFromCounter = (payload) => {
    return {
        type: actionTypes.SUBTRACT_FROM_COUNTER,
        payload
    }
}

