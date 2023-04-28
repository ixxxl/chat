import React, { useState } from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import AnswerComponent from "./components/AnswerComponent";
import { Configuration, OpenAIApi } from "openai";

function App() {
  const [storedValues, setStoredValues] = useState<any>([]);

  const configuration = new Configuration({
    organization: "org-JbLj3cYfxKIxHNxVNMMvEh2L",
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
    console.log("Response data=======" + response.data.choices[0].text);
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
      <div className="header-section">
        <h1>ChatGPT maib</h1>
        <p></p>
      </div>
      <FormComponent generateResponse={generateResponse} />
      <AnswerComponent storedValues={storedValues} />
    </div>
  );
}

export default App;
