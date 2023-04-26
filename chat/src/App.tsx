import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FormComponent from "./components/FormComponent";
import AnswerComponent from "./components/AnswerComponent";

function App() {
  return (
    <div>
        <div className="header-section">
                <h1>ChatGPT CLONE maib</h1>
                <p>
                   
                </p>
            </div>
      <FormComponent />
      <AnswerComponent />
    </div>
  );
}

export default App;
