/**
 * Created by drunkengranite on 2/24/17.
 */
import {handleActions} from 'redux-actions'
import {
    INCREMENT,
    DECREMENT
} from '.././constants/constants'


const initialState = {
   counterOne: 1,
   counterTwo: 2,
};


const DataReducers = handleActions({


    //catches action of type INCREMENT
    [INCREMENT]: (state, action) => {
        const name  = action.payload;

        //logic is kinda self explanatory
        if(name === "counterOne"){
			return {
				...state,
				counterOne: state.counterOne + 1,
			}

        }else{
			return {
				...state,
			    counterTwo: state.counterTwo + 1,
            }
		}

    },


	//catches action of type DECREMENT
    [DECREMENT]: (state, action) => {
		const name  = action.payload;

		if(name === "counterOne"){
			return {
				...state,
				counterOne: state.counterOne - 1,
			}

		}else{
			return {
				...state,
				counterTwo: state.counterTwo - 1,
			}
		}
    },

}, initialState);


export default DataReducers