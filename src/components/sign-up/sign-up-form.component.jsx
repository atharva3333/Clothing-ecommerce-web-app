import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import {SignUpContainer} from './sign-up-form.styles';


import Button from "../button/button.component";

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formFields;

   
    

    console.log('hit');

    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not match")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
            

        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert("Email is already in use");
            }
            else {
                console.log(error);
            }

        }



    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <SignUpContainer>
        <h2>Don't have an account?</h2>
            <span>Sign up with Email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Display Name" type='text' required onChange={handleChange} name="displayName" value={displayName}/>
               
               
                <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email} />
                
                <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password} />
                
                <FormInput label="Confirm Password" type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button  type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;