/**
 * Created by drunkengranite on 2/24/17.
 */
import {
    INCREMENT, DECREMENT, CHANGE_VIEW
} from '../constants/constants'

//this is what a "thunk" type action would be, it can return many dispatches and runs pseudo "async"

export const onStart = () => {
    return (dispatch, getState) => {
        //do shit here
        //like if we wanted to reload saved coutners if they existed  they would go here

    }
};


//this should make a little sense, type of INCREMENT, payload is the name


export const incrementCounter = (counterName) => {

    return {
        type: INCREMENT,
        payload: counterName
    }
};

export const decrementCounter = (counterName) => {

    return {
        type: DECREMENT,
        payload: counterName
    }
};



export const changeView = () => {
    return {
        type: CHANGE_VIEW,
    }
};
