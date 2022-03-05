import React, { useState, useEffect } from "react";

import API from "@aws-amplify/api";
import Lang from "@bit/wasedatime.core.ts.constants.langs";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";
import i18nConfig from "@bit/wasedatime.core.ts.utils.i18n";
import { configAuth } from "@bit/wasedatime.core.ts.utils.user";
import * as Sentry from "@sentry/react";
import i18next from "i18next";
import throttle from "lodash/throttle";
import ReactGA from "react-ga";
import { Provider } from "react-redux";

import App from "@app/App";
import ErrorFallback from "@app/components/ErrorFallback";
import configureStore from "@app/configureStore";
import translationEN from "@app/constants/locales/en/translation.json";
import translationJA from "@app/constants/locales/ja/translation.json";
import { saveState } from "@app/utils/localforage-global-state";

const config = {
  API: {
    endpoints: [
      {
        name: "wasedatime-dev",
        endpoint: process.env.REACT_APP_API_BASE_URL,
      },
    ],
  },
};
API.configure(config);

configAuth();

if (process.env.NODE_ENV === "production") {
  ReactGA.initialize("UA-112185819-1", { debug: false, titleCase: false });
  Sentry.init({
    dsn: "https://6730c6ebd6784cee8330d59452a33d13@o498993.ingest.sentry.io/5577049",
    environment: process.env.NODE_ENV,
    ignoreErrors: [
      "Network Error",
      "NetworkError",
      "Loading chunk",
      "Timed out",
    ],
  });
} else {
  ReactGA.initialize("UA-112185819-4", { debug: false, titleCase: false });
}

const Root = () => {
  const [reduxStore, setReduxStore] = useState(null);

  useEffect(() => {
    i18nConfig({
      i18n: i18next,
      customTranslations: {
        [Lang.EN]: translationEN,
        [Lang.JA]: translationJA,
      },
    });
    // i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
    if (!reduxStore) {
      storeConfig();
    }
  }, []);

  const storeConfig = async () => {
    const store = await configureStore();

    store.subscribe(
      throttle(() => {
        const state = store.getState();
        saveState(state);
      }, 800)
    );
    setReduxStore(store);
  };

  return reduxStore ? (
    <Sentry.ErrorBoundary
      fallback={({ error, componentStack, resetError }) => (
        <ErrorFallback error={error} resetError={resetError} />
      )}
    >
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </Sentry.ErrorBoundary>
  ) : (
    <LoadingSpinner message="Loading..." />
  );
};

export default Root;
