import React from 'react';
import {connect} from 'react-redux'
import {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';
import * as actions from '../actions/actions'

class TabBar extends React.Component {
  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  state = {
    selectedTab: 'tasks'
  };

  _renderContent = (color: string, page: string) => {
		let view = null;
		if (page == "browse")
			view = <View style={[styles.tabContent, {backgroundColor: color}]}/>; //TODO Browse View
		else if (page == "tasks")
			view = <View style={[styles.tabContent, {backgroundColor: color}]}/>; //TODO Tasks View
		else if (page == "git")
			view = <View style={[styles.tabContent, {backgroundColor: color}]}/>; //TODO Git Issues View
		else
			view = <View style={[styles.tabContent, {backgroundColor: color}]}/>; //TODO Links View

    return(
      view
    );
  };

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="yellow"
        tintColor="white"
        unselectedItemTintColor="red"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Browse"
	          // icon={require('./flux.png')}
	          // selectedIcon={require('./relay.png')}
          selected={this.state.selectedTab === 'browse'}
          onPress={() => {
            this.setState({
              selectedTab: 'browse',
            });
          }}>
          {this._renderContent('#414A8C', 'browse')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Tasks"
	          // icon={require('./flux.png')}
	          // selectedIcon={require('./relay.png')}
          badge={5} //TODO Tasks Badge
          badgeColor="red"
          selected={this.state.selectedTab === 'tasks'}
          onPress={() => {
            this.setState({
              selectedTab: 'tasks'
            });
          }}>
          {this._renderContent('#783E33', 'task')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Issues"
	          // icon={require('./flux.png')}
	          // selectedIcon={require('./relay.png')}
          badge={5} //TODO Issues Badge
          selected={this.state.selectedTab === 'git'}
          onPress={() => {
            this.setState({
              selectedTab: 'git'
            });
          }}>
          {this._renderContent('#21241C', 'git')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Quick Links"
	          // icon={require('./flux.png')}
	          // selectedIcon={require('./relay.png')}
          selected={this.state.selectedTab === 'links'}
          onPress={() => {
            this.setState({
              selectedTab: 'links'
            });
          }}>
          {this._renderContent('#27531C', 'links')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = TabBar;
