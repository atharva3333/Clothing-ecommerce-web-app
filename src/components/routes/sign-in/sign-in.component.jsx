
import { signInWithGooglePopup , createUserDocumentFromAuth} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up/sign-up-form.component";




const SignIn = () => {
  const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    
    return(
        <div>
            <h1>SignIn</h1>
            <button onClick={logGoogleUser}>SignIn with Google pop</button>
            <SignUpForm/>
            
        </div>
    )
}

export default SignIn;