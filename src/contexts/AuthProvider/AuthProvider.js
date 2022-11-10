import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

     // createUserwithEmail&Password
     const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in 
    const signIn = (email, password) => {
        setLoading(true); // step: 4: set loding state for the not pop up login when user refresh the private page
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with Google 
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Sign out 
    const logOut = () => {
        setLoading(true); 
        return signOut(auth);
    }

    // update user profile information 
    // set the register form value like name, photo, url etc..
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);    
    }

    // user observer for user login state 
    // Get the currently signed-in user
    // so we need use effect
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);
            setLoading(false); // step: 2. set loding state for the not pop up login when user refresh the private page
        });
        
        return () => {
            unsubscribe();
        }

    }, [])


    const authInfo = {
        user, 
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;