
import { createContext, useState } from 'react';
import app from '../firebase/firebase.config';

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChange(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, providerLogin, loading }
    return (
        <AuthContext.Provider value={authInfo}>{
            children}</AuthContext.Provider>
    )

}

export default AuthProvider;