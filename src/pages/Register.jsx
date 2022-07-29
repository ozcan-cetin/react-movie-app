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
    e.preventDefault();
    createUser(email, password, navigate)
  }
  return (
    <div className="d-flex justify-content-between row">
      <div className="d-none d-md-block col-6">
        <img src={"https://picsum.photos/700/700"} alt="sample-movie" />
      </div>
      <div className="container col-md-5">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3 gap-4">
            <label htmlFor="first name" className="form-label col-2 me-3">
              First Name
            </label>
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
            <label htmlFor="last name" className="form-label col-2 me-3">
              Last Name
            </label>
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
            <label htmlFor="email" className="form-label col-2 me-3">
              Email
            </label>
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
            <label htmlFor="password" className="form-label col-2 me-3">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn bg-primary text-white col-5 ">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
