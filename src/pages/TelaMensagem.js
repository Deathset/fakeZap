import React, { Component } from 'react'
import { View, ScrollView, TextInput, Button, Text, Dimensions, SafeAreaView, FlatList } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import socketIoClient from 'socket.io-client'
import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer, createNavigationContainer } from 'react-navigation';

//import service from './service'
export default class TelaMensagem extends Component {

  constructor(props){
    super(props)
    this.state ={
      msg:'',
      //socket: socketIoClient(service.server)
    }


  }

 
  componentDidMount(){

     /*
     this.state.socket.emit('lastMessagers')

     this.state.socket.on('newMenssages', msg => {
       console.log(msg)
     })*/

  } 

  getMessager(){
    
  }

  async sendMessager(){
    /*let resp = await service.post('/send',this.state.msg);
    this.state.socket.emit('send', this.state.msg)
    this.setState({msg:''})*/
  }

  render() {
    return (
        <View style={{ flex:1 }}>
          <View style={{flex:1, backgroundColor:'green'}}>
            <FlatList/>
          </View>
            <View style={{flex:0.13, flexDirection:'row', alignItems:'center'}}>
                <TextInput
                onChangeText={ msg => this.setState({msg})}
                value={this.state.msg}
                style={{flex:1, borderColor:'#000' ,borderWidth:0.2, borderRadius:20, marginHorizontal:5}}
                />
                <Button
                onPress={() => { this.sendMessager()}}
                title={'send'}
                />
        </View>
    </View>
    )
  }

}


