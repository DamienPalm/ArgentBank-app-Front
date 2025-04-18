import "../styles/SignInForm.css";

export function SignInForm() {
  return (
    <form className="main__signInContent__form">
      <div className="main__signInContent__form__inputWrapper">
        <label
          htmlFor="username"
          className="main__signInContent__form__inputWrapper__label"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="main__signInContent__form__inputWrapper__input"
        />
      </div>
      <div className="main__signInContent__form__inputWrapper">
        <label
          htmlFor="password"
          className="main__signInContent__form__inputWrapper__label"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="main__signInContent__form__inputWrapper__input"
        />
      </div>
      <div className="main__signInContent__form__inputRemember">
        <input
          type="checkbox"
          id="rememberMe"
          className="main__signInContent__form__inputRemember__input"
        />
        <label
          htmlFor="rememberMe"
          className="main__signInContent__form__inputRemember__label"
        >
          Remember me
        </label>
      </div>
    </form>
  );
}
