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


const PageOne = (props) => {

	//runs  an action on startup, this is like gte all saved data or other shit


	return(
		<View style={PageOneStyles.container}>
			<Text style={{color: "white", fontSize: 30, marginBottom: 10}}>
				Counter 1
			</Text>
			<View style={PageOneStyles.counterContainer}>
				<Button onPress={() => props.decrement("counterOne")} title={"decrement"} color={"#0F7BE0"}/>
				<Text style={{color: "white", marginLeft: 30, marginRight: 30, fontSize: 20, }}>
					{props.counter}
				</Text>
				<Button onPress={() => props.increment("counterOne")} title={"increment"} color={"#0F7BE0"}/>
			</View>
		</View>
	);
};

export default connect(
	(state) => ({
		counter: state.data.counterOne,
	}),
	(dispatch) => ({
		increment: (name) => dispatch(actions.incrementCounter(name)),
		decrement: (name) => dispatch(actions.decrementCounter(name))
	})
)(PageOne)



const PageOneStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent:"center",
		alignItems: 'center',
		backgroundColor: "#212331",
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