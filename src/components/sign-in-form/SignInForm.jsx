import { useState } from "react";

import { signInAuthUserWithEmailAndPassword, createUserDocFromAuth,signInWithGooglePopup } from "../../utils/firebase/firebase";

import FormInput from "../form-input/FormInput";
import Button  from "../button/Button";
import "./SignInForm.scss";

const defaultFormFields = {
  email: "",
  password: "",
}; 

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(user);
      resetFormFields()
    } catch (error) {
      console.log("Log in error", error);

      if (error.code === "auth/wrong-password") {
        alert("You have entered an incorrect password")
      } else if (error.code === "auth/user-not-found") {
        alert("Wrong email of inexistent user")
      } else alert (error.code)
      
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account? </h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

        <div className="buttons-container">
        <Button type="submit">Sign In </Button>
        <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
