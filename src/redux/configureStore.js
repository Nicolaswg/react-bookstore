import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import booksReducer, { APIbookGet } from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

store.dispatch(APIbookGet());
export default store;
