import React, { useState, useCallback } from "react";
import { scoutTrail } from "../../api/trailsApi";
import { useDropzone } from "react-dropzone";
import StarRating from "./StarRating";
import { FaCloudUploadAlt, FaImage } from "react-icons/fa";
import * as sc from "./StyledScoutForm";

const ScoutTrail = () => {
  const [trailDetails, setTrailDetails] = useState({
    userId: 1,
    name: "",
    city: "",
    state: "",
    lat: "",
    lng: "",
    hiking: false,
    biking: false,
    length: null,
    rating: null,
    description: "",
    difficulty: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  // isChecked used to be sure a trail type is checked before submitting because can't set required on checkbox itself
  const [isChecked, setIsChecked] = useState(false);
  // const [progress, setProgress] = useState(null);

  //function to set star rating in StarRating component and pass up to parent state
  const setRating = (val) => {
    setTrailDetails({ ...trailDetails, rating: val });
  };

  const onDrop = useCallback((files) => {
    let reader = new FileReader();
    let url = reader.readAsDataURL(files[0]);
    setImage(files[0]);
    reader.onloadend = () => setPreview(reader.result);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    //make sure at least one box checked before sending to db
    if (isChecked) {
      // TODO: wire up places autocomplete and remove this test data
      setTrailDetails({
        ...trailDetails,
        city: "waterloo",
        state: "Iowa",
        lat: 42.3456,
        lng: -92.3456,
      });

      // append each key val pair in trailDetails to formData and pass to server
      let formData = new FormData();
      for (const key in trailDetails) {
        formData.append(key, trailDetails[key]);
      }
      formData.append("image", image);
      console.log(trailDetails);
      // const submission = await scoutTrail(formData);
      // TODO: handle progress and success
      //TODO: redirect or clear form
    }
  };

  //TODO: v2 - save draft to user account if click "save draft"
  const handleSave = (e) => {
    e.preventDefault();
  };

  return (
    <sc.StyledFormContainer>
      <h2>Scouted a Trail?</h2>
      <p>Let's get some details</p>
      <sc.StyledForm onSubmit={handleSubmit}>
        <sc.StyledHr />
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
            id=""
            required
          />
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="StarRating">
            Rating<span title="required">*</span>
          </label>
          <StarRating rating={trailDetails.rating} setRating={setRating} />
        </sc.StyledFormGroup>
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
        {/* TODO: Add details about difficulty levels */}
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
            Expert -{" "}
            <span>
              very steep or treacherous, only for most experienced trailgoers
            </span>
          </label>
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="length">
            Length<span title="required">*</span>
          </label>
          <input
            onChange={(e) =>
              setTrailDetails({
                ...trailDetails,
                length: e.target.value,
              })
            }
            type="number"
            name=""
            id=""
            step="0.1"
            style={{ width: "4rem", fontWeight: "300" }}
            required
          />{" "}
          miles
        </sc.StyledFormGroup>
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
            id=""
            rows={7}
            cols={51}
            style={{ resize: "none" }}
            placeholder="Please provide as much detail as possible. It might be the reason someone else chooses the same adventure!"
            required
          ></textarea>
        </sc.StyledFormGroup>
        <label htmlFor="image-upload">Photo</label>
        <sc.StyledFormGroup>
          <sc.StyledUploadContainer>
            <sc.StyledDragDrop {...getRootProps()} isDragActive={isDragActive}>
              {/* TODO: add image preview and progress */}
              <FaCloudUploadAlt />
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop file ...</p>
              ) : (
                <p>Drag 'n drop or click to upload (max 5mb)</p>
              )}
            </sc.StyledDragDrop>
            <sc.StyledImagePreview>
              {preview ? <img alt="preview" src={preview} /> : <FaImage />}
            </sc.StyledImagePreview>
          </sc.StyledUploadContainer>
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="location">
            Trail Location<span title="required">*</span>
          </label>
          <input
            // onChange={(e) =>
            //   setTrailDetails({
            //     ...trailDetails,
            //     city: e.target.value,
            //     state: e.target.value
            //   })
            // }
            type="text"
            name="location"
            id=""
            required
          />
        </sc.StyledFormGroup>
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
