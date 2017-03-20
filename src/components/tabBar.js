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

  _renderContent = (color: string, pageText: string, num?: number) => {
    return(
      <View style={[styles.tabContent, {backgroundColor: color}]}>
        <Text style={styles.tabText}>{pageText}</Text>
        <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
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
          {this._renderContent('#414A8C', 'Blue Tab')}
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
          {this._renderContent('#783E33', '')}
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
          {this._renderContent('#21551C', 'Green Tab')}
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
          {this._renderContent('#21551C', 'Green Tab')}
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
