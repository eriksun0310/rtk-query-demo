import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { postsApi } from "./store/api/apiSlice";


/*
Provider、ApiProvider 是不能共用的
*/ 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>

    {/* <ApiProvider api={postsApi}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ApiProvider> */}
  </>
 
);
