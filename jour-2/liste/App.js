
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import List from "./components/List"

export default function App() {
  console.log(List)
  return (
    
     
     <List/>
   
  
     
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
