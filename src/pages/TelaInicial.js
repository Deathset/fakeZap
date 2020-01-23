import React, { Component } from "react"
import { View, Alert } from "react-native"
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { createAppContainer, createNavigationContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import service from '../../service'
import TelaContatos from './TelaContatos'


export default class TelaInicial extends Component {

    dados
    constructor() {
        super()
        this.state = {
            nomeUser: "Nome",
            numero: "Numero",

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white', textAlign: "center" }}>{this.state.nomeUser}</Text>
                <TextInput style={styles.input} placeholder ='Digite o nome' onChangeText={txt => this.setState({ nomeUser: txt })} />
                <TextInput style={styles.input} placeholder = 'Número'  onChangeText={txt => this.setState({ numero: txt })} />

                <TouchableOpacity style={styles.btn} onPress={() => this.getUser()}>
                    <Text style={{ fontSize: 19, color: 'white' }}>Login</Text>
                </TouchableOpacity>


            </View>
        )
    }

    async componentDidMount() {
        //let c = await service.get('/users')
        //console.log(c)
    }

    async getUser() {

     

        let tmp = {
            nome_usuario: this.state.nomeUser,
            numero:this.state.numero
        }

        console.log(tmp)



        let resp = await service.post('/new/user', tmp)

        console.log(resp)

        this.props.navigation.navigate('TelaContatos',{resp})

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#3F2F8F', justifyContent: "center", alignContent: "center"
    },
    input: {
        backgroundColor: '#ffff', borderRadius: 5, marginTop: 30, marginLeft: 30, marginRight: 30
    },
    btn: {

        alignItems: 'center',
        backgroundColor: '#2C2068',
        padding: 15, margin: 30, marginTop: 40, borderRadius: 60, shadowColor: "#fff"

    }
})


