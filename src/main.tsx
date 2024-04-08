import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FormProvider } from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FormProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FormProvider>
);
