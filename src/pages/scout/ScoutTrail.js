import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import StarRating from "./StarRating";
import { FaCloudUploadAlt } from "react-icons/fa";
import * as sc from "./StyledScoutForm";

const ScoutTrail = () => {
  const [isChecked, setIsChecked] = useState({ value: [], checked: false });
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(null);

  const onDrop = useCallback((file) => {
    setImage(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: make sure one box is checked and val passed to db on submit
    if (isChecked.checked) {
      console.log(isChecked.value);
      const formData = new FormData();
      formData.append("image", image);
      console.log(image);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
  };

  return (
    <sc.StyledFormContainer>
      <h2>Scouted a Trail?</h2>
      <p>Let's get some details</p>
      <sc.StyledForm enctype="multipart/form-data" onSubmit={handleSubmit}>
        <sc.StyledHr />
        <sc.StyledFormGroup>
          <label htmlFor="name">
            Trail Name<span title="required">*</span>
          </label>
          <input type="text" name="" id="" required />
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="StarRating">
            Rating<span title="required">*</span>
          </label>
          <StarRating required />
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="trail-type">
            Trail Type<span title="required">*</span>
          </label>
          <label className="type">
            <input
              onChange={(e) => {
                setIsChecked({
                  value: [...isChecked.value, e.target.value],
                  checked: true,
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
                setIsChecked({
                  value: [...isChecked.value, e.target.value],
                  checked: true,
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
          <label htmlFor="" className="difficulty">
            <input type="radio" value="Beginner" name="difficulty" required />{" "}
            Beginner
          </label>
          <label htmlFor="" className="difficulty">
            <input type="radio" value="Intermediate" name="difficulty" />{" "}
            Intermediate
          </label>
          <label htmlFor="" className="difficulty">
            <input type="radio" value="Advanced" name="difficulty" /> Advanced
          </label>
          <label htmlFor="" className="difficulty">
            <input type="radio" value="Expert" name="difficulty" /> Expert
          </label>
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="length">
            Length<span title="required">*</span>
          </label>
          <input
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
            name=""
            id=""
            rows={7}
            cols={50}
            style={{ resize: "none" }}
            placeholder="Please provide as much detail as possible. It might be the reason someone else chooses the same adventure!"
            required
          ></textarea>
        </sc.StyledFormGroup>
        <label htmlFor="image-upload">Photo</label>
        <sc.StyledFormGroup>
          <sc.StyledDragDrop {...getRootProps()} isDragActive={isDragActive}>
            <FaCloudUploadAlt />
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop file ...</p>
            ) : (
              <p>Drag 'n drop or click to upload (max 5mb)</p>
            )}
          </sc.StyledDragDrop>
        </sc.StyledFormGroup>
        <sc.StyledFormGroup>
          <label htmlFor="location">
            Trail Location<span title="required">*</span>
          </label>
          <input type="text" name="" id="" required />
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
