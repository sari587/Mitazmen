import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import MainNavigator from './src/services/navigation/main-navigation';
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <MainNavigator />
    </SafeAreaView>
  )
}
export default App