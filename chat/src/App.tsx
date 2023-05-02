import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import AnswerComponent from "./components/AnswerComponent";
import { Configuration, OpenAIApi } from "openai";
import { Header } from "./components/StyledComponents/StyledComponent";
import GlobalStyleComponent from "./components/StyledComponents/GlobalStyleComponent";

function App() {
  const [storedValues, setStoredValues] = useState<any>([]);

  const configuration = new Configuration({
    organization: process.env.REACT_APP_API_ORGANIZATION,
    apiKey: process.env.REACT_APP_API_KEY,
  });

  delete configuration.baseOptions.headers["User-Agent"];
  const openai = new OpenAIApi(configuration);

  const generateResponse = async (newQuestion: any, setNewQuestion: any) => {
    let options = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/"],
    };

    let completeOptions = {
      ...options,
      prompt: newQuestion,
    };

    const response = await openai.createCompletion(completeOptions);
    console.log("Response data=====" + response.data.choices[0].text);
    if (response.data.choices) {
      setStoredValues([
        {
          question: newQuestion,
          answer: response.data.choices[0].text,
        },
        ...storedValues,
      ]);
      setNewQuestion("");
    }
  };

  return (
    <div>
      <Header>
        <GlobalStyleComponent />
        <h1>ChatGPT maib</h1>
        <p>Internal chat</p>
      </Header>
      <FormComponent generateResponse={generateResponse} />
      <AnswerComponent storedValues={storedValues} />
    </div>
  );
}

export default App;
