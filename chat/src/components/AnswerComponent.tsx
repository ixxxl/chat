import {
  AnswerContainer,
  AnswerSection,
  AnswerSectionAnswer,
  AnswerSectionQuestion,
  HrLine,
  StyledCopyIcon,
} from "./StyledComponents/StyledComponent";

const AnswerComponent = ({ storedValues }: any) => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <HrLine />
      <AnswerContainer>
        {storedValues &&
          storedValues.map((value: any, index: number) => {
            return (
              <AnswerSection key={index}>
                <AnswerSectionQuestion>{value.question}</AnswerSectionQuestion>
                <AnswerSectionAnswer>{value.answer}</AnswerSectionAnswer>
                <StyledCopyIcon
                  onClick={() => copyText(value.answer)}
                ></StyledCopyIcon>
              </AnswerSection>
            );
          })}
      </AnswerContainer>
    </>
  );
};
export default AnswerComponent;
