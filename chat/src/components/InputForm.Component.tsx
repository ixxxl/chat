import React, { useState } from "react";
import { BTN } from "./StyledComponents/StyledComponent";
import styled from "styled-components";
import { Button, Input, InputProps, TextareaAutosize } from "@mui/base";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "@mui/material";

export const FormWithHookForm = (props: any) => {
  const { control, reset, handleSubmit } = useForm();

  const clickHandler = (data: any) => console.log(data);

  return (
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
      ;<Button onClick={handleSubmit(clickHandler)}>Send</Button>
    </form>
  );
};
