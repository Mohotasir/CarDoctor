import { GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signInWithGithub =()=>{
         setLoading(true)
         return signInWithPopup(auth,gitHubProvider)

    }
    const logOut = ()=>{
        setLoading(true)
        const loggedUser = {email:user?.email};
        axios.post('https://car-doctor-server-12z1vgrph-tahsins-projects-aaa37910.vercel.app/logout' ,loggedUser,{withCredentials :true})
           .then(res=>{
           // console.log(res.data);
           })
        return signOut(auth);
    }
     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            //const userEmail = currentUser?.email || user.email;
            //const loggedUser= { email: userEmail}
            setUser(currentUser);
            setLoading(false);
            if(currentUser){
                const loggedUser = {email:currentUser?.email};
                axios.post('https://car-doctor-server-12z1vgrph-tahsins-projects-aaa37910.vercel.app/jwt' ,loggedUser,{withCredentials :true})
                 .then(res=>{
                    console.log('token response:',res.data);
                 })
            }
            // }else{
            //     axios.post('https://car-doctor-server-12z1vgrph-tahsins-projects-aaa37910.vercel.app/logout' ,loggedUser,{withCredentials :true})
            //      .then(res=>{
            //         console.log(res.data);
            //      })

            // }
        });
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo = {user,loading,createUser,signInUser,signInWithGoogle,signInWithGithub,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;