import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Firebase/Firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading , setIsLoading] = useState(true);
    const [authError , setAuthError] =  useState('');
    const [admin , setAdmin] = useState(false);

    const auth = getAuth();
    const registerUser = (email, password ,name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email , displayName:name};
                setUser(newUser);
                saveUser(email , name)
                updateProfile(auth.currentUser,{
                    displayName : name
                })
            })
            .catch((error) => {
                
                setAuthError(error.message) ;
                
            })
            .finally(() => setIsLoading(false));
    }
   

    const loginUser = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError();
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {

                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    useEffect(() =>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user?.email])




    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false))
    }

    const saveUser =(email , displayName) =>{
        const user = {email , displayName};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
           
    }



    return {
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        authError,
        logOut,

    }

}
export default useFirebase;