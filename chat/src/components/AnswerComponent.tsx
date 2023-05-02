import {
  AnswerContainer,
  AnswerSection,
  AnswerSectionAnswer,
  AnswerSectionQuestion,
  CopyIcon,
  HrLine,
  IconHover,
} from "./StyledComponents/StyledComponent";

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
              <CopyIcon onClick={() => copyText(value.answer)}>
                <IconHover></IconHover>
              </CopyIcon>
            </AnswerSection>
          );
        })}
      </AnswerContainer>
    </>
  );
};
export default AnswerComponent;
