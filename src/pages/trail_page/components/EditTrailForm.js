import React from "react";
import * as sc from "./StyledEditTrailForm";

const EditTrailForm = ({ trail, showEditForm, setShowEditForm }) => {
  return (
    <sc.StyledEditTrailFormContainer>
      <sc.StyledForm>
        <sc.StyledFormGroup>
          <label htmlFor="name">
            Trail Name<span title="required">*</span>
          </label>
          <input type="text" name="" value={trail.name} required />
        </sc.StyledFormGroup>

        <sc.StyledFormGroup>
          <label htmlFor="location">
            Location<span title="required">*</span>
          </label>
          <input
            type="text"
            name=""
            value={`${trail.city}, ${trail.state}`}
            required
          />
        </sc.StyledFormGroup>

        <sc.StyledFormGroup>
          <label htmlFor="difficulty">
            Difficulty<span title="required">*</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input type="radio" value="Beginner" name="difficulty" required />{" "}
            Beginner - <span>flat or little uneven terrain</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input type="radio" value="Intermediate" name="difficulty" />{" "}
            Intermediate - <span>some incline or uneven terrain</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input type="radio" value="Advanced" name="difficulty" /> Advanced -{" "}
            <span>rocky, uneven terrain, steep inclines</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input type="radio" value="Expert" name="difficulty" /> Expert -{" "}
            <span>very steep or treacherous terrain</span>
          </label>
        </sc.StyledFormGroup>

        <sc.StyledFormGroup>
          <label htmlFor="trail-type">
            Trail Type<span title="required">*</span>
          </label>
          <label className="type">
            <input type="checkbox" value="Hiking" />
            Hiking
          </label>
          <label htmlFor="" className="type">
            <input type="checkbox" value="Biking" />
            Biking
          </label>
        </sc.StyledFormGroup>

        <sc.StyledFormGroup>
          <label htmlFor="length">Length</label>
          <input
            type="number"
            name=""
            placeholder="0"
            step="0.1"
            min="0"
            value={trail.length}
            style={{ width: "4rem", fontWeight: "300" }}
          />{" "}
          miles
        </sc.StyledFormGroup>

        <sc.StyledFormGroup>
          <label htmlFor="description">
            Description<span title="required">*</span>
          </label>
          <textarea
            type="text"
            name=""
            rows={8}
            style={{ resize: "none" }}
            required
          >
            {trail.description}
          </textarea>
        </sc.StyledFormGroup>

        <sc.StyledFormGroup>
          <sc.StyledFormButton type="submit" submitButton={true}>
            Submit Trail
          </sc.StyledFormButton>
          <sc.StyledFormButton onClick={() => setShowEditForm(!showEditForm)}>
            Cancel
          </sc.StyledFormButton>
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <sc.StyledMessage>
            Your suggestions and email address will be shared with our team and
            the original creator for review.
          </sc.StyledMessage>
        </sc.StyledFormGroup>
      </sc.StyledForm>
    </sc.StyledEditTrailFormContainer>
  );
};

export default EditTrailForm;
