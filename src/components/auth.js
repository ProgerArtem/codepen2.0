import { auth , googleProvider} from "../config/firebase" ;
import {useState} from "react";
import {createUserWithEmailAndPassword , signInWithPopup ,signOut} from 'firebase/auth'
export const Auth = () =>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    console.log(auth?.currentUser?.photoURL)
    const sighIn = async () => {
        try{
                await createUserWithEmailAndPassword(auth, email, password)
        }
                catch (err){
                    console.error(err);
                } } 
                const signInWithGoogle = async () => {
                    try{
                            await signInWithPopup(auth, googleProvider)
                    }
                            catch (err){
                                console.error(err);
                            } } 
                const logout = async () => {
                    try{
                        await signOut(auth)
                }
                        catch (err){
                            console.error(err);
                        } 

                }
             
    return(
        <div>
            <input placeholder = "Email..."
            onChange={(e) => setEmail(e.target.value)}/>
            <input type = "password" placeholder = "Password..." 
            onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={sighIn}>Sign in</button>
            <button onClick = {signInWithGoogle}>Sign in with google </button>
            <button onClick = {logout}>Logout</button>
        </div>
    )
}
