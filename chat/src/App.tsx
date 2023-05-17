import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import AnswerComponent from "./components/AnswerComponent";
import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";
import { Header } from "./components/StyledComponents/StyledComponent";
import GlobalStyleComponent from "./components/StyledComponents/GlobalStyleComponent";

import { Comment } from "react-loader-spinner";
import { useQuery } from "@tanstack/react-query";
import { generateResponse1 } from "./services/ApiServices";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const [storedValues, setStoredValues] = useState<any>([]);
  const [isLoading1, setIsLoading] = useState<boolean>(false);
  const queryClient = new QueryClient();
  //////////////////////////////////////////////////////////////
  // const configuration = new Configuration({
  //   organization: process.env.REACT_APP_API_ORGANIZATION,
  //   apiKey: process.env.REACT_APP_API_KEY,
  // });

  // delete configuration.baseOptions.headers["User-Agent"];
  // const openai = new OpenAIApi(configuration);

  // const generateResponse = async (newQuestion: any, setNewQuestion: any) => {
  //   setIsLoading(true);

  //   const chatGptMessages = [
  //     {
  //       role: ChatCompletionRequestMessageRoleEnum.User,
  //       content: !!newQuestion ? newQuestion : "",
  //     },
  //   ];

  //   const response = await openai.createChatCompletion({
  //     messages: chatGptMessages,
  //     model: "gpt-4",
  //   });

  //   if (response.data.choices) {
  //     setStoredValues([
  //       {
  //         question: newQuestion,
  //         answer: response.data.choices[0].message?.content,
  //       },
  //       ...storedValues,
  //     ]);
  //     setIsLoading(false);
  //     setNewQuestion("");
  //   }
  // };
  //////////////////////////////////////////////////////////////////////
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header>
          <GlobalStyleComponent />
          <h1>ChatGPT maib</h1>
          <p>Internal chat</p>
        </Header>
        <FormComponent generateResponse={generateResponse1} />
        {isLoading1 && (
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

      
        {/* <ChatGpt /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
