import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/global.scss";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
