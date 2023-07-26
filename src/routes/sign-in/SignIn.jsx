import { signInWithGooglePopup, createUserDocFromAuth } from '../../utils/firebase/firebase';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  }

  return (
    <div>
      <h1>Signin page</h1>
      <button onClick={logGoogleUser}>Singn in with Google Popup</button>
    </div>
  )
}

export default SignIn