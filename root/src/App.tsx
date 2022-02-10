import React, { useEffect, lazy, Suspense } from "react";
import i18next from 'i18next';
import { Helmet } from "react-helmet";
import { Hub } from "@aws-amplify/core";
import { navigateToUrl } from "single-spa";
import { Router, Redirect, navigate } from "@reach/router";

const AboutUs = lazy(() => import("./components/aboutUs/AboutUs"));
const Home = lazy(() => import("./components/Home"));
const Feeds = lazy(() => import("./components/Feeds"));
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RedirectPage from "./components/user/RedirectPage";
import LoadingSpinner from "@bit/wasedatime.core.ts.ui.loading-spinner";

import { useTranslation } from "react-i18next";
import CommonStyle from "./common-style";

import { ErrorBoundary } from "@sentry/react";
import ErrorFallback from "./components/ErrorFallback";

import ReactGA from "react-ga";
import { gaUser } from "./ga/eventCategories";
import {
  gaUserSignIn,
  gaUserSignInFailure,
  gaUserSignOut,
} from "./ga/eventActions";
import { ThemeProvider } from "./utils/themeContext"

const NotFound = ({ default: boolean }) => {
  navigateToUrl("/");
  return <LoadingSpinner message="Not found! Redirecting..." />;
};

const App = () => {
  Hub.listen("auth", ({ payload: { event, data } }) => {
    switch (event) {
      case "signIn":
        ReactGA.event({
          category: gaUser,
          action: gaUserSignIn,
        });
        break;
      case "signOut":
        ReactGA.event({
          category: gaUser,
          action: gaUserSignOut,
        });
        break;
      case "signIn_failure":
        ReactGA.event({
          category: gaUser,
          action: gaUserSignInFailure,
        });
        break;
      case "customOAuthState":
        navigate(data);
        break;
      default:
        break;
    }
  });

  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("wasedatime-lng"));
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>WasedaTime - Home</title>
        <meta
          name="description"
          content="An unofficial app for Syllabus Searching, Classroom Usage Checking, and Shuttle Bus Arrival Time Checking at Waseda University."
        />
        <meta property="og:title" content="WasedaTime - Home" />
        <meta
          property="og:description"
          content="Non-profit, student-run, open-source app aiming to support and improve the campus lives of Waseda University students."
        />
        <meta property="og:site_name" content="WasedaTime - Home" />
      </Helmet>
      <CommonStyle />
      
      <ThemeProvider>
        <ErrorBoundary
          fallback={({ error, componentStack, resetError }) => (
            <ErrorFallback error={error} resetError={resetError} />
          )}
        >
          <Suspense fallback={<LoadingSpinner message={"Loading..."} />}>
            {localStorage.getItem("isFirstAccess") === null ||
            localStorage.getItem("isFirstAccess") === "true" ? (
              <Home path="/" isFirstAccess={true} />
            ) : (
              <Router>
                <TermsOfService path="/terms-of-service" />
                <PrivacyPolicy path="/privacy-policy" />
                <AboutUs path="/aboutus" />
                <RedirectPage path="/verify" />
                <Feeds path="/feeds" />
                <Home path="/home" isFirstAccess={false} />
                <Redirect from="/" to="/courses/timetable" noThrow />
                <Redirect from="/timetable" to="/courses/timetable" noThrow />
                <Redirect from="/syllabus" to="/courses/syllabus" noThrow />
                <NotFound default />
              </Router>
            )}
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
