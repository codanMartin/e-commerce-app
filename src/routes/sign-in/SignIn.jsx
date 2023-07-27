import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/SignUpForm";

const SignIn = () => {
  const logGooglePopupUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Signin page</h1>
      <button onClick={logGooglePopupUser}>Singn in with Google Popup</button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
