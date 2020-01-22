import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import Router from './src/router'
import 'react-native-gesture-handler';

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

