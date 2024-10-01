import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslation from "./assets/locales/ar.json";
import enTranslation from "./assets/locales/en.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    ar: {
      translation: arTranslation,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already does escaping
  },
});

export default i18n;
