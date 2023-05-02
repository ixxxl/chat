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
  font-size: 1rem;
  font-family: "Poppins", sans-serif;
  outline: none;
  background-color: #343536;
  color: #dadadb;
  transition: all 0.5s ease-in-out;
`;

export const BTN = styled.button`
  background: #000000;
  color: #dadadb;
  padding: 20px 0;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const HrLine = styled.hr`
  margin: 70px 0 20px;
  border: 1px solid #343536;
`;

export const AnswerContainer = styled.section`
  overflow: scroll;
  max-height: 500px;
`;
export const AnswerSection = styled.section`
  margin: 30px 0;
  position: relative;
`;

export const AnswerSectionQuestion = styled.section`
  background-color: #ca228c;
  padding: 20px;
`;

export const AnswerSectionAnswer = styled.section`
  background-color: #343536;
  padding: 20px;
`;

export const CopyIcon = styled.div`
  position: absolute;
  background-color: #000000;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: -10px;
  right: -10px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;

export const IconHover = styled.i`
  background-color: #ca228c;
`;


//   .header-section {
//     margin: 30px 0;
//     text-align: center;
//   }

//   .header-section h1 {
//     font-size: 2.7rem;
//     font-weight: 700;
//   }

//   .header-section p {
//     font-size: 1rem;
//     font-weight: 300;
//     margin-top: 10px;
//   }

//   textarea,
//   button {
//     width: 100%;
//     border-radius: 5px;
//     border: none;
//   }

//   .form-control:focus {
//     border-left: 5px solid #ca228c;
//     border-top: 5px solid #ca228c;
//     border-top-left-radius: 0%;
//     border-bottom-left-radius: 0%;
//     border-top-right-radius: 0%;
//   }

//   .btn {
//     background: #000000;
//     color: #dadadb;
//     padding: 20px 0;
//     font-size: 1.2rem;
//     font-weight: 500;
//     cursor: pointer;
//     transition: all 0.5s ease-in-out;
//   }

//   .btn:hover {
//     border-left: 5px solid #ca228c;
//     border-top: 5px solid #ca228c;
//     border-top-left-radius: 0%;
//     border-bottom-left-radius: 0%;
//     border-top-right-radius: 0%;
//   }

