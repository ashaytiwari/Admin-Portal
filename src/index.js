import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/fontFamilies/Lato-Black_0.ttf";
import "./assets/fontFamilies/Lato-Bold_0.ttf";
import "./assets/fontFamilies/Lato-Light_0.ttf";
import "./assets/fontFamilies/Lato-Regular_0.ttf";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
