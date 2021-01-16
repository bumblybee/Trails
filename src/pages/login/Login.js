import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import { ErrorContext } from "../../context/error/ErrorContext";
import * as sc from "../../styles/GlobalStyledComponents";

const Login = () => {
  const history = useHistory();
  const { setError } = useContext(ErrorContext);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await loginUser(userDetails);
    console.log(login);

    login && login.error ? setError(login.error) : history.push("/");
  };

  return (
    <sc.StyledLoginSignupFormContainer>
      <sc.StyledLoginSignupForm onSubmit={handleSubmit}>
        <div className="form-header">
          <h2>Log into TrailScout</h2>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="form-group">
          <sc.StyledHr />
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
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
          />
        </div>
        <button>Log In</button>
      </sc.StyledLoginSignupForm>
    </sc.StyledLoginSignupFormContainer>
  );
};

export default Login;