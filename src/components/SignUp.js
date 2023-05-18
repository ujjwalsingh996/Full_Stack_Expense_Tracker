import React from "react";
import "./SignUp.css"

const SignUp = () => {
  return (
    <React.Fragment>
        <h1 className="header">Sign Up</h1>
      <form className="input" action="/user" method="POST">
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Password</label>
        <input type="password" name="paasword" required />
        <button className="button2" type="submit">Sign Up</button>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
