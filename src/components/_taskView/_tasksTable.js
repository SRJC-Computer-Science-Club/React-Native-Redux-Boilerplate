import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/actions'
import { incrementCounter } from '../../actions/actions'
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	PanResponder,
	Animated,
	Dimensions,
	Button,
	ListView
} from 'react-native';

import TaskCell from './_task-cell'

class TaskTable extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.tasks),
    };
  }

	renderRow(rowData, sectionID, rowID) {
	 	return (
	    	<TaskCell rowData={rowData}/>
	  );
	}

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default connect(
	(state) => ({
		tasks: state.data.tasks
	}),
	(dispatch) => ({
		//nothing is here because the header never changes the store, only displays shit from it
	})
)(TaskTable)
