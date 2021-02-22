import React from "react";
import * as sc from "./StyledEditTrailForm";

const EditTrailForm = ({ trail, showEditForm, setShowEditForm }) => {
  return (
    <sc.StyledBlackout>
      <sc.StyledEditTrailFormContainer>
        <sc.StyledForm>
          <h4>Suggest Edits</h4>
          <sc.StyledMessage>
            Update any field with changes you'd like to see us make. Your
            suggestions and email address will be shared with our team and the
            original creator for review.
          </sc.StyledMessage>

          <sc.StyledHr />
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
              <input
                type="radio"
                value="Beginner"
                name="difficulty"
                checked={trail.difficulty === "beginner"}
                required
              />{" "}
              Beginner - <span>flat or little uneven terrain</span>
            </label>
            <label htmlFor="difficulty" className="difficulty">
              <input
                type="radio"
                value="Intermediate"
                name="difficulty"
                checked={trail.difficulty === "intermediate"}
              />{" "}
              Intermediate - <span>some incline or uneven terrain</span>
            </label>
            <label htmlFor="difficulty" className="difficulty">
              <input
                type="radio"
                value="Advanced"
                name="difficulty"
                checked={trail.difficulty === "advanced"}
              />{" "}
              Advanced - <span>rocky, uneven terrain, steep inclines</span>
            </label>
            <label htmlFor="difficulty" className="difficulty">
              <input
                type="radio"
                value="Expert"
                name="difficulty"
                checked={trail.difficulty === "expert"}
              />{" "}
              Expert - <span>very steep or treacherous terrain</span>
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
        </sc.StyledForm>
      </sc.StyledEditTrailFormContainer>
    </sc.StyledBlackout>
  );
};

export default EditTrailForm;
