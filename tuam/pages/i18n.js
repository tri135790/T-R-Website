import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
import { reactI18nextModule } from "react-i18next";

import Backend from 'i18next-http-backend';
import translationEN from '../public/locales/en/translation.json';
import translationVN from '../public/locales/vn/translation.json';

import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

const Languages = ['en', 'vn'];

const resources = {
  en: {
    translation: translationEN
  },
  vn: {
    translation: translationVN
  }
};


i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  // .use(initReactI18next)
  .use(reactI18nextModule)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    lang: "en",
    backend: {
      crossDomain: true,
    },
    // fallbackLng: 'en',
    lng: 'vn',
    debug: true,
    // whitelist: Languages,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;