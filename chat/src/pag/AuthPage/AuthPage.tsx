import { TextField, Typography } from "@mui/material";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { ButtonS } from "../../components/StyledComponents/StyledComponent";
import { AuthForm, AuthFormSubtitle, AuthForm__Form } from "../styledAuthForm";

interface IFieldsAuth {
  login?: string;
  password?: string;
}

const LoginFormComponent = (props: IFieldsAuth) => {
  const { handleSubmit, reset, control } = useForm<IFieldsAuth>({
    mode: "onBlur",
  });

  const { errors } = useFormState({ control });

  const onSubmit: SubmitHandler<IFieldsAuth> = (data) => {
    let currentUser: string;
    let currentUserPassword: string;
  };

  return (
    <AuthForm>
      <Typography variant="h4" component="h4" className="auth">
        Войдите
      </Typography>
      <AuthFormSubtitle variant="subtitle1">
        Чтобы получить доступ
      </AuthFormSubtitle>
      <AuthForm__Form>
        <Controller
          control={control}
          name="login"
          render={({ field }) => (
            <TextField
              label="login"
              size="small"
              helperText={errors.login && errors.login?.message}
              error={!!errors.login?.message}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              onBlur={field.onBlur}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              label="password"
              type="password"
              size="small"
              sx={{ marginTop: 2 }}
              fullWidth={true}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              error={!!errors.password?.message}
              helperText={errors.password && errors.password?.message}
              onBlur={field.onBlur}
            />
          )}
        />
        <ButtonS type="submit" onClick={handleSubmit(onSubmit)}>
          Logheaza-te
        </ButtonS>
      </AuthForm__Form>
    </AuthForm>
  );
};

export default LoginFormComponent;
