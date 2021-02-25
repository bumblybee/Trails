import React, { useEffect, useState } from "react";
import { getEdits } from "../../../api/editApi";

const SuggestedEditsInput = ({ trail }) => {
  const [suggestedEdits, setSuggestedEdits] = useState([]);

  useEffect(() => {
    const trailId = trail.id;
    getEdits(trailId).then((data) => setSuggestedEdits(data));
  }, []);
  console.log(suggestedEdits);
  return (
    suggestedEdits.length > 0 && (
      <div>
        <label htmlFor="suggestedEdit">
          Select id of suggestion being implemented
          <span title="required">*</span>
        </label>
        {suggestedEdits.map((edit) => (
          <label htmlFor="suggestedEdit" className="suggested-edit">
            <input type="radio" value="id" name="suggestionId" required />
            {edit.id}
          </label>
        ))}
      </div>
    )
  );
};

export default SuggestedEditsInput;
