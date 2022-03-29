import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

let middlewares = applyMiddleware(thunk)

const composeEnhancers = composeWithDevTools({})
middlewares = composeEnhancers(middlewares)

const store = createStore(
    rootReducer, middlewares
)

export default store
