import React from "react";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./locales/index";
import App from "./App";

const init = () => {
  const i18n = i18next.createInstance();
  i18n.use(initReactI18next).init({
    lng: "en",
    debug: false,
    resources,
  });
  return <App />;
};

export default init;
