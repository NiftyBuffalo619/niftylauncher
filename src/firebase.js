import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider , signInWithPopup } from "firebase/auth";
import ShowProfile from "./components/ShowProfile";

/*import * as dotenv from "dotenv";
dotenv.config();*/

//const API_KEY = process.env.NODE_ENV;


const firebaseConfig = {
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth , provider).then((result) => {
        const username = result.user.displayName;
        const profile_picture = result.user.photoURL;
        localStorage.setItem("name", username);
        localStorage.setItem("profile_picture" , profile_picture);
        ShowProfile(username , profile_picture);
    }).catch((err) => {
       console.error(err);
    });
}