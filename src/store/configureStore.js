import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import postsReducer from '../reducers/posts';
import {addPost} from '../actions/posts';
import {removePost} from '../actions/posts';
import {startSetPost} from '../actions/posts';
import posts from '../tests/fixtures/posts';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      posts: postsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

    const post = {
      id: 1,
      title: 'First Post',
      description: '',
      timestamp: 0
    }

  store.dispatch(addPost(post));
  
  return store;
};
