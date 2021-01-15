import React, { useState } from "react";
import * as sc from "./StyledSignup";

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  return (
    <sc.StyledSignupContainer>
      <sc.StyledForm onSubmit={handleSubmit}>
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
          <input
            type="text"
            id="username"
            maxLength="50"
            title="Max characters: 50"
            onChange={(e) =>
              setUserDetails({ ...userDetails, username: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least 8 characters with at least one number and one uppercase and lowercase letter."
            maxLength="50"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
          />
        </div>
        <button>Join TrailScout</button>
      </sc.StyledForm>
    </sc.StyledSignupContainer>
  );
};

export default Signup;
