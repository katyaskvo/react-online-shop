import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import {
    auth,
    createUserDocumentFromAuth, 
    signInWithGooglePopup, 
} from '../../utils/firebase/firebase.utils';
import Button from '../../components/button/button.component';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <Button onClick={logGoogleUser}>Sign in with Google Popup</Button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;