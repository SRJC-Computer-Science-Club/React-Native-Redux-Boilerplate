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

const TaskCell = (props) => {
	return (
		<View>
			<Text>Title {props.obj.title}</Text>
      <Text>Due Date is {props.obj.deadline}</Text>
      <Text>Notes: {props.obj.notes}</Text>
			<View style={styles.separator} />
		</View>
	);
};

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
    })
)(TaskCell)

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});
