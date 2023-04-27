const AnswerComponent = ({ storedValues }: any) => {
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <hr className="hr-line" />
      <div className="answer-container">
        {storedValues.map((value:any, index:number) => {
          return (
            <div className="answer-section" key={index}>
              <p className="question">{value.question}</p>
              <p className="answer">{value.answer}</p>
              <div className="copy-icon" onClick={() => copyText(value.answer)}>
                <i className="fa-solid fa-copy"></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default AnswerComponent;
