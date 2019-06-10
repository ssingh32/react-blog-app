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

export const editPost = (id, updates) => {
  return {
    type: 'EDIT_POST',
    id,
    updates
  }
}

export const startEditPost = (id, editedData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/posts/${id}`).update(editedData).then(() => {
        dispatch(editPost(id, editedData));
    })
  };
}

export const setPost = (posts) => {
  return {
    type: 'SET_POST',
    posts
  }
}

export const startSetPost = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/posts`).once('value').then((snapshot) => {
        const posts = [];

        snapshot.forEach((childSnapshot) => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setPost(posts));
    })
  };
}