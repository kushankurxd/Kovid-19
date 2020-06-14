import { useEffect, useState } from "react";

import { connect } from "react-redux";
import * as actionTypes from "../../store/actionTypes";

const navbar = (props) => {
  const [navBarClass, setNavBarClass] = useState([
    "nk-navbar is-light is-sticky",
  ]);

  const [mobileMenu, setMobileMenu] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setNavBarTheme();

    window.onscroll = () => {
      setNavBarTheme();
    };

    setMobileTheme();

    window.onresize = () => {
      setMobileTheme();
    };
  }, [props.darkTheme]);

  const setMobileTheme = () => {
    const width = window.screen.width;
    if (width <= 992) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  const setNavBarTheme = () => {
    const position =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (position === 0) {
      setNavBarClass(["nk-navbar is-light is-sticky"]);
    } else {
      setNavBarClass([
        props.darkTheme
          ? "nk-navbar has-fixed is-sticky bg-dark tc-light"
          : "nk-navbar has-fixed is-light is-sticky",
      ]);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={navBarClass.join(" ")} id="navbar">
      <div className="container">
        <div className="nk-navbar-wrap">
          <div className={["nk-navbar-logo logo"].join(" ")}>
            {" "}
            <a href="/" className="logo-link">
              {" "}
              <img className="logo-dark" src="/logo-dark.png" alt="logo" />{" "}
              <img className="logo-light" src="/logo-white.png" alt="logo" />{" "}
            </a>
          </div>
          <div className={["nk-navbar-toggle d-lg-none"].join(" ")}>
            {" "}
            <a
              className={menuOpen ? "toggle active" : "toggle"}
              data-menu-toggle="navbar-menu"
            >
              <em
                className={["icon-menu icon ni ni-menu"].join(" ")}
                onClick={toggleMenu}
              ></em>
              <em
                className={["icon-close icon ni ni-cross"].join(" ")}
                onClick={toggleMenu}
              ></em>
            </a>
          </div>
          <nav
            className={
              mobileMenu
                ? props.darkTheme
                  ? menuOpen
                    ? "nk-navbar-menu mobile-menu menu-open bg-dark"
                    : "nk-navbar-menu mobile-menu bg-dark"
                  : menuOpen
                  ? "nk-navbar-menu mobile-menu menu-open"
                  : "nk-navbar-menu mobile-menu"
                : "nk-navbar-menu"
            }
            id="navbar-menu"
          >
            <ul className="nk-menu">
              <li className="nk-menu-item" onClick={toggleMenu}>
                <a
                  className={["scrollto nav-link nk-menu-link"].join(" ")}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nk-menu-item" onClick={toggleMenu}>
                <a
                  className={["scrollto nav-link nk-menu-link"].join(" ")}
                  href="#about"
                >
                  About Corona
                </a>
              </li>
              <li className="nk-menu-item" onClick={toggleMenu}>
                <a
                  className={["scrollto nav-link nk-menu-link"].join(" ")}
                  href="#symptoms"
                >
                  Symptoms
                </a>
              </li>
              <li className="nk-menu-item" onClick={toggleMenu}>
                <a
                  className={["scrollto nav-link nk-menu-link"].join(" ")}
                  href="#prevention"
                >
                  Prevention
                </a>
              </li>
              <li className="nk-menu-item" onClick={toggleMenu}>
                <a
                  className={["scrollto nav-link nk-menu-link"].join(" ")}
                  href="#treatment"
                >
                  Treatment
                </a>
              </li>
              <li className="nk-menu-item" onClick={toggleMenu}>
                <a
                  className={["scrollto nav-link nk-menu-link"].join(" ")}
                  href="#faq"
                >
                  FAQ
                </a>
              </li>
              <li className="nk-menu-item" onClick={toggleMenu}>
                <a
                  className={["scrollto nav-link nk-menu-link"].join(" ")}
                  href="#news"
                >
                  News
                </a>
              </li>
              <li className="nk-menu-item" onClick={toggleMenu}>
                <a
                  className="nav-link nk-menu-link nk-menu-toggle"
                  href="#navbar"
                >
                  More
                </a>
                <ul
                  className={
                    props.darkTheme
                      ? "nk-menu-dropdown nk-menu-sub bg-dark"
                      : "nk-menu-dropdown nk-menu-sub"
                  }
                  style={{ display: "block" }}
                >
                  <li className="nk-menu-item" onClick={props.setLightTheme}>
                    <a className="nav-link nk-menu-link" href="#navbar">
                      Light Theme
                    </a>
                  </li>
                  <li className="nk-menu-item" onClick={props.setDarkTheme}>
                    <a className="nav-link nk-menu-link" href="#navbar">
                      Dark Theme
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="nk-menu-btns">
              <li className="nk-menu-item" onClick={toggleMenu}>
                <a
                  href="#protect"
                  className={["btn btn-sm scrollto nav-link"].join(" ")}
                >
                  Do &amp; Don’t
                </a>
              </li>
            </ul>
          </nav>
          {mobileMenu ? (
            menuOpen ? (
              <div className="navbar-overlay"></div>
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkTheme: state.theme.darkTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLightTheme: () => dispatch({ type: actionTypes.SET_LIGHT_THEME }),
    setDarkTheme: () => dispatch({ type: actionTypes.SET_DARK_THEME }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
