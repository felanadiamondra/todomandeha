import React from 'react';
import Navigator from './routes/Drawer';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (

      <Navigator />

  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#fff' , 
    alignItems : 'center' , 
    justifyContent : 'center'
  }
})

