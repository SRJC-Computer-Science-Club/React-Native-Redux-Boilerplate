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
    Button,
	Platform
} from 'react-native';
import * as actions from './actions/actions'
import PageOne from './components/page1'
import PageTwo from './components/page2'

import Header from './components/header'
const App = (props) => {

    //runs  an action on startup, this is like get all saved data or other shit
    //this is also where thunk comes in handy, because the startup action can
    //dispatch many actions to other reducers

    //right now it doesn't do anything but you can imagine the uses with settings and shit
    props.onStartActions();


    //BEFORE we render the component we decide what page it should be
    let page = null;
    if(props.currentPage == 1){
        page = <PageOne/>;
    }else{
		page = <PageTwo/>;
	}


	let extraStyle = {};
	//this is just for styling
    if(Platform.OS === "ios"){
		extraStyle = {marginTop: 23}
    }

    return (
       <View style={[AppStyles.container, extraStyle]}>
            <Header/>
            {page}
           <View>
               <Button title={"change the page"} onPress={() => props.changeView()}
                       color={props.currentPage === 1 ?  "#0F7BE0" : "#212331" }/>
           </View>
       </View>

    );
};


//best youtube tutorial is found here, watch the whole series : https://www.youtube.com/watch?v=1w-oQ-i1XB8

//connect is a wrapper that maps props to the various item in the store and then also maps
//props to specifc actions to change the store

//in the below example props.currentPage get mapped to the stores stateReducerState's currentPage item

//and the onStartActions and changeView props are mapped to these dispatches


export default connect(
    (state) => ({
        currentPage: state.state.currentPage
    }),
    (dispatch) => ({
        onStartActions: () => dispatch(actions.onStart()),
        changeView: () => dispatch(actions.changeView())
    })
)(App)



const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
	counterContainer: {
		flex: 1,
		flexDirection: 'row',
        justifyContent:"center",
	},
    incrementButton: {
        alignSelf: 'center'
    }
});