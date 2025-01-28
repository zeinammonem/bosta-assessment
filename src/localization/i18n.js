import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

const baseUrl = import.meta.env.BASE_URL;

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: `${baseUrl}locales/{{lng}}/{{ns}}.json`,
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;