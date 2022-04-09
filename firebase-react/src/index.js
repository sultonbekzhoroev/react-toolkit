import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./context/GeneralAuthContext";
import FirestoreProvider from "./context/GeneralFireStore";
import { BrowserRouter } from "react-router-dom";
import CardProvider from "./context/GeneralCards";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <FirestoreProvider>
      <AuthProvider>
        <CardProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CardProvider>
      </AuthProvider>
    </FirestoreProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
