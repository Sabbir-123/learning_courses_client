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
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
      }
      const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }
    
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser);
    }

    const resetPassword = email => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
      }

    const signinGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signinGitHub=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const logout =()=>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // if(currentUser === null || currentUser.emailVerified){
            //     setUser(currentUser);
            // }
            setUser(currentUser);
            setLoading(false);
        })
    
        return () => {
          unsubscribe()
        }
      }, [])
  const authDetails = {
    user, 
    loading,
    createUser, 
    updateUserProfile, 
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