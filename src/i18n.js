import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next)
.init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: 'AboutUs',
            part2:'contactUS'
          }
        }
      },
      de: {
        translation: {
          description: {
            part1: 'dit is Over Ons',
            part2:'Neem contact met ons op'
          }
        }
      }
    }
  });

export default i18n;