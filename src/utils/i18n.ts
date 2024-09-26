import translationEn from '@/../public/locales/en/translation.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const initI18n = async () => {
  let savedLanguage = (await AsyncStorage.getItem('language')) ?? Localization.getLocales()[0].languageCode;
  const resources = {
    en: { translation: translationEn },
  };

  if (!savedLanguage) {
    savedLanguage = Localization.locale;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',

    resources,
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
