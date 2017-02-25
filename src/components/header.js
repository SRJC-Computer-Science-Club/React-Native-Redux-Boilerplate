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


const Header = (props) => {

	//runs  an action on startup, this is like gte all saved data or other shit


	return (
		<View style={HeaderStyles.header}>
			<Text style={{color:"white"}}>
				THE CURRENT PAGE IS {props.currentPage}
			</Text>
		</View>
	);
};

export default connect(
	(state) => ({
		//maps only one thing here
		currentPage: state.state.currentPage
	}),
	(dispatch) => ({
		//nothing is here because the header never changes the store, only displays shit from it
	})
)(Header)

const HeaderStyles = StyleSheet.create({
	header: {
		flex: .1,
		flexDirection: 'row',
		justifyContent:"center",
		alignItems: 'center',
		backgroundColor: "#373a4e",
	},

});