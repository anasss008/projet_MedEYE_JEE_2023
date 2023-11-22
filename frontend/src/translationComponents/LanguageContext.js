import React, { useState, createContext, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('english');
  const [translations, setTranslations] = useState({});

  const changeLanguage = (lang) => {
    setLanguage(lang);
    import(`../translation/${lang}Lang.json`)
      .then((translations) => {
        setTranslations(translations.default);
      })
      .catch((error) => {
        console.error('Error loading language file:', error);
      });
  };
  useEffect(() => {
    changeLanguage('english');
  }, []);

  return (
    <LanguageContext.Provider value={{ translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
