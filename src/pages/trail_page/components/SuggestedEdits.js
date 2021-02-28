import React, { useState, useEffect } from "react";
import { getEdits } from "../../../api/editApi";

import * as sc from "./StyledSuggestedEdits";

const SuggestedEdits = ({ trail }) => {
  const [suggestedEdits, setSuggestedEdits] = useState([]);
  const [changes, setChanges] = useState({});

  const handleCheck = (e, key) => {
    setChanges();
  };

  useEffect(() => {
    const trailId = trail.id;
    getEdits(trailId).then((data) => {
      setSuggestedEdits(data);
    });
  }, []);
  console.log(changes);
  return (
    suggestedEdits &&
    suggestedEdits.length > 0 && (
      <sc.StyledSuggestedEditsContainer>
        <h4>Open edits for this trail</h4>
        <p>Select approved changes</p>
        <table>
          <thead>
            <tr className="heading">
              {Object.keys(suggestedEdits[0]).map((key) => (
                <th>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {suggestedEdits.map((edit) => (
              <tr>
                {Object.keys(edit).map((key) => (
                  <td>
                    <input
                      field={key}
                      onChange={(e) => {
                        setChanges({ ...changes, [key]: e.target.value });
                      }}
                      type="checkbox"
                      name=""
                      id=""
                      value={edit[key]}
                    />{" "}
                    {String(edit[key])}
                  </td>
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
