import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase";

import FormInput from "../form-input/FormInput";
import Button  from "../button/Button";
import "./SignUpForm.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocFromAuth(user, { displayName: displayName });
      alert("User created successfully");
      resetFormFields();
    } catch (error) {
      console.log("User creation error", error);

      if (error.code === "auth/weak-password") {
        alert("Please enter a stronger password");
      } else if (error.code === "auth/email-already-in-use") {
        alert("There is already a user with this email address");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />

        <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

        <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

        <FormInput label="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
