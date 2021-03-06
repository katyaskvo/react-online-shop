import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {SignUpContainer} from './sign-up-form.styles.jsx';

const defaultFormFields = {
     displayName: '',
     email: '',
     password: '',
     confirmPassword: ''
 }

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            createUserDocumentFromAuth(user, { displayName });
            resetFormFields(); 

        } catch (error) {
            alert(`error creating a user, ${error.message}`);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }
    return (
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <h1>Sign Up with you email and passwords</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" inputOptions={{
                    type: 'text',
                    required: true,
                    onChange: handleChange,
                    name: 'displayName',
                    value: displayName
                }}/>
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
                <FormInput label="Confirm Password" inputOptions={{
                    type: 'password',
                    required: true,
                    onChange: handleChange,
                    name: 'confirmPassword',
                    value: confirmPassword
                }}/>
                
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;