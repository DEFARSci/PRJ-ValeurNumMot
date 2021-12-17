import React from 'react';
import {StyleSheet, View } from 'react-native';
import { NativeRouter,Routes, Route } from 'react-router-native';
import ValeurMot from './src/ValeurMot';
import Affiche from './src/Affiche';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <ValeurMot />
        <Routes>
          <Route path="/" element={<Affiche />}></Route>
        </Routes>
      </View>
    </NativeRouter>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
