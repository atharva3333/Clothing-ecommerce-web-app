
import SignUpForm from "../../sign-up/sign-up-form.component";
import SignInForm from "../../sign-in/sign-in-form.component";

import './authentication.styles.scss';




const Authentication = () => {
//   const logGoogleUser = async () =>{
//         const {user} = await signInWithGooglePopup();
//         const userDocRef = await createUserDocumentFromAuth(user);
//     }

    
    return(
        <div className="authentication-container">
            
            <SignInForm/>
            <SignUpForm/>
            
            
        </div>
    )
}

export default Authentication;