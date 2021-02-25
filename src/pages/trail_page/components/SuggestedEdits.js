import React, { useState, useEffect } from "react";
import { getEdits } from "../../../api/editApi";

import * as sc from "./StyledSuggestedEdits";

const SuggestedEdits = ({ trail }) => {
  const [suggestedEdits, setSuggestedEdits] = useState([]);

  useEffect(() => {
    const trailId = trail.id;
    getEdits(trailId).then((data) => setSuggestedEdits(data));
  }, []);

  return (
    suggestedEdits.length > 0 && (
      <sc.StyledSuggestedEditsContainer>
        <h4>Open edits for this trail</h4>
        <table>
          <thead>
            {suggestedEdits.map((edit) => (
              <tr className="heading">
                {Object.keys(edit).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {suggestedEdits.map((edit) => (
              <tr>
                {Object.keys(edit).map((key) => (
                  <td> {String(edit[key])} </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </sc.StyledSuggestedEditsContainer>
    )
  );
};

export default SuggestedEdits;
