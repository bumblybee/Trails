import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { loginUser } from "../../api/userApi";
import { ErrorContext } from "../../context/error/ErrorContext";
import { UserContext } from "../../context/user/UserContext";
import * as sc from "../../styles/GlobalStyledComponents";

const Login = () => {
  const history = useHistory();
  const { setError } = useContext(ErrorContext);
  const { setUser } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login = await loginUser(userDetails);
    setUser(login.data);

    login && login.error ? setError(login.error) : history.goBack();
  };

  return (
    <sc.StyledUserFormContainer>
      <sc.StyledUserForm onSubmit={handleSubmit}>
        <div className="form-header">
          <h4>Log in to TrailScout</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="form-group">
          <sc.StyledHr />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={userDetails.email}
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
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
          />
        </div>
        <button>Log In</button>
        <div style={{ display: "flex" }}>
          <sc.StyledFormLink to="/reset-password">
            Forgot password
          </sc.StyledFormLink>
          <p style={{ margin: "1rem 0.5rem", color: "#b9c8b8" }}>|</p>
          <sc.StyledFormLink to="/signup">Create account</sc.StyledFormLink>
        </div>
      </sc.StyledUserForm>
    </sc.StyledUserFormContainer>
  );
};

export default Login;
