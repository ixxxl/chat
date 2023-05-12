import React, { useState } from "react";
import {
  ButtonS,
  FormControl,
  FormSection,
  TextArea,
} from "./StyledComponents/StyledComponent";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const FormComponent = ({ generateResponse }: any) => {
  const [newQuestion, setNewQuestion] = useState<string>("");

  const { control, handleSubmit } = useForm();

  // const btnChangeHandler = (e: any) => {
  //   generateResponse(newQuestion, setNewQuestion);
  //   console.log(newQuestion);
  // };

  const clickHandler = (data: any) => {
    generateResponse(newQuestion, setNewQuestion);

    console.log(newQuestion);
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
                fullWidth
                placeholder="Întreabă orice"
                rows={3}
                multiline
                onBlur={onBlur} // notify when input is touched
                onChange={(event) => {
                  setNewQuestion(event.target.value);
                }} // send value to hook form
                value={newQuestion}
                inputRef={ref}
              />
            )}
          />
        </form>
        {/* <textarea
          rows={5}
          placeholder="Întreaba orice..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea> */}
      </FormControl>

      <ButtonS onClick={handleSubmit(clickHandler)}>Send</ButtonS>
      {/* <BTN onClick={btnChangeHandler}>Trimite</BTN> */}
    </>
  );
};

export default FormComponent;
