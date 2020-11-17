import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppearanceProvider} from 'react-native-appearance';

import {Index} from './src/index';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppearanceProvider>
        <Index />
      </AppearanceProvider>
    </SafeAreaProvider>
  );
}
