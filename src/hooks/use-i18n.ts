import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { t, i18n } = useTranslation();

  const isRTL = () => {
    // Add RTL language support if needed in the future
    return false;
  };

  const getCurrentLanguage = () => {
    return i18n.language;
  };

  const getAvailableLanguages = () => {
    return Object.keys(i18n.options.resources || {});
  };

  const formatDate = (date: Date, options?: Intl.DateTimeFormatOptions) => {
    const locale = i18n.language;
    return new Intl.DateTimeFormat(locale, options).format(date);
  };

  const formatNumber = (number: number, options?: Intl.NumberFormatOptions) => {
    const locale = i18n.language;
    return new Intl.NumberFormat(locale, options).format(number);
  };

  const formatCurrency = (amount: number, currency: string = 'USD', options?: Intl.NumberFormatOptions) => {
    const locale = i18n.language;
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      ...options,
    }).format(amount);
  };

  return {
    t,
    i18n,
    isRTL,
    getCurrentLanguage,
    getAvailableLanguages,
    formatDate,
    formatNumber,
    formatCurrency,
  };
};
