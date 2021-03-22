import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { resetPassword } from "../../api/userApi";
import { ErrorContext } from "../../context/error/ErrorContext";
import * as sc from "../../styles/GlobalStyledComponents";

const PasswordReset = () => {
  const { setError } = useContext(ErrorContext);
  const [newPassword, setNewPassword] = useState("");
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = location.pathname.split("/")[2];
    const reset = await resetPassword(token, newPassword);
    console.log(token);
    if (reset.error || !reset) {
      setError(reset.error);
    } else if (reset.data.id) {
      history.push("/login");
    }
  };

  return (
    <sc.StyledUserFormContainer>
      <sc.StyledUserForm onSubmit={handleSubmit}>
        <div className="form-header">
          <h4>Password</h4>
          <p>Enter your new password.</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            type="password"
            id="new-password"
            name="new-password"
            minLength="8"
            maxLength="50"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least 8 characters with at least one number, one uppercase and one lowercase letter."
            required
          ></input>
        </div>
        <button type="submit">Submit</button>
      </sc.StyledUserForm>
    </sc.StyledUserFormContainer>
  );
};

export default PasswordReset;
