export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const ADD_TO_COUNTER = 'ADD_TO_COUNTER';
export const SUBTRACT_FROM_COUNTER = 'SUBTRACT_FROM_COUNTER';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER
    }
}
export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}
export const addToCounter = (payload) => {
    return {
        type: ADD_TO_COUNTER,
        payload
    }
}
export const subtractFromCounter = (payload) => {
    return {
        type: SUBTRACT_FROM_COUNTER,
        payload
    }
}
export const storeResult = (payload) => {
    return {
        type: STORE_RESULT,
        payload
    }
}
export const deleteResult = (payload) => {
    return {
        type: DELETE_RESULT,
        payload
    }
}