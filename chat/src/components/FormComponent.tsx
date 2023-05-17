import React, { useEffect, useState } from "react";
import { ButtonS, FormControl } from "./StyledComponents/StyledComponent";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { useQuery } from "react-query";
import AnswerComponent from "./AnswerComponent";
import { Comment } from "react-loader-spinner";

const FormComponent = ({ generateResponse }: any) => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [storedValues, setStoredValues] = useState<any>([]);
  const { control, handleSubmit } = useForm();

  // const btnChangeHandler = (e: any) => {
  //   generateResponse(newQuestion, setNewQuestion);
  //   console.log(newQuestion);
  // };

  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ["questions"],
    queryFn: () => generateResponse(newQuestion, setNewQuestion),
    enabled: false,
  });

  useEffect(() => {
    if (data) {
      console.log("Success Data: ", data);
      setStoredValues([data, ...storedValues]);
    }
  }, [data]);

  const clickHandler = (data: any) => {
    refetch();
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

        {/* <textarea
          rows={5}
          placeholder="Întreaba orice..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea> */}
      </FormControl>

      <ButtonS onClick={handleSubmit(clickHandler)}>Send</ButtonS>
      {/* <BTN onClick={btnChangeHandler}>Trimite</BTN> */}
      <AnswerComponent storedValues={storedValues} />
      {isLoading && (
          <Comment
            visible={true}
            height="80"
            width="80"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="rgb(64, 193, 172)"
          />
        )}
    </>
  );
};

export default FormComponent;
