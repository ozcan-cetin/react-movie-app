import React, { useState } from "react";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(true);
  return (
    <nav className="navbar navbar-expand-lg bg-info gap-2 d-md-flex justify-content-end">
      {currentUser ? (
        <button className="btn btn-primary me-3">Logout</button>
      ) : (
        <>
          <button className="btn btn-primary">Login</button>
          <button className="btn btn-primary me-3">Register</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
