import React from "react";
import StarRating from "./StarRating";

const ScoutTrail = () => {
  return (
    <div
      style={{
        width: "60%",
        margin: "2rem auto",
        padding: "2rem",
        boxShadow: "0 0 4px rgba(0,0,0, 0.2",
        borderRadius: "6px",
      }}
    >
      <h1>Scouted a Trail?</h1>
      <form>
        <hr style={{ margin: "2rem 0" }} />
        <div className="form-group">
          <label htmlFor="name">Trail Name*</label>
          <input type="text" name="" id="" />
        </div>
        <div className="form-group">
          <label htmlFor="StarRating">Rating*</label>
          <StarRating />
        </div>
        <div className="form-group">
          <label htmlFor="trail-type">Trail Type*</label>
          <input type="radio" value="Hiking" /> Hiking
          <input type="radio" value="Biking" /> Biking
          <input type="radio" value="Both" /> Both
        </div>
        {/* TODO: Add details about difficulty levels */}
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty*</label>
          <input type="radio" value="Beginner" /> Beginner
          <input type="radio" value="Intermediate" /> Intermediate
          <input type="radio" value="Advanced" /> Advanced
          <input type="radio" value="Expert" /> Expert
        </div>
        <div className="form-group">
          <label htmlFor="length">Length*</label>
          <input type="number" name="" id="" /> miles
        </div>
        <div className="form-group">
          <label htmlFor="description">Description*</label>
          <textarea
            name=""
            id=""
            rows={7}
            cols={50}
            style={{ resize: "none" }}
            placeholder="Please provide as much detail as possible. It might be the reason someone else chooses the same adventure!"
          ></textarea>
        </div>
        <label htmlFor="image-upload">Photo</label>
        <div
          className="form-group"
          style={{ border: "1px solid black", width: "561px" }}
        >
          <h1>image upload area</h1>
        </div>
        <div className="form-group">
          <label htmlFor="location">Location*</label>
          <input type="text" name="" id="" />
        </div>
        <div className="form-group">
          <button>Submit Trail</button>
          <button>Save for Later</button>
        </div>
      </form>
    </div>
  );
};

export default ScoutTrail;
