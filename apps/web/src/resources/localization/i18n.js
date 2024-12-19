import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEN from "./en/translation.json";
import translationsFR from "./fr/translation.json";

const resources = {
  fr: { translation: translationsFR },
  en: { translation: translationsEN },
};

const lng = localStorage.getItem("i18nextLng") || "fr";

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;