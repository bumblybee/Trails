import React from "react";
import StarRating from "./StarRating";
import * as sc from "./StyledScoutForm";

const ScoutTrail = () => {
  return (
    <sc.StyledFormContainer>
      <h2>Scouted a Trail?</h2>
      <p>Let's get some details</p>
      <sc.StyledForm>
        <sc.StyledHr />
        <sc.StyledFormGroup>
          <label htmlFor="name">Trail Name*</label>
          <input type="text" name="" id="" />
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="StarRating">Rating*</label>
          <StarRating />
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="trail-type">Trail Type*</label>
          <label className="type">
            <input type="checkbox" value="Hiking" /> Hiking
          </label>
          <label htmlFor="" className="type">
            <input type="checkbox" value="Biking" /> Biking
          </label>
        </sc.StyledFormGroup>
        {/* TODO: Add details about difficulty levels */}
        <sc.StyledFormGroup>
          <label htmlFor="difficulty">Difficulty*</label>
          <label htmlFor="" className="difficulty">
            <input type="radio" value="Beginner" /> Beginner
          </label>
          <label htmlFor="" className="difficulty">
            <input type="radio" value="Intermediate" /> Intermediate
          </label>
          <label htmlFor="" className="difficulty">
            <input type="radio" value="Advanced" /> Advanced
          </label>
          <label htmlFor="" className="difficulty">
            <input type="radio" value="Expert" /> Expert
          </label>
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="length">Length*</label>
          <input
            type="number"
            name=""
            id=""
            step="0.1"
            style={{ width: "3.5rem", fontWeight: "300" }}
          />{" "}
          miles
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="description">Description*</label>
          <textarea
            name=""
            id=""
            rows={7}
            cols={50}
            style={{ resize: "none" }}
            placeholder="Please provide as much detail as possible. It might be the reason someone else chooses the same adventure!"
          ></textarea>
        </sc.StyledFormGroup>
        <label htmlFor="image-upload">Photo</label>
        <sc.StyledFormGroup>
          <h1>image upload area</h1>
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="location">Location*</label>
          <input type="text" name="" id="" />
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <sc.StyledFormButton submitButton={true}>
            Submit Trail
          </sc.StyledFormButton>
          <sc.StyledFormButton>Save for Later</sc.StyledFormButton>
        </sc.StyledFormGroup>
      </sc.StyledForm>
    </sc.StyledFormContainer>
  );
};

export default ScoutTrail;
