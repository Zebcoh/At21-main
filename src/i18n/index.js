import { createI18n } from 'vue-i18n'
import nl from './locales/nl.json'
import en from './locales/en.json'

export default createI18n({
  legacy: false,
  locale: 'nl',
  fallbackLocale: 'nl',
  messages: {
    nl,
    en
  }
}) 
