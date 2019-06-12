import {firebase, googleAuthProvider, githubProvider} from '../firebase/firebase.js';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startGitHubLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(githubProvider);
    }
}

export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}