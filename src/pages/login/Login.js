import React, { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

import { ErrorContext } from "../../context/error/ErrorContext";
import { UserContext } from "../../context/user/UserContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as sc from "../../styles/GlobalStyledComponents";
import { StyledPasswordInput } from "../../styles/GlobalStyledComponents";

const Login = () => {
  const history = useHistory();

  const { setError } = useContext(ErrorContext);
  const { logUserIn } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const passwordRef = useRef();
  const passwordIconRef = useRef();

  const handleShowPassword = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await logUserIn(userDetails);

    if (user.error) {
      setError(user.error);
    } else {
      history.push("/");
    }
  };

  return (
    <sc.StyledUserFormContainer>
      <sc.StyledUserForm onSubmit={handleSubmit}>
        <div className="form-header">
          <h4>Log in to TrailScout</h4>
          <p>Enter the email and password associated with your account.</p>
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
        <StyledPasswordInput className="form-group">
          <label htmlFor="password">Password</label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            value={userDetails.password}
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
          />
          {passwordRef.current && passwordRef.current.type === "password" ? (
            <FaEyeSlash ref={passwordIconRef} onClick={handleShowPassword} />
          ) : (
            <FaEye ref={passwordIconRef} onClick={handleShowPassword} />
          )}
        </StyledPasswordInput>
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
