import React, { useContext, useState } from "react";
import {useNavigate} from "react-router-dom"
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  // const [currentUser, setCurrentUser] = useState(false);
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg bg-info gap-2 d-md-flex justify-content-end mb-1">
      {currentUser ? (
        <>
        <h5>{currentUser.displayName}</h5>
        <button className="btn btn-primary me-3" onClick={()=>logOut()}>Logout</button>
        </>
      ) : (
        <>
          <button className="btn btn-primary" onClick={()=>navigate("/login")}>Login</button>
          <button className="btn btn-primary me-3" onClick={()=>navigate("/register")}>Register</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
