import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const AuthForm = styled.div`
  width: 100vh;
  height: 88vh;
  background-color: bisque;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AuthFormSubtitle = styled(Typography)`
  && {
    color: rgb(100, 180, 180);
  }
`;

export const AuthForm__Form = styled.form`
  width: 360px;
`;
