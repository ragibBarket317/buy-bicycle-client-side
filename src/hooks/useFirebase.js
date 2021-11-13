import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../firebase/firebase.intialize";


//Call Firebase Initialization
firebaseInitialize();

// Create Custom Hook
const useFirebase = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // Google Authentication
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    // Email Password Authentication
    const registerUsingEmailPassword = () => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const setUserName = () => {
        setIsLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => { }).finally(() => setIsLoading(false));
    }

    const signInUsingEmailPassword = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }
    const handleNameChange = (e) => {
        setName(e.target.value);
        console.log(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    // State Change Authentication
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    // Log Out Authentication
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        error,
        password,
        setError,
        signInUsingGoogle,
        signInUsingEmailPassword,
        registerUsingEmailPassword,
        setUserName,
        handleNameChange,
        handleEmail,
        handlePassword,
        isLoading,
        logOut,

    }
}

export default useFirebase;