import React from "react"

import { Lang, i18nConfig, configAuth } from "wasedatime-ui"
import i18next from "i18next"
import ReactDOM from "react-dom"
import ReactGA from "react-ga"
import { navigateToUrl, registerApplication, start } from "single-spa"
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout"

import "@app/styles/styles.css"
import Nav from "@app/components/frame/Nav"
import translationEN from "@app/constants/locales/en/translation.json"
import translationJA from "@app/constants/locales/jp/translation.json"

import { registerSW } from "virtual:pwa-register"

if (import.meta.env.MODE !== "development" && "serviceWorker" in navigator) {
  registerSW()
}

const routes = constructRoutes(document.querySelector("#single-spa-layout"))
const applications = constructApplications({
  routes,
  // loadApp: ({ name }) => System.import(name),
  loadApp: ({ name }) =>
    import(
      /* @vite-ignore */
      // @ts-ignore
      name
    ),
})
const layoutEngine = constructLayoutEngine({ routes, applications })
applications.forEach(registerApplication)
layoutEngine.activate()
start()

configAuth()

i18nConfig({
  i18n: i18next,
  customTranslations: {
    [Lang.EN]: translationEN,
    [Lang.JA]: translationJA,
  },
})

console.log("==========");
console.log(i18next);
console.log(i18nConfig);
console.log("==========");

ReactGA.initialize(import.meta.env.VITE_GA_ID, {
  debug: false,
  titleCase: false,
})

ReactDOM.render(React.createElement("span"), document.getElementById("loading"))
ReactDOM.render(React.createElement(Nav), document.getElementById("nav"))
;(localStorage.getItem("isFirstAccess") === null ||
  localStorage.getItem("isFirstAccess") === "true") &&
  navigateToUrl("/")
