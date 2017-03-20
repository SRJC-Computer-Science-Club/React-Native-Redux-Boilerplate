import React from 'react';
import {connect} from 'react-redux'
import {
    ToolbarAndroid
} from 'react-native';
import * as actions from '../actions/actions'

const Toolbar = (props) => {
	return (
		<ToolbarAndroid
			logo={require('./app_icon.png')}
			title="AwesomeApp"
			actions={
				[
					{title: 'Settings', icon: '', show: 'always'}
				]
			}
			onActionSelected={this.onActionSelected} />
		);
}

module.exports = Toolbar;
