import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import questTheme from 'src/MyDesignSystemLightTheme';
import ProductCard from 'src/components/ProductCard/ProductCard';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={questTheme}>
        <Routes>
          <Route path="/" element={<ProductCard/>} />
        </Routes>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;