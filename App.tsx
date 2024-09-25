import AppNavigation from '@/router/AppNavigation';
import { getPersistor, getStore } from '@/store';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Provider store={getStore()}>
          <PersistGate persistor={getPersistor()} loading={null}>
            <SafeAreaView style={styles.safeArea}>
              <AppNavigation />
            </SafeAreaView>
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
