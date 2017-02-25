/**
 * Created by drunkengranite on 2/24/17.
 */
import StateReducers from './state.reducers'
import {combineReducers} from 'redux'
import DataReducers from './data.reducers'


//IMPORTANT

//what this does is map the reducers "initialStates" specific key pairings.

//for example StateReducer has an attribute called "currentPage", so its found under state.state.currentPage,
//since I am mapping all of StateReducers item to the key "state"

//data has counters, so the couter arguments, "ie counterOne" is mapped to the "data" key since those are found in the
//data reducers

const Reducers = combineReducers({
    state: StateReducers,
    data: DataReducers,

});

export default Reducers;
