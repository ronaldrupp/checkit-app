import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from '../translations';

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages,
});



