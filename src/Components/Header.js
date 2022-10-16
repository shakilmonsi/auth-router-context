import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./UserContext";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("context", user);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          company
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="login">
          Login
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="register">
          |Register
        </Link>
        {user?.email && <span>User welcome,{user.email}</span>}
        {
          // add google .;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
          user?.email ? (
            <button onClick={handleSignOut} className="btn btn-sm">
              loge Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-info">log In</button>
            </Link>
          )
        }
        ;
      </div>
    </div>
  );
};

export default Header;
