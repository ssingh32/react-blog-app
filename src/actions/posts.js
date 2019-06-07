import uuid from 'uuid';
import database from '../firebase/firebase';

export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    };
};

export const startAddPost = (postData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
          title = '',
          body = '',
          timestamp = 0
        } = postData;
        const post = {title, body, timestamp};
    
        return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
          dispatch(addPost({
            id: ref.key,
            ...post
          }));
        });
      }
}