import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { generateResponse } from "../services/ApiServices";

export const useQuestions = () => {
  const [newQuestion, setNewQuestion] = useState<string>("");
  const [questions, setQuestions] = useState<any[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["questions", newQuestion],
    queryFn: () => generateResponse(newQuestion),
    enabled: newQuestion.length > 0,
  });

  useEffect(() => {
    if (data) {
      setQuestions([data, ...questions]);
    }
  }, [data]);

  const requestAnswer = (question: string): void => {
    setNewQuestion(question);
  };

  return {
    questions,
    requestAnswer,
    isLoading,
    isError,
  };
};
