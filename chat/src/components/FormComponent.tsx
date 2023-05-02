import React, { useState } from "react";
import {
  BTN,
  FormControl,
  FormSection,
  TextArea,
} from "./StyledComponents/StyledComponent";
import { Input, InputProps, TextareaAutosize } from "@mui/base";
import InputComponent from "./InputComponent";

const FormComponent = ({ generateResponse }: any) => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const btnChangeHandler = (e: any) => {
    generateResponse(newQuestion, setNewQuestion);
  };

  return (
    <>
      {/* <div className="form-section"> */}
      <FormControl>
      {/* <InputComponent /> */}
        <textarea
        rows={5}
        placeholder="Întreaba orice..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      ></textarea>
      </FormControl>
      <BTN  onClick={btnChangeHandler}>
        Trimite
      </BTN>
      {/* </div> */}
    </>
  );
};

export default FormComponent;
