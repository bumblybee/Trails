import React, { useState } from "react";
import * as sc from "../../styles/GlobalStyledComponents";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <sc.StyledLoginSignupFormContainer>
      <sc.StyledLoginSignupForm onSubmit={handleSubmit}>
        <div className="form-header">
          <h4>Password Reset</h4>
          <p style={{ marginBottom: "1rem" }}>
            A link to reset your password will be sent to the email address
            provided.
          </p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="password-reset-email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button>Submit</button>
      </sc.StyledLoginSignupForm>
    </sc.StyledLoginSignupFormContainer>
  );
};

export default PasswordResetRequest;
