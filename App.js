import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import Router from './src/router'
import 'react-native-gesture-handler';
import { YellowBox } from 'react-native';

console.ignoredYellowBox = ['Remote debugger'];
YellowBox.ignoreWarnings([
  "- 'header: null' will be removed in a future version. Use 'headerShown: false' instead",
  'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);
export default class Main extends Component {
  
  render() {
    return (
      <>
      <StatusBar backgroundColor={'#2C2068'} barStyle='light-content' />
        <Router/>
      </>
    )
  }

}

