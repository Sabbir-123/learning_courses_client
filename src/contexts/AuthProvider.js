import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
      }
    const updateName = name =>{
        return updateProfile(auth.currentUser, {displayName: name})
    }
    
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser);
    }

    const resetPassword = email => {
        return sendPasswordResetEmail(auth, email)
      }

    const signinGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const signinGitHub=()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const logout =()=>{
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
    signinGoogle,
    signinGitHub,
    signIn,
    resetPassword,
    logout
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