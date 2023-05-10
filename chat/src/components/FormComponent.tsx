import React, { useState } from "react";
import {
  BTN,
  FormControl,
  FormSection,
  TextArea,
} from "./StyledComponents/StyledComponent";
import { Button, Input, InputProps, TextareaAutosize } from "@mui/base";
import { Controller, useForm } from "react-hook-form";
import { FormWithHookForm } from "./InputForm.Component";
import { TextField } from "@mui/material";

const FormComponent = ({ generateResponse }: any) => {
  const [newQuestion, setNewQuestion] = useState<string>("");

  const { control, reset, handleSubmit } = useForm();

  const btnChangeHandler = (e: any) => {
   // console.log(e);
    generateResponse(newQuestion, setNewQuestion);
    console.log(newQuestion);
  };

  const clickHandler = (data: any) => {
    setNewQuestion(data.Input);
    console.log(data.Input);
    generateResponse(newQuestion, setNewQuestion);
    console.log(newQuestion);
    alert(newQuestion)
  };

  return (
    <>
      <FormControl>
        <form>
          <Controller
            control={control}
            name="Input"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <TextField
                onBlur={onBlur} // notify when input is touched
                onChange={onChange} // send value to hook form
                value={value}
                inputRef={ref}
              />
            )}
          />
          <Button onClick={handleSubmit(clickHandler)}>Send</Button>
        </form>
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
