import React, {useState, useMemo, useCallback} from 'react'; // Use exact context from import else it will create React for each call because of it's static type
import {Provider as PaperProvider} from 'react-native-paper';
import {I18nManager} from 'react-native';
import {useColorScheme} from 'react-native-appearance';
import {darkColors, defaultColors} from './themes/Theme';
//Navigation
import {RootNavigator} from './rootNavigator';
import {PreferencesContext} from './context/preferencesContext';

export const Index = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<'light' | 'dark'>(
    colorScheme === 'dark' ? 'dark' : 'light',
  );
  const [rtl] = useState<boolean>(I18nManager.isRTL);

  function toggleTheme() {
    setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
  }

  const toggleRTL = useCallback(() => {
    I18nManager.forceRTL(!rtl);
  }, [rtl]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      toggleRTL,
      theme,
      rtl: (rtl ? 'right' : 'left') as 'right' | 'left',
    }),
    [rtl, theme, toggleRTL]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme === 'light' ? defaultColors : darkColors}>
        <RootNavigator />
      </PaperProvider>
    </PreferencesContext.Provider>
  );
};
