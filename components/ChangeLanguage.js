import React from 'react';
import { i18n } from '../i18n';

const ChangeLanguage = () => {
  return (
    <div>
      <button type="button" onClick={() => i18n.changeLanguage(i18n.language === 'pt')}>
        PT
      </button>
      <button type="button" onClick={() => i18n.changeLanguage(i18n.language === 'nl')}>
        NL
      </button>
      <button type="button" onClick={() => i18n.changeLanguage(i18n.language === 'en')}>
        EN
      </button>
    </div>
  );
};

export default ChangeLanguage;
