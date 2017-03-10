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
	Button,
	TouchableHighlight
} from 'react-native';
import * as actions from '../../actions/actions'

class TaskCell extends View {
	render() {
		return (
			<TouchableHighlight underlayColor='#dddddd' style={{height: 44}}>
				<View>
					<Text style={{fontSize: 20, color: '#000000'}} numberOfLines={1}>{this.props.rowData.title}</Text>
					<Text style={{fontSize: 12, color: '#000000'}} numberOfLines={1}>{this.props.rowData.notes}</Text>
					<View style={styles.separator} />
				</View>
			</TouchableHighlight>
		);
	}
}

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
