import { LanguageCode } from './types';

type TranslatedText = Record<LanguageCode, string>;

type UiCopy = {
  loading: TranslatedText;
  errorGeneric: TranslatedText;
  retry: TranslatedText;
};

export const uiCopy: UiCopy = {
  loading: {
    en: 'Loading…',
    sw: 'Inapakia…',
  },
  errorGeneric: {
    en: 'Something went wrong',
    sw: 'Kuna hitilafu',
  },
  retry: {
    en: 'Try again',
    sw: 'Jaribu tena',
  },
};
