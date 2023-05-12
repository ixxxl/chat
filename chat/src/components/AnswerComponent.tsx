import {
  AnswerContainer,
  AnswerSection,
  AnswerSectionAnswer,
  AnswerSectionQuestion,
  CopyIcon,
  HrLine,
  IconHover,
  StyledCopyIcon,
} from "./StyledComponents/StyledComponent";
import ContentCopy from '@mui/icons-material/ContentCopy';

const AnswerComponent = ({ storedValues }: any) => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <HrLine />
      <AnswerContainer>
        {storedValues.map((value: any, index: number) => {
          return (
            <AnswerSection key={index}>
              <AnswerSectionQuestion>{value.question}</AnswerSectionQuestion>
              <AnswerSectionAnswer>{value.answer}</AnswerSectionAnswer>
              <StyledCopyIcon onClick={() => copyText(value.answer)}>
                <IconHover></IconHover>
              </StyledCopyIcon>
            </AnswerSection>
          );
        })}
      </AnswerContainer>
    </>
  );
};
export default AnswerComponent;
