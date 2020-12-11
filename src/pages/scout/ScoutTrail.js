import React, { useState, useCallback } from "react";
import { scoutTrail } from "../../api/trailsApi";
import DragDrop from "./DragDrop";
import { FaImage } from "react-icons/fa";
import StarRating from "./StarRating";
import TrailLocationInput from "./TrailLocationInput";

import * as sc from "./StyledScoutForm";

const ScoutTrail = () => {
  // TODOS: progress, clear form or reroute, wire up places autocomplete and get lat and lng from location, save draft, move image upload to own component, maybe move radio button group to own component, handle image size exceeded

  const [trailDetails, setTrailDetails] = useState({
    // userId: 12,
    name: "",
    city: "Waterloo",
    state: "Iowa",
    lat: 42.3456,
    lng: -92.3456,
    hiking: false,
    biking: false,
    length: null,
    rating: null,
    description: "",
    difficulty: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  // const [progress, setProgress] = useState(null);

  const setRating = (val) => {
    setTrailDetails({ ...trailDetails, rating: val });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //make sure at least one box checked before sending to db
    if (isChecked) {
      // TODO: wire up places autocomplete and remove this test data

      // append each key val pair in trailDetails to formData and pass to server
      let formData = new FormData();
      for (const key in trailDetails) {
        formData.append(key, trailDetails[key]);
      }
      formData.append("image", image);
      console.log(trailDetails);
      const submission = await scoutTrail(formData);
      console.log(submission);
      // TODO: handle progress and success
      //TODO: redirect or clear form
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  //TODO: v2 - save draft to user account if click "save draft"
  const handleSave = (e) => {
    e.preventDefault();
  };

  return (
    <sc.StyledFormContainer>
      <h2>Scouted a Trail?</h2>
      <p>Let's get some details</p>
      <sc.StyledHr />

      <sc.StyledForm onSubmit={handleSubmit}>
        {/*  ---Trail Name--- */}

        <sc.StyledFormGroup>
          <label htmlFor="name">
            Trail Name<span title="required">*</span>
          </label>
          <input
            onChange={(e) =>
              setTrailDetails({ ...trailDetails, name: e.target.value })
            }
            type="text"
            name=""
            placeholder='"River Run Trail"'
            required
          />
        </sc.StyledFormGroup>

        {/* ---Trail Rating--- */}

        <sc.StyledFormGroup>
          <label htmlFor="StarRating">
            Rating<span title="required">*</span>
          </label>
          <StarRating rating={trailDetails.rating} setRating={setRating} />
        </sc.StyledFormGroup>

        {/* ---Trail Type--- */}

        <sc.StyledFormGroup>
          <label htmlFor="trail-type">
            Trail Type<span title="required">*</span>
          </label>
          <label className="type">
            <input
              onChange={(e) => {
                setIsChecked(e.target.checked && true);
                setTrailDetails({
                  ...trailDetails,
                  hiking: e.target.checked && true,
                });
              }}
              type="checkbox"
              value="Hiking"
            />{" "}
            Hiking
          </label>
          <label htmlFor="" className="type">
            <input
              onChange={(e) => {
                setIsChecked(e.target.checked && true);
                setTrailDetails({
                  ...trailDetails,
                  biking: e.target.checked && true,
                });
              }}
              type="checkbox"
              value="Biking"
            />{" "}
            Biking
          </label>
        </sc.StyledFormGroup>

        {/* ---Trail Difficulty--- */}

        <sc.StyledFormGroup>
          <label htmlFor="difficulty">
            Difficulty<span title="required">*</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input
              onChange={(e) =>
                setTrailDetails({ ...trailDetails, difficulty: e.target.value })
              }
              type="radio"
              value="Beginner"
              name="difficulty"
              checked={trailDetails.difficulty === "Beginner"}
              required
            />{" "}
            Beginner - <span>flat or little uneven terrain</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input
              onChange={(e) =>
                setTrailDetails({ ...trailDetails, difficulty: e.target.value })
              }
              type="radio"
              value="Intermediate"
              name="difficulty"
              checked={trailDetails.difficulty === "Intermediate"}
            />{" "}
            Intermediate - <span>some incline or uneven terrain</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input
              onChange={(e) =>
                setTrailDetails({ ...trailDetails, difficulty: e.target.value })
              }
              type="radio"
              value="Advanced"
              name="difficulty"
              checked={trailDetails.difficulty === "Advanced"}
            />{" "}
            Advanced - <span>rocky, uneven terrain, steep inclines</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input
              onChange={(e) =>
                setTrailDetails({ ...trailDetails, difficulty: e.target.value })
              }
              type="radio"
              value="Expert"
              name="difficulty"
              checked={trailDetails.difficulty === "Expert"}
            />{" "}
            Expert - <span>very steep or treacherous terrain</span>
          </label>
        </sc.StyledFormGroup>

        {/* ---Length---- */}

        <sc.StyledFormGroup>
          <label htmlFor="length">Length</label>
          <input
            onChange={(e) =>
              setTrailDetails({
                ...trailDetails,
                length: e.target.value,
              })
            }
            type="number"
            name=""
            placeholder="0"
            step="0.1"
            style={{ width: "4rem", fontWeight: "300" }}
          />{" "}
          miles
        </sc.StyledFormGroup>

        {/* ---Trail Description--- */}

        <sc.StyledFormGroup>
          <label htmlFor="description">
            Description<span title="required">*</span>
          </label>
          <textarea
            onChange={(e) =>
              setTrailDetails({
                ...trailDetails,
                description: e.target.value,
              })
            }
            name=""
            rows={7}
            cols={44}
            style={{ resize: "none" }}
            placeholder="Please provide as much detail as possible. It might encourage someone else to choose the same adventure!"
            required
          ></textarea>
        </sc.StyledFormGroup>

        {/* ---Image Upload--- */}

        <sc.StyledFormGroup>
          <label htmlFor="image-upload">Photo</label>
          <sc.StyledUploadContainer>
            <DragDrop
              preview={preview}
              setPreview={setPreview}
              setImage={setImage}
            />
            <sc.StyledImagePreview title="image preview">
              {preview ? (
                <>
                  <span onClick={removeImage} title="remove">
                    &times;
                  </span>
                  <img alt="preview" src={preview} />{" "}
                </>
              ) : (
                <FaImage />
              )}
            </sc.StyledImagePreview>
          </sc.StyledUploadContainer>
        </sc.StyledFormGroup>

        {/* ---Trail Location--- */}

        <sc.StyledFormGroup>
          <label htmlFor="location">
            Trail Location<span title="required">*</span>
          </label>
          <TrailLocationInput required />
        </sc.StyledFormGroup>

        {/* ---Buttons--- */}

        <sc.StyledFormGroup>
          <sc.StyledFormButton type="submit" submitButton={true}>
            Submit Trail
          </sc.StyledFormButton>
          <sc.StyledFormButton onClick={handleSave}>
            Save Draft
          </sc.StyledFormButton>
        </sc.StyledFormGroup>
      </sc.StyledForm>
    </sc.StyledFormContainer>
  );
};

export default ScoutTrail;
