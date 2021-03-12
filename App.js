import React from 'react';
import Home from './components/home';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});