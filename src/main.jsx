import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.jsx";
import store from "./redux/store.js";

import "./index.scss";
import { HashRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </StrictMode>
);
