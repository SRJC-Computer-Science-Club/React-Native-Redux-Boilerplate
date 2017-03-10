/**
 * Created by drunkengranite on 2/24/17.
 */
import React from 'react';
import {connect} from 'react-redux'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	PanResponder,
	Animated,
	Dimensions,
	Button
} from 'react-native';
import * as actions from '../actions/actions'

import TaskTable from './_taskView/_tasksTable'

const TasksView = (props) => {

	//runs  an action on startup, this is like gte all saved data or other shit


	return(
		<View style={PageOneStyles.container}>
			<TaskTable/>
		</View>
	);
};

export default connect(
	(state) => ({
	}),
	(dispatch) => ({
		increment: (name) => dispatch(actions.incrementCounter(name)),
		decrement: (name) => dispatch(actions.decrementCounter(name))
	})
)(TasksView)



const PageOneStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent:"center",
		alignItems: 'center',
	},
	counterContainer: {
		flexDirection: 'row',
		justifyContent:"center",
		alignItems: 'center',
		backgroundColor: "#212331",
	},
	incrementButton: {
		alignSelf: 'center',
		color: 'white'
	}
});
