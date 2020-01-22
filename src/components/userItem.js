import React, { Component } from 'react';

import { View, Text, TouchableNativeFeedback } from 'react-native';

export default class components extends Component {
    render() {
        return (
            <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple('blue')} onPress={() => console.log('hii')}>
                <View style={{ flex: 1, padding: 20, backgroundColor: '#6279FC', marginVertical: 10 }}>
                    <Text style={{ letterSpacing: 1, fontFamily: 'monospace', color: '#fff', fontSize: 20, fontWeight: 'bold' }} >{this.props.nome_usuario}</Text>
                    <Text style={{ letterSpacing: 1, fontFamily: 'monospace', color: '#2C2068', fontSize: 15, fontWeight: 'bold' }} >{this.props.numero}</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

function cellPhoneMask(number){
    let mask = '(00)00000-0000'
}