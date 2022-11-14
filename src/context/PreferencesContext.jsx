import { createContext, useContext, useState } from 'react';

const PreferencesContext = createContext({
  selectedPreferences: {
    breakfast: '',
    lunch: [],
    activities: []
  },
  activePage: 1,
  resetPreferences: () => {
    return;
  },
  updatePreference: (key, value) => {
    return;
  },
  updateActivePage: (newPageNumber) => {
    return;
  }
});

export const PreferencesProvider = ({ children }) => {
  const initialState = {
    breakfast: '',
    lunch: [],
    dinner: [],
    activities: []
  };

  const [selectedPreferences, setSelectedPreferences] = useState({ ...initialState });
  const [activePage, setActivePage] = useState(0);

  const updatePreference = (key, value) => {
    setSelectedPreferences((prevState) => ({ ...prevState, [key]: value }));
  };

  const updateActivePage = (newPageNumber) => setActivePage(newPageNumber);

  const resetPreferences = () => setSelectedPreferences({ ...initialState });

  return (
    <PreferencesContext.Provider
      value={{
        selectedPreferences,
        activePage,
        updateActivePage,
        updatePreference,
        resetPreferences
      }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesProvider;

export const usePreferencesContext = () => useContext(PreferencesContext);
