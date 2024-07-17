import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locale/en.json"
import arTranslation from "./locale/ar.json"
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      }, ar: {
        translation: arTranslation
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
