import React, { useState } from "react";
import { ButtonS, FormControl } from "./StyledComponent";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";

import { useQuestions } from "../../hooks/useQuestions";
import AnswerComponent from "./AnswerComponent";

const FormComponent = () => {
  const [newQuestion, setNewQuestion] = useState<string>("");

  const { control, handleSubmit } = useForm();

  const { questions, requestAnswer, isLoading, isError } = useQuestions();

  const clickHandler = () => {
    requestAnswer(newQuestion);
  };

  return (
    <>
      <FormControl>
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
      </FormControl>
      <ButtonS onClick={handleSubmit(clickHandler)} disabled={isLoading}>
        Send
      </ButtonS>
      <AnswerComponent
        isLoading={isLoading}
        questions={questions}
        isError={isError}
      />
    </>
  );
};

export default FormComponent;
