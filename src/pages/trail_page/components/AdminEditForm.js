import React, { useState } from "react";
import SuggestedEdits from "./SuggestedEdits";
import * as sc from "./StyledEditTrailForm";

const AdminEditForm = ({ trail, showEditForm, setShowEditForm }) => {
  const [changes, setChanges] = useState({});
  const handleAdminSubmit = async (e) => {
    // TODO: Send edit id with submission
    // TODO: coerce true/false to bool
    e.preventDefault();
    // const editDetails = { ...trailDetails, trailId: trail.id };
    // const edit = await editTrail(editDetails);
    // console.log(edit);
    // edit && setSuccess("Your changes have been posted successfully.");
    // edit && setShowEditForm(!showEditForm);
  };
  return (
    <sc.StyledForm onSubmit={handleAdminSubmit}>
      <sc.StyledFormGroup>
        <SuggestedEdits
          trail={trail}
          changes={changes}
          setChanges={setChanges}
        />
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
  );
};

export default AdminEditForm;
