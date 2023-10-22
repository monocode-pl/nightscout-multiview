import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

export const LANGUAGES = [
    {
        code: 'pl',
        flag: 'PL'
    },
    {
        code: 'en',
        flag: 'GB'
    }
];

i18next
    .use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translation: require('./i18n/en.json')
            },
            pl: {
                translation: require('./i18n/pl.json')
            }
        }
    })