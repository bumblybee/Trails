import React, { useState } from "react";
import { scoutTrail } from "../../api/trailsApi";
import DragDrop from "../../components/upload/DragDrop";
import StarRating from "./StarRating";
import TrailLocationInput from "./TrailLocationInput";
import Progress from "../../components/upload/Progress";
import { FaImage, FaBinoculars } from "react-icons/fa";
import * as sc from "./StyledScoutForm";

const ScoutTrail = () => {
  // TODOS: progress, clear form or reroute, save draft, maybe move radio button group to own component

  const [trailDetails, setTrailDetails] = useState({
    // userId: 1,
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
  const [progress, setProgress] = useState(0);
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

    // Make sure at least one trail type box checked before sending to db

    if (isChecked) {
      let formData = new FormData();

      // Append each key-val pair in trailDetails state
      for (const key in trailDetails) {
        formData.append(key, trailDetails[key]);
      }

      formData.append("image", image);

      // onUploadProgress Event exposed when calling scoutTrail
      const submission = await scoutTrail(formData, (progressEvent) => {
        setProgress(
          Math.round((100 * progressEvent.loaded) / progressEvent.total)
        );
      });

      if (submission) {
        setProgress(0);
      }
      // TODO: handle success confirmation
      // TODO: handle error message
      // TODO: redirect or clear form on success
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
      <h1 style={{ marginBottom: "0.2rem" }}>Add Trail</h1>
      <p>Scouted a new trail? Great! Let's get some details.</p>
      <sc.StyledHr />
      {/* -- Progress Animation--- */}
      // TODO: When upload progress showing, dull background like modal
      {progress > 0 && <Progress progress={progress} />}
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
                setTrailDetails({
                  ...trailDetails,
                  difficulty: e.target.value,
                })
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
                setTrailDetails({
                  ...trailDetails,
                  difficulty: e.target.value,
                })
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
                setTrailDetails({
                  ...trailDetails,
                  difficulty: e.target.value,
                })
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
                setTrailDetails({
                  ...trailDetails,
                  difficulty: e.target.value,
                })
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
            min="0"
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

        {/* ---Image Upload */}

        <sc.StyledFormGroup>
          <label htmlFor="image-upload">Photo</label>
          <sc.StyledUploadContainer>
            <DragDrop
              preview={preview}
              progress={progress}
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

        <sc.StyledFormGroup>
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
          <sc.StyledFormButton onClick={handleSave}>
            Save Draft
          </sc.StyledFormButton>
        </sc.StyledFormGroup>
      </sc.StyledForm>
    </sc.StyledFormContainer>
  );
};

export default ScoutTrail;
