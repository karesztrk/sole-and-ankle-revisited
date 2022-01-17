import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './components/App';
import GlobalStyles from './components/GlobalStyles';

const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

const theme = {
  queries: {
    phoneAndBelow: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
    tabletAndBelow: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
    laptopAndBelow: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
  }
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
