import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { scoutTrail } from "../../api/trailsApi";
import { ErrorContext } from "../../context/error/ErrorContext";
import { SuccessContext } from "../../context/success/SuccessContext";
import DragDrop from "../../components/upload/DragDrop";
import ScoutFormStarRating from "../../components/rating/ScoutFormStarRating";
import TrailLocationInput from "./TrailLocationInput";
import { FaImage } from "react-icons/fa";
import * as sc from "./StyledScoutForm";

const ScoutTrail = () => {
  // TODOS: v2 save draft, maybe move radio button group to own component
  const history = useHistory();
  const { setError } = useContext(ErrorContext);
  const { setSuccess } = useContext(SuccessContext);
  const [trailDetails, setTrailDetails] = useState({
    name: "",
    city: "",
    state: "",
    lat: null,
    lng: null,
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

  // Star Rating Component
  const setRating = (val) => {
    setTrailDetails({ ...trailDetails, rating: val });
  };

  // Trail Location Input
  const setLocation = (city, state, lat, lng) => {
    setTrailDetails({ ...trailDetails, city, state, lat, lng });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setProgress(0);

    if (!trailDetails.lat) {
      setError("Please select trail's location from the dropdown menu.");
      window.scrollTo(0, 0);
      return;
    }

    // Make sure at least one trail type box checked before sending to db
    if (isChecked) {
      let formData = new FormData();

      // Append each key-val pair in trailDetails state
      for (const key in trailDetails) {
        formData.append(key, trailDetails[key]);
      }

      formData.append("image", image);

      // onUploadProgress event exposed when calling scoutTrail
      const submission = await scoutTrail(formData, (progressEvent) => {
        //TODO: note how I did this before deleting
        // const percent = Math.round(
        //   (100 * progressEvent.loaded) / progressEvent.total
        // );
        // percent < 100 && setProgress(percent);
      });

      if (submission.error) {
        // setProgress(null);
        setError(submission.error);
      } else {
        // setProgress("Complete");

        setSuccess("Trail uploaded successfully!");

        history.replace("/scouted-trails");
      }
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  //TODO: v2 - save draft to user account if click "save draft"
  // const handleSave = (e) => {
  //   e.preventDefault();
  // };

  return (
    <sc.StyledFormContainer>
      <h3>Add Trail</h3>
      <p>Scouted a new trail? Great! Let's get some details.</p>
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
          <ScoutFormStarRating
            rating={trailDetails.rating}
            setRating={setRating}
          />
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
            />
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
            />
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
                setTrailDetails({
                  ...trailDetails,
                  difficulty: e.target.value.toLowerCase(),
                })
              }
              type="radio"
              value="Beginner"
              name="difficulty"
              checked={trailDetails.difficulty === "beginner"}
              required
            />{" "}
            Beginner - <span>flat or little uneven terrain</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input
              onChange={(e) =>
                setTrailDetails({
                  ...trailDetails,
                  difficulty: e.target.value.toLowerCase(),
                })
              }
              type="radio"
              value="Intermediate"
              name="difficulty"
              checked={trailDetails.difficulty === "intermediate"}
            />{" "}
            Intermediate - <span>some incline or uneven terrain</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input
              onChange={(e) =>
                setTrailDetails({
                  ...trailDetails,
                  difficulty: e.target.value.toLowerCase(),
                })
              }
              type="radio"
              value="Advanced"
              name="difficulty"
              checked={trailDetails.difficulty === "advanced"}
            />{" "}
            Advanced - <span>rocky, uneven terrain, steep inclines</span>
          </label>
          <label htmlFor="difficulty" className="difficulty">
            <input
              onChange={(e) =>
                setTrailDetails({
                  ...trailDetails,
                  difficulty: e.target.value.toLowerCase(),
                })
              }
              type="radio"
              value="Expert"
              name="difficulty"
              checked={trailDetails.difficulty === "expert"}
            />{" "}
            Expert - <span>very steep or treacherous terrain</span>
          </label>
        </sc.StyledFormGroup>

        {/* ---Length---- */}

        <sc.StyledFormGroup>
          <label htmlFor="length">Length</label>
          <input
            className="length-input"
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
            min="0"
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
            placeholder="Please provide as much detail as possible. It might encourage someone else to choose the same adventure!"
            required
          ></textarea>
        </sc.StyledFormGroup>

        {/* ---Image Upload */}

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

        {/* ---Location--- */}

        <sc.StyledFormGroup className="location-parent">
          <label htmlFor="location">
            Trail Location<span title="required">*</span>
          </label>
          <TrailLocationInput setLocation={setLocation} />
        </sc.StyledFormGroup>

        {/* ---Buttons--- */}

        <sc.StyledFormGroup>
          <sc.StyledFormButton type="submit" submitButton={true}>
            Submit Trail
          </sc.StyledFormButton>
          {/* <sc.StyledFormButton onClick={handleSave}>
            Save Draft
          </sc.StyledFormButton> */}
        </sc.StyledFormGroup>
      </sc.StyledForm>
    </sc.StyledFormContainer>
  );
};

export default ScoutTrail;
