/**
 * Created by drunkengranite on 2/24/17.
 */
import {handleActions} from 'redux-actions'
import {
    INCREMENT,
    DECREMENT
} from '.././constants/constants'

function User(id, token, name, role) {
	this.id = id;
	this.token = token;
	this.name = name;
	this.role = role;
}

function Task(id, title, deadline, notes, authorID, assignedByID, assignedToID) {
	this.id = id;
	this.title = title;
	this.notes = notes;
	this.authorID = authorID;
	this.assignedByID = assignedByID;
	this.assignedToID = assignedToID;
}

function Reminder(id, taskID, fireDate) {
	this.id = id;
	this.taskID = taskID;
	this.fireDate = fireDate;
}

function Action(id, taskID, title, action, value) {
	this.id = id;
	this.taskID = taskID;
	this.title = title;
	this.action = action;
	this.value = value;
}

const initialState = {
   counterOne: 1,
   counterTwo: 2,
	 user: new User(0,'123456789','Unnamed Child','member'),
	 tasks: [
		 new Task(2,'Email Bob', 'March 10, 2017','','987654321','987654321','123456789'),
		 new Task(4,'Contact Bobby about Bob', 'March 10, 2017','nothing suspicious, ok?','987654321','987654321','123456789'),
		 new Task(12,'Fire Bob', 'March 17, 2017','Hmmmmmm','987654321','987654321','123456789')
	 ],
	 reminders: [
		 new Reminder(0,2,'March 9, 2017')
	 ],
	 actions: [
		 new Action(0,2,'Email',0,'bobisawesome@hotmail.com')
	 ]
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
