import SignUpForm from "../../components/sign-up-form/SignUpForm";
import SignInForm from "../../components/sign-in-form/SignInForm";
import "./Authentication.scss"

const SignIn = () => { 

  return (
    <div className="authentification-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignIn;
