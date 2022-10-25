import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
      }
    const updateName = name =>{
        return updateProfile(auth.currentUser, {displayName: name})
    }
    
    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser);
    }

    const signinGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
        })
    
        return () => {
          unsubscribe()
        }
      }, [])
  const authDetails = {
    user, 
    createUser, 
    updateName, 
    verifyEmail,
    signinGoogle
}
    return (
        <div>
            <AuthContext.Provider value={authDetails}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;