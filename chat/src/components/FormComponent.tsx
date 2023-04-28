import React, { useState } from "react";

const FormComponent = ({ generateResponse }: any) => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const btnChangeHandler = (e: any) => {
    generateResponse(newQuestion, setNewQuestion);
  };
  return (
    <div className="form-section">
      <textarea
        rows={5}
        className="form-control"
        placeholder="Întreaba orice..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      ></textarea>
      <button className="btn" onClick={btnChangeHandler}>
        Trimite
      </button>
    </div>
  );
};

export default FormComponent;
