import React, { useState, useContext, useEffect } from "react";
import { ErrorContext } from "../../../context/error/ErrorContext";
import { SuccessContext } from "../../../context/success/SuccessContext";
import { suggestTrailEdit } from "../../../api/trailsApi";
import TrailLocationInput from "../../scout_trail/TrailLocationInput";
import * as sc from "./StyledEditTrailForm";

const EditTrailForm = ({ trail, showEditForm, setShowEditForm, user }) => {
  const { setError } = useContext(ErrorContext);
  const { setSuccess } = useContext(SuccessContext);
  const [submitted, setSubmitted] = useState(false);

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

  const setLocation = (city, state, lat, lng) => {
    setTrailDetails({ ...trailDetails, city, state, lat, lng });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    const editDetails = { ...trailDetails, trailId: trail.id };

    const suggestedEdit = await suggestTrailEdit(editDetails);
    console.log(suggestedEdit);

    suggestedEdit &&
      setSuccess("Your suggestions have been uploaded for review.");
    suggestedEdit && setShowEditForm(!showEditForm);
  };

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const editDetails = { ...trailDetails, trailId: trail.id };
    // const edit = await EditTrailForm(editDetails);
    // edit && setSuccess("Your changes have been posted successfully.");
    // edit && setShowEditForm(!showEditForm);
  };

  useEffect(() => {
    setTrailDetails({
      name: trail.name,
      city: trail.city,
      state: trail.state,
      lat: trail.lnglat.coordinates[0],
      lng: trail.lnglat.coordinates[1],
      hiking: trail.hiking,
      biking: trail.biking,
      length: trail.length,
      rating: trail.rating,
      description: trail.description,
      difficulty: trail.difficulty,
    });
  }, []);

  return (
    <sc.StyledBlackout>
      <sc.StyledEditTrailFormContainer>
        <sc.StyledForm
          onSubmit={
            user.role === "Admin" ? handleAdminSubmit : handleUserSubmit
          }
        >
          {user.role === "Admin" ? (
            <>
              <h4>Edit Trail</h4>
              <sc.StyledMessage>Update necessary fields</sc.StyledMessage>
            </>
          ) : (
            <>
              <h4> Suggest Edits</h4>
              <sc.StyledMessage>
                Update any field with changes you'd like to see. Your
                suggestions will be reviewed by our team before any changes are
                made.
              </sc.StyledMessage>
            </>
          )}
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
              value={trailDetails.name}
              required
            />
          </sc.StyledFormGroup>

          <sc.StyledFormGroup>
            <label htmlFor="location">
              Location<span title="required">*</span>
            </label>
            <TrailLocationInput trail={trail} setLocation={setLocation} />
          </sc.StyledFormGroup>

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

          <sc.StyledFormGroup>
            <label htmlFor="trail-type">
              Trail Type<span title="required">*</span>
            </label>
            <label className="type">
              <input
                onChange={(e) => {
                  setTrailDetails({
                    ...trailDetails,
                    hiking: e.target.checked && true,
                  });
                }}
                type="checkbox"
                value="Hiking"
                checked={trailDetails.hiking}
              />
              Hiking
            </label>
            <label htmlFor="" className="type">
              <input
                onChange={(e) => {
                  setTrailDetails({
                    ...trailDetails,
                    biking: e.target.checked && true,
                  });
                }}
                type="checkbox"
                value="Biking"
                checked={trailDetails.biking}
              />
              Biking
            </label>
          </sc.StyledFormGroup>

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
              value={trailDetails.length}
              style={{ width: "4rem", fontWeight: "300" }}
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
              defaultValue={trailDetails.description}
              rows={8}
              style={{ resize: "none" }}
              required
            ></textarea>
          </sc.StyledFormGroup>

          <sc.StyledFormGroup>
            <sc.StyledFormButton type="submit" submitButton={true}>
              Submit
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
