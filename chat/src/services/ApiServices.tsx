import {
  ChatCompletionRequestMessageRoleEnum,
  Configuration,
  OpenAIApi,
} from "openai";

const configuration = new Configuration({
  organization: process.env.REACT_APP_API_ORGANIZATION,
  apiKey: process.env.REACT_APP_API_KEY,
});

delete configuration.baseOptions.headers["User-Agent"];
const openai = new OpenAIApi(configuration);

export const generateResponse1 = async (
  newQuestion: any,
  setNewQuestion: any
) => {
  const chatGptMessages = [
    {
      role: ChatCompletionRequestMessageRoleEnum.User,
      content: !!newQuestion ? newQuestion : "",
    },
  ];

  const response = await openai.createChatCompletion({
    messages: chatGptMessages,
    model: "gpt-4",
  });
  
  if (response.data.choices) {
    console.log(response.data.choices);
  
    }
};