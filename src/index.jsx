import React from "react";
import ReactDOM from "react-dom/client";
import init from "./init";
import "bootstrap/dist/css/bootstrap.min.css";

const app = () => {
  // @ts-ignore
  const root = ReactDOM.createRoot(document.getElementById("root"));
  const vdom = init();
  root.render(<React.StrictMode>{vdom}</React.StrictMode>);
};

app();
