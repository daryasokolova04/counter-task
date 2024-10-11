import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  const [count, setCount] = useState(0);
  const [lang, setLang] = useState("en");

  const handleClick = (e) => {
    setLang(e.target.dataset.testid);
    i18n.changeLanguage(e.target.dataset.testid);
  };

  const renderClassName = (option) => {
    return (
      "btn mb-3" + (option === lang ? " btn-primary" : " btn-outline-primary")
    );
  };

  return (
    <>
      <div className="btn-group" role="group">
        <button
          type="button"
          className={renderClassName("en")}
          data-testid="en"
          onClick={handleClick}
        >
          English
        </button>
        <button
          type="button"
          className={renderClassName("ru")}
          data-testid="ru"
          onClick={handleClick}
        >
          Русский
        </button>
      </div>
      <button
        type="button"
        className="btn btn-info mb-3 align-self-center"
        data-testid="counter"
        onClick={() => setCount(count + 1)}
      >
        {t("click", { count })}
      </button>
      <button
        type="button"
        className="btn btn-warning"
        data-testid="reset"
        onClick={() => setCount(0)}
      >
        {t("reset")}
      </button>
    </>
  );
};

export default App;
