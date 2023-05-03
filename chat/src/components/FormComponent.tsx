import React, { useState } from "react";
import {
  BTN,
  FormControl,
  FormSection,
  TextArea,
} from "./StyledComponents/StyledComponent";
import { Button, Input, InputProps, TextareaAutosize } from "@mui/base";
import InputComponent from "./InputComponent";

const FormComponent = ({ generateResponse }: any) => {

  const [newQuestion, setNewQuestion] = useState<string>("");
  
  const btnChangeHandler = (e: any) => {
    generateResponse(newQuestion, setNewQuestion);
    console.log(newQuestion)
  };

  return (
    <>
      <FormControl>
        <InputComponent
          placeholder="Întreaba orice..."
          value={newQuestion}
          onChange={(e: any) => setNewQuestion(e.target.value)}
        />
        {/* <textarea
          rows={5}
          placeholder="Întreaba orice..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea> */}
      </FormControl>
      <BTN onClick={btnChangeHandler}>Trimite</BTN>
    </>
  );
};

export default FormComponent;
