import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend) // Chargement des fichiers de traduction
  .use(LanguageDetector) // Détection de la langue
  .use(initReactI18next) // Intégration avec React
  .init({
    fallbackLng: 'en', // Langue par défaut si aucune langue détectée
    debug: true,
    interpolation: {
      escapeValue: false, // Pas besoin d'échapper les caractères dans React
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Chemin des fichiers de traduction
    },
  });

export default i18n;
