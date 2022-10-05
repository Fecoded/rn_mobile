import React from 'react';
import {ThemeProvider} from 'styled-components';
import Navigation from './src/infastructure/navigation';
import {theme} from './src/infastructure/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
