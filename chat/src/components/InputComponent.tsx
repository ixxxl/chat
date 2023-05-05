import { TextFieldProps } from "@mui/material";
import { Controller, ControllerProps } from "react-hook-form";

export default function CustomTextField(
  props: Omit<ControllerProps<any>, "render"> & TextFieldProps
) {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => <CustomTextField onChange={onChange} value={value} {...props} />}
    />
  );
}
