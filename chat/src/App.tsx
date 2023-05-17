import FormComponent from "./components/FormComponent";
import { Header } from "./components/StyledComponents/StyledComponent";
import GlobalStyleComponent from "./components/StyledComponents/GlobalStyleComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import { useQuestions } from "./hooks/useQuestions";
import LoginFormComponent from "./pag/AuthPage/AuthPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Header>
          <LoginFormComponent />
          <GlobalStyleComponent />
          <h1>ChatGPT maib</h1>
          <p>Internal chat</p>
        </Header>
        <FormComponent />
      </QueryClientProvider>
    </div>
  );
}

export default App;
