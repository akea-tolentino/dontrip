import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { itineraryReducer } from './itinerary';
import sessionReducer, { sessionErrorsReducer } from './session';
import groupsReducer from './groups';
import tripsReducer, { tripErrorsReducer} from './trips';

const rootReducer = combineReducers({
  session: sessionReducer,
  sessionErrors: sessionErrorsReducer,
  trips: tripsReducer,
  tripErrors: tripErrorsReducer,
  groups: groupsReducer,
  itinerary: itineraryReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;