import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { signupUser } from "../../api/userApi";
import { ErrorContext } from "../../context/error/ErrorContext";
import { UserContext } from "../../context/user/UserContext";
import * as sc from "../../styles/GlobalStyledComponents";

const Signup = () => {
  const history = useHistory();
  const { setError } = useContext(ErrorContext);
  const { setUser } = useContext(UserContext);

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signup = await signupUser(userDetails);
    // TODO: handle signup errors
    // TODO: reroute user to account page after creation
    signup && signup.error ? setError(signup.error) : history.push("/");

    signup && setUser(signup.data);
  };

  return (
    <sc.StyledLoginSignupFormContainer>
      <sc.StyledLoginSignupForm onSubmit={handleSubmit}>
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
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
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
        </div>
        <button>Join TrailScout</button>
      </sc.StyledLoginSignupForm>
    </sc.StyledLoginSignupFormContainer>
  );
};

export default Signup;
