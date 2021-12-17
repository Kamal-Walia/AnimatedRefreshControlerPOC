import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppContainer from './src/Navigation';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
