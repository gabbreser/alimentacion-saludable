import React from "react";
import { createRoot } from "react-dom/client";
import "./fonts/Livvic/Livvic-Black.ttf";
import "./fonts/Livvic/Livvic-Bold.ttf";
import "./fonts/Livvic/Livvic-Medium.ttf";
import "./fonts/Livvic/Livvic-Regular.ttf";
import "./fonts/Livvic/Livvic-SemiBold.ttf";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
