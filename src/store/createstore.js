/**
 * Created by drunkengranite on 2/9/17.
 */
import Reducers from '../reducers/all.reducers'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const middleware = applyMiddleware(thunk);

const Store = createStore(Reducers, middleware);

export default Store;
