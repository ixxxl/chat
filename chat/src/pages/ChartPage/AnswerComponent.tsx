import { Comment } from "react-loader-spinner";
import {
  AnswerContainer,
  AnswerSection,
  AnswerSectionAnswer,
  AnswerSectionQuestion,
  HrLine,
  StyledCopyIcon,
} from "./StyledComponent";

const AnswerComponent = ({ questions, isLoading, isError }: any) => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <HrLine />
      <AnswerContainer>
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
        {questions.map((value: any, index: number) => {
          return (
            <AnswerSection key={index}>
              {isError && <pre>{isError}</pre>}
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
