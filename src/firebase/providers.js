import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async() => {
     

    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // Obtener credenciales
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log({ credentials });

        const { email, photoURL, displayName, uid } = result.user;
        
        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errrorMessage = error.mesagge;
        return {
            ok: false,
            errorCode,
            errrorMessage
        }
    }
} 


export const registerUserWithEmailPassword = async ({email, password, displayName }) => {

    try {
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password );
        const { uid, photoURL } = resp.user;
        // console.log(resp);

        // Actualizar el displayName en Firebase
        await updateProfile(FirebaseAuth.currentUser, {
            displayName
        });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        console.log( error );
        return { ok: false, errorMessage: error.message }
    }

}