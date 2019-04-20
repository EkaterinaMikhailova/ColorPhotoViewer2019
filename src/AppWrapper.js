import React from 'react';
import { IntlProvider, addLocaleData} from "react-intl";
import ruLocaleData from "react-intl/locale-data/ru";
import enLocaleData from "react-intl/locale-data/en";
import translations from "./locales";
import App from "./App";

addLocaleData(ruLocaleData);
addLocaleData(enLocaleData);

class AppWrapper extends React.Component {
  render() {
    const locale = window.location.search.replace("?locale=","") || "en" 
    const messages = translations[locale];
    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <App />
      </IntlProvider>
    );
  }
}

export default AppWrapper;