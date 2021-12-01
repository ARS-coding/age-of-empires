import { StrictMode } from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import reduxStore from "./redux/store";

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";

render(
  <StrictMode>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
