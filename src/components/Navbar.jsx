import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg bg-info gap-2 d-md-flex justify-content-end">
      {currentUser ? (
        <button className="btn btn-primary me-3">Logout</button>
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
