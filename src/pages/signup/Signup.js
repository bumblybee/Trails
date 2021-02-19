import React, { useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";

import { ErrorContext } from "../../context/error/ErrorContext";
import { UserContext } from "../../context/user/UserContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { StyledPasswordInput } from "../../styles/GlobalStyledComponents";
import * as sc from "../../styles/GlobalStyledComponents";

const Signup = () => {
  const history = useHistory();
  const { setError } = useContext(ErrorContext);
  const { setUser, signUserUp } = useContext(UserContext);

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [passwordVerify, setPasswordVerify] = useState("");

  const password1Ref = useRef();
  const password2Ref = useRef();

  const passwordIcon1Ref = useRef();
  const passwordIcon2Ref = useRef();

  const handleShowPassword = (reference) => {
    if (reference.current.type === "password") {
      reference.current.type = "text";
    } else {
      reference.current.type = "password";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signup = await signUserUp(userDetails);
    // TODO: handle signup errors
    // TODO: reroute user to account page after creation

    // signup && setUser(signup.data);
    signup && signup.error ? setError(signup.error) : history.push("/");
  };

  return (
    <sc.StyledUserFormContainer>
      <sc.StyledUserForm onSubmit={handleSubmit} origin={"signup"}>
        <div className="form-header">
          <h4>Join TrailScout</h4>
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
            value={userDetails.username}
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
            ref={password1Ref}
            type="password"
            id="password"
            value={userDetails.password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least 8 characters with at least one number, one uppercase and one lowercase letter."
            maxLength="50"
            onChange={(e) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
            required
          />
          {password1Ref.current && password1Ref.current.type === "password" ? (
            <FaEyeSlash
              ref={passwordIcon1Ref}
              onClick={() => handleShowPassword(password1Ref)}
            />
          ) : (
            <FaEye
              ref={passwordIcon1Ref}
              onClick={() => handleShowPassword(password1Ref)}
            />
          )}
        </StyledPasswordInput>
        <StyledPasswordInput className="form-group">
          <label htmlFor="password">Verify Password</label>
          <input
            ref={password2Ref}
            value={passwordVerify}
            type="password"
            id="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least 8 characters with at least one number, one uppercase and one lowercase letter."
            maxLength="50"
            onChange={(e) => setPasswordVerify(e.target.value)}
            required
          />
          {password2Ref.current && password2Ref.current.type === "password" ? (
            <FaEyeSlash
              ref={passwordIcon2Ref}
              onClick={() => handleShowPassword(password2Ref)}
            />
          ) : (
            <FaEye
              ref={passwordIcon2Ref}
              onClick={() => handleShowPassword(password2Ref)}
            />
          )}
        </StyledPasswordInput>
        <button>Join</button>
        <sc.StyledFormLink to="/login">
          I already have an account
        </sc.StyledFormLink>
      </sc.StyledUserForm>
    </sc.StyledUserFormContainer>
  );
};

export default Signup;
