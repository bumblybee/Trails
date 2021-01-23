import React, { useState } from "react";
import { triggerPasswordReset } from "../../api/userApi";
import * as sc from "../../styles/GlobalStyledComponents";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await triggerPasswordReset(email);
    if (!res.error) {
      setSubmitted(true);
    }
  };

  return (
    <sc.StyledLoginSignupFormContainer>
      {!submitted ? (
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
      ) : (
        <sc.StyledLoginSignupForm>
          <div className="form-header">
            <h4>Email Sent!</h4>
          </div>
          <div className="form-header">
            <p>Follow the link in the email to reset your password.</p>
          </div>
        </sc.StyledLoginSignupForm>
      )}
    </sc.StyledLoginSignupFormContainer>
  );
};

export default PasswordResetRequest;
