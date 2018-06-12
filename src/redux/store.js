import { createStore, combineReducers, applyMiddleware } from 'redux';

import promise from 'redux-promise-middleware';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import taskOneReducer from './reducers/TaskOne/taskOneReducer';
import taskTwoReducer from './reducers/TaskTwo/taskTwoReducer';

import textGeneratorReducer from './reducers/TextGenerator/textGeneratorReducer';
import weatherReducer from './reducers/Weather/weatherReducer';

import apiMiddleware from './middleware/apiMiddleware';

const middleware = applyMiddleware(
    promise(),
    thunk,
    createLogger(),
    apiMiddleware,
);

export default createStore(
    combineReducers({
        taskOneReducer,
        taskTwoReducer,
        textGeneratorReducer,
        weatherReducer,  
  	}),
    {},
    middleware
);
