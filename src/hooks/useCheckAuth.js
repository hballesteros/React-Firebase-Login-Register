import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';

export const useCheckAuth = () => {
 
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged( FirebaseAuth, async( user) =>{
            // Si no hay ningun usuario llamo al logout
            if ( !user ) return dispatch( logout() );
            // si tengo un usuario
            const { uid, email, displayName, photoURL } = user;
            dispatch( login({ uid, email, displayName, photoURL }));
        });
    
    }, []);

    return {
        status
    }

}
