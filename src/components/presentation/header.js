import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import { connect } from "react-redux";
import * as authActions from "../../actions/authActions";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from "react-redux";

const Header = (props) => {
  const auth = useSelector((state) => state.firebase.auth);
  const handleLogOut = () => {
    props.signOut();
  };
  console.log(props);
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="holder-logo">
          <img className="logo" src={logo}></img>
        </a>
        <div className="header-links full-height">
          <ul id="nav-mid">
            <li>
              <NavLink className="btn-nvt-gm" to="/resume-templates">
                Resume Templates
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(authActions.signout())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
