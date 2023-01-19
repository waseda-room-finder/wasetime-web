import React, { useContext, useEffect } from "react";

import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "@app/utils/theme-context";

const RedirectPage = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const timeout = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const redirectToHomeAfter5Sec = async () => {
      if (window.location.search.includes("error_description")) {
        await timeout(5000);
        navigate("/");
      }
    };

    redirectToHomeAfter5Sec().catch((err) => console.error(err));
  }, []);

  return window.location.search.includes("error_description") ? (
    <div className="mt-20 text-center">
      <LoadingSpinner theme={theme} message={t("verify.failed.title")} />
      <br />
      <p className="dark:text-dark-text2">{t("verify.failed.message1")}</p>
      <p className="dark:text-dark-text2">{t("verify.failed.message2")}</p>
      <p className="dark:text-dark-text2">{t("verify.failed.message3")}</p>
    </div>
  ) : (
    <div className="mt-20 text-center">
      <LoadingSpinner theme={theme} message={t("verify.success.title")} />
      <a href="/" className="mb-8 block">
        <span className="text-3xl p-4 border-2 border-light-main rounded text-light-main dark:text-dark-main dark:border-dark-main">
          {t("verify.success.navigateHint")}
        </span>
      </a>
      <p className="dark:text-dark-text2">{t("verify.success.message1")}</p>
      <p className="dark:text-dark-text2">{t("verify.success.message2")}</p>
    </div>
  );
};

export default RedirectPage;
