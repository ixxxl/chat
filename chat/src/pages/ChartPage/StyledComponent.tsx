import ContentCopy from "@mui/icons-material/ContentCopy";
import styled from "styled-components";

export const Header = styled.section`
  margin: 30px 0;
  text-align: center;
`;

export const HeaderSectionH1 = styled.h1`
  font-size: 2.7rem;
  font-weight: 700;
`;
export const HeaderSectionP = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-top: 10px;
`;

export const FormSection = styled.form`
  margin: 30px 0;
`;

export const TextArea = styled.textarea`
  textarea,
  button {
    width: 100%;
    border-radius: 5px;
    border: none;
  }
`;

export const FormControl = styled.form`
  margin-bottom: 20px;
  padding: 20px;
  // font-size: 1rem;
  font-family: "Poppins", sans-serif;
  outline: none;
  background-color: #cfcfcf;
  color: #dadadb;
  transition: all 0.5s ease-in-out;
`;

export const HrLine = styled.hr`
  margin: 70px 0 20px;
  border: 1px solid #343536;
`;

export const AnswerContainer = styled.div`
  // overflow: scroll;
  // max-height: 500px;
  fullwidth: 300px;
  height: 500px;
  overflow-y: scroll;
  padding: 1rem;

  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  // Customize scrollbar
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #e0e0e0;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #9e9e9e;
    border-radius: 5px;

    &:hover {
      background: #777;
    }
  }
`;

export const AnswerSection = styled.section`
  margin: 30px 0;
  position: relative;
`;

export const AnswerSectionQuestion = styled.section`
  background-color: #40c1ac;
  padding: 20px;
`;

export const AnswerSectionAnswer = styled.section`
  background-color: #343536;
  padding: 20px;
`;

export const StyledCopyIcon = styled(
  ContentCopy
)` color: #4f8fff;  font-size: 1.3em; transition: color 0.3s ease; &:hover { color: #8ac9ff;`;

export const ButtonS = styled.button`
  background-color: #6c63ff;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 0.3s;
  &:hover {
    background-color: #4b47fb;
  }
  &:active {
    background-color: #3a36e3;
  }
  &:focus {
    outline: none;
  }
`;
