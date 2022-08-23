// los thunks son acciones que puedo despachar (hacer dispach), 
// pero dichas acciones internamente tienen una tarea asincrona.

import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
import { chekingCredentials, logout, login } from './';

export const checkingAuthentication = ( email, password ) => {
    return async( dispatch ) => {

        dispatch( chekingCredentials() );

    }
}

export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( chekingCredentials() );

        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch ( logout( result.errorMessage ) );

        dispatch ( login( result ) );

    }
}

export const startCreatingUserWithEmailpassword = ({ email, password, displayName }) => {
    return async(dispatch) => {
        
        dispatch( chekingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if ( !ok ) return dispatch( logout({errorMessage}) );

        dispatch ( login( { uid, displayName, email, photoURL } ) );

    }

}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {

        dispatch( chekingCredentials() );
        
        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({ email, password });

        if ( !ok ) return dispatch( logout({errorMessage}) );

        dispatch ( login( { uid, displayName, email, photoURL } ) );

    }

}

export const startLogout = () => {
    return async( dispatch ) => {
       
        await logoutFirebase();

        dispatch( logout() );
    }
}