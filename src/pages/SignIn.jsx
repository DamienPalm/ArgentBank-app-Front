import { NavLink } from "react-router";
import { SignInForm } from "../components/SignInForm";
import "../styles/SignIn.css";

export function SignIn() {
  return (
    <main className="main bgDark">
      <section className="main__signInContent">
        <i className="fa fa-user-circle main__signInContent__icon"></i>
        <h1 className="main__signInContent__title">Sign In</h1>
        <SignInForm />
        <NavLink
          to={"/userPage"}
          className={"main__signInContent__signInButton"}
        >
          Sign in
        </NavLink>
      </section>
    </main>
  );
}
