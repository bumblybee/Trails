import React from "react";
import * as sc from "./StyledSignup";

const Signup = () => {
  return (
    <sc.StyledSignupContainer>
      <sc.StyledForm action="">
        <div className="form-header">
          <h2>Join TrailScout</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptates cupiditate!
          </p>
        </div>

        <div className="form-group">
          <sc.StyledHr />

          <label htmlFor="username">Username</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" />
        </div>
        <button>Join TrailScout</button>
      </sc.StyledForm>
    </sc.StyledSignupContainer>
  );
};

export default Signup;
