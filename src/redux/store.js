import {createStore} from 'redux';
import rootReducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools(); // import middleware

const store = createStore(rootReducer,composedEnhancers);

// enhancer: middleware
// initValue la gi 


export default store;