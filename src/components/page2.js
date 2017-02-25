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


const PageTwo = (props) => {

	//runs  an action on startup, this is like gte all saved data or other shit


	return (
		<View style={PageTwoStyles.container}>
			<Text style={{color: "white", fontSize: 30, marginBottom: 10}}>
				Counter 2
			</Text>
			<View style={PageTwoStyles.counterContainer}>
				<Button onPress={() => props.decrement("counterTwo")} title={"decrement"} color={"#212331"}/>
				<Text style={{color: "white",  marginLeft: 30, marginRight: 30, fontSize: 20, }}>
					{props.counter}
				</Text>
				<Button onPress={() => props.increment("counterTwo")} title={"increment"} color={"#212331"}/>
			</View>
		</View>

	);
};

export default connect(
	(state) => ({
		counter: state.data.counterTwo,
	}),
	(dispatch) => ({
		increment: (name) => dispatch(actions.incrementCounter(name)),
		decrement: (name) => dispatch(actions.decrementCounter(name))
	})
)(PageTwo)



const PageTwoStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent:"center",
		alignItems: 'center',
		backgroundColor: "#0F7BE0",
	},
	counterContainer: {
		flexDirection: 'row',
		justifyContent:"center",
		alignItems: 'center',
	},
	incrementButton: {
		alignSelf: 'center',
		color: 'white'
	}
});