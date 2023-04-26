import React from "react";

const FormComponent = () => {
  return (
    <div className="form-section">
      <textarea
       // rows="5"
        className="form-control"
        placeholder="Întreaba orice..."
      ></textarea>
      <button className="btn">Trimite</button>
    </div>
  );
};

export default FormComponent;
