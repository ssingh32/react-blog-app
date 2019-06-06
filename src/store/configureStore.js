import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import postsReducer from '../reducers/posts';
import { addPost } from '../actions/posts';

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
    id: '123',
    title: 'My First Post' ,
    body: 'Post body',
    timestamp: 42
  };
  const post2 = {
    id: '567',
    title: 'My Second Post' ,
    body: 'Post body of Second Post',
    timestamp: 50
  };

  store.dispatch(addPost(post));
  store.dispatch(addPost(post2));

  return store;
};
