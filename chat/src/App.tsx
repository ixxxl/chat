import FormComponent from "./pages/ChartPage/FormComponent";
import { Header } from "./pages/ChartPage/StyledComponent";
import GlobalStyleComponent from "./pages/ChartPage/GlobalStyleComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import { useQuestions } from "./hooks/useQuestions";
import LoginFormComponent from "./pages/AuthPage/AuthPage";


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
