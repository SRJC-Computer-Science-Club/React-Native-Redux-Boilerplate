/**
 * Created by drunkengranite on 2/24/17.
 */
import App from './app'
import {Provider} from 'react-redux'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Store from './store/createstore'
import React, {Component} from 'react';

const SRJCBoilerPlate = (props) => {
    return (

        //don't worry too much about this, in order for our components to "see"  the store they have to be wrapped
        //in something called a provider. The only way to do this is to take the topmost component and wrap it in
        //said provider. Its a big ass middleware wrapper, so just understand its blackbox functionality


        //also note how I import Store and then pass it in, this is the only component that shoud ever import
        //createStore
        <Provider store={Store}>
            <App/>
        </Provider>
    );
};

export default SRJCBoilerPlate;
