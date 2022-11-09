import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserInfo = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, providerLogin, loading, logOut,createNewUser,updateUserInfo,userLogin }
    return (
        <AuthContext.Provider value={authInfo}>{
            children}</AuthContext.Provider>
    )

}

export default AuthProvider;