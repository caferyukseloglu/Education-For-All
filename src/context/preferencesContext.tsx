import React from 'react';

export type PreferencesContextType = {
  theme: 'light' | 'dark';
  rtl: 'left' | 'right';
  toggleTheme: () => void;
  toggleRTL: () => void;
};

export const PreferencesContext: React.Context<PreferencesContextType> = React.createContext<
  PreferencesContextType
>({
  rtl: 'left',
  theme: 'light',
  toggleTheme: () => {},
  toggleRTL: () => {},
});
