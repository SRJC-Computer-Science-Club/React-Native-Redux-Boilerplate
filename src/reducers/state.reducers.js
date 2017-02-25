/**
 * Created by drunkengranite on 2/24/17.
 */
import {handleActions} from 'redux-actions'
import {
    CHANGE_VIEW
} from '.././constants/constants'



const initialState = {
    currentPage: 1
};



const StateReducers = handleActions({

	[CHANGE_VIEW]: (state, action) => {
	    //this just flip flops the currentPage
        //if page is 1, return 2 and vice versa

        let newCurrentPage = null;

        if(state.currentPage === 1){
	        newCurrentPage = 2;
        }else{
	        newCurrentPage = 1;
        }


        //NOTE WE RETURN A NEW OBJECT. WE DONT JUST CHANGE STATE AND THEN JUST RETURN {...state}
		//the reasonw hy this is important will come later in bigger project, but it boils down to the fact
		//that if you just mutate the current Store and return {...state}, the components will not know to update
		//because to them the store did not change

        return {
			...state,
            currentPage: newCurrentPage
		}
	},


}, initialState);



export default StateReducers;