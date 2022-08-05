import React, { useState } from "react";
import { createUser } from "../auth/firebase";
import { useNavigate } from "react-router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`
    e.preventDefault();
    createUser(email, password, navigate, displayName)
  }
  return (
    <div className="d-flex justify-content-between row">
      <div className="d-none d-md-block col-md-6">
        <img src={"https://picsum.photos/700/700"} className="w-100" alt="sample-movie" />
      </div>
      <div className="col-md-6 mx-auto">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center justify-content-center px-2">
          <div className="input-group mb-3 gap-4">
            {/* <label htmlFor="first name" className="form-label col-2 me-3">
              First Name
            </label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 gap-4">
            {/* <label htmlFor="last name" className="form-label col-2 me-3">
              Last Name
            </label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 gap-4">
            {/* <label htmlFor="email" className="form-label col-2 me-3">
              Email
            </label> */}
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Adress"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group mb-3 gap-4">
            {/* <label htmlFor="password" className="form-label col-2 me-3">
              Password
            </label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary text-white form-control ">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
