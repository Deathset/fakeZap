import React, { Component } from "react"
import { View } from "react-native"
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { createAppContainer, createNavigationContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

export default class TelaInicial extends Component {

    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.input}  placeholder='Nome Usuário' />
                <TextInput style={styles.input} placeholder='Telefone' />

                <TouchableOpacity style={styles.btn} onPress={this._onPressButton} >
                <Text style={{fontSize:19,color:'white'}}>Login</Text>    
                </TouchableOpacity>           
                 
                
            </View>
        )
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
        padding: 15,margin:30,marginTop:40,borderRadius:60,shadowColor:"#fff"        
        
    }
})

