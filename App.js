import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimaryNav from "./app/screens/primaryNav";
import { Font } from 'expo';

export default class App extends React.Component {


  componentDidMount() {
    Font.loadAsync({
      'futur': require('./assets/fonts/futur.ttf'),
    });
  }

  render() {
    return (
      <PrimaryNav/>
    );
  }
}

