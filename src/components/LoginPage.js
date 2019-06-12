import React from 'react';
import {connect} from 'react-redux';
import { startLogin , startGitHubLogin} from '../actions/auth';

export const LoginPage = ({ startLogin, startGitHubLogin }) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1>Blog App</h1>
                <p>Blog, Blog, Blog, Bloogggsss.</p>
                <button className="button" onClick={startLogin}>Login With Google</button>
                <button className="button" onClick={startGitHubLogin}>Login With Github</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startGitHubLogin: () => dispatch(startGitHubLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);