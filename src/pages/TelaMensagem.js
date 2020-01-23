import React, { Component } from 'react'
import { View,  TextInput, Text, FlatList, Dimensions, TouchableNativeFeedback } from 'react-native'
import socketIoClient from 'socket.io-client'
import service from '../../service'
let { height, width } = Dimensions.get('window')
export default class TelaMensagem extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      msg:[],
      socket: socketIoClient(service.server),
      lastmsg:'',
      userInfo:{}
    }
}
 
  async componentDidMount(){
   await this.setState({userInfo:this.props.navigation.getParam('userInfo')})
    
   console.log(this.state.userInfo._id)

    this.state.socket.on('lastMessager', msg =>{
      this.setState({msg:[...this.state.msg, msg ]})
    })


  } 

  async sendMessager(){
    let msg = {
      sendBy: this.state.userInfo.nome_usuario,
      sender_id:  this.state.userInfo._id,
      recipient_id: this.props.navigation.getParam('_id'),
      body: this.state.lastmsg,
      date: new Date()
    }

    this.state.socket.emit('send', msg)
    this.setState({lastmsg:''})
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('nome_usuario'),
    };
  };

  render() {
    return (
        <View style={{ flex:1 }}>
          <View style={{flex:1, backgroundColor:'#2C2068'}}>
            <FlatList
            data={this.state.msg}
            keyExtractor={(item, index) =>  (Math.random() *2).toString()}
            renderItem={({item, index}) => this.renderItem(item, index, this.state.userInfo)}
            />
          </View>
            <View style={{height: height/9 , flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                <TextInput
                onChangeText={ lastmsg => this.setState({lastmsg})}
                value={this.state.lastmsg}
                style={{flex:1, borderColor:'#000' ,borderWidth:0.2, borderRadius:20, marginHorizontal:5}}
                />
                <TouchableNativeFeedback  onPress={() => this.sendMessager()} >
                  <View style={{backgroundColor:'#667DFF', padding:10, borderRadius:100}}>
                    <Text style={{color:'#fff'}}>Enviar!</Text>
                  </View>
                </TouchableNativeFeedback>
        </View>
    </View>
    )
  }

  renderItem(item, index, {_id}){
    console.log(_id,'aqui')
    if(item.sender_id == _id){
      return(
      <TouchableNativeFeedback>
        <View  style ={{ backgroundColor:'#fff', marginVertical:10, elevation:10, borderRadius:20}}>
        <View style={{padding:10, alignItems:'flex-start'}}>
          <Text style={{color:'red'}}>{item.sendBy}</Text>
          <Text style={{fontSize:16, fontWeight:'bold', textAlign:'auto'}}>{item.body}</Text>
        </View>
        </View>
      </TouchableNativeFeedback>
      )
    }else if(item.sender_id ==  this.props.navigation.getParam('_id')){
      return(
        <TouchableNativeFeedback>
        <View  style ={{ backgroundColor:'#fff', marginVertical:10, elevation:10, borderRadius:20}}>
        <View style={{padding:10, alignItems:'flex-start'}}>
          <Text style={{color:'#20FF0A'}}>{item.sendBy}</Text>
          <Text style={{fontSize:16, fontWeight:'bold', textAlign:'auto'}}>{item.body}</Text>
        </View>
        </View>
      </TouchableNativeFeedback>
      )
    }
  
  }
}


