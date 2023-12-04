import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Router } from "./router/router";
import { store } from "./redux/index";
import { ErrorModal } from "./components";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorModal />
      <Router />
    </Provider>
  </React.StrictMode>
);
