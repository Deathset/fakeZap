import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import UserItem from '../components/userItem'
import service from '../../service'
// import { Container } from './styles';

export default class TelaContatos extends Component {

    constructor(){
        super()
        this.state ={
            users:[]
        }
    }

   async getUsers(){
        let users = await service.get('/users')
        this.setState({users})
    }

    componentDidMount(){
        this.getUsers()
    }

  render() {
    return(
        <View style={{backgroundColor:'#2C2068', flex:1}}>
            <FlatList
            data={this.state.users}
            keyExtractor ={(item, index) => item._id.toString()}
            renderItem ={({item, index}) => <UserItem {...item} />}
            />
        </View>
    );
  }
}
