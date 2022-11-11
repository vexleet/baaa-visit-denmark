import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme.js';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import './assets/css/reset.css';
import PreferencesProvider from './context/PreferencesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PreferencesProvider>
        <RouterProvider router={router} />
      </PreferencesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
