import { NavLink, Outlet } from "react-router";
import navbarLogo from "../assets/img/argentBankLogo.png";
import "../styles/Layout.css";

export function Layout() {
  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <NavLink
            to="/"
            aria-label="Home"
            className={"header__navbar__link header__navbar__logo"}
          >
            <img
              src={navbarLogo}
              alt="Argent Bank Logo"
              className="header__navbar__logo__image"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </NavLink>
          <NavLink
            to="/sign-in"
            className="header__navbar__link header__navbar__item"
          >
            <i className="fa fa-user-circle"></i>
            Sign in
          </NavLink>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p className="footer__copyright">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}
