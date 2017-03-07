import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions/actions'
import { incrementCounter } from '../actions/actions'
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

import TaskCell from './taskCell'

const TaskTable = (props) => {
	return (
		<View>
			<Text>List of Tasks</Text>
			{props.tasks.map(function(object,index){
				return <TaskCell obj={object} key={index}/>
			})}
		</View>
	);
};

export default connect(
	(state) => ({
		tasks: state.data.tasks
	}),
	(dispatch) => ({
		//nothing is here because the header never changes the store, only displays shit from it
	})
)(TaskTable)
