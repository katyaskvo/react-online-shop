import { useState } from "react";
import { 
    signInWithGooglePopup, 
    signInUserWithEmailAndPassword 
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignInContainer, ButtonsWrapper } from './sign-in.styles.jsx';

const defaultFormFields = {
     email: '',
     password: '',
 };

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInUserWithEmailAndPassword(
                email, 
                password
            );
            resetFormFields(); 
            
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break
                case 'auth/user-not-found':
                    alert('no user found associated with this email');
                    break
                default: 
                    alert(error.message)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    return (
        <SignInContainer>
            <h2>Already have an account</h2>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" inputOptions={{
                    type: 'email',
                    required: true,
                    onChange: handleChange,
                    name: 'email',
                    value: email
                }}/>
                <FormInput label="Password" inputOptions={{
                    type: 'password',
                    required: true,
                    onChange: handleChange,
                    name: 'password',
                    value: password
                }}/>
                <ButtonsWrapper>
                    <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.blue} onClick={signInWithGoogle} type="button">Google Sign In</Button>
                </ButtonsWrapper>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;