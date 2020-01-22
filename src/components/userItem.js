import React, { Component } from 'react';

import { View, Text, TouchableNativeFeedback } from 'react-native';
import StringMask from 'string-mask'


export default class components extends Component {
    render() {

        let formarter = new StringMask('(00)00000-0000')

        return (
            <TouchableNativeFeedback  background={TouchableNativeFeedback.Ripple('blue')} onPress={() => this.props.handlePress()}>
                <View style={{ flex: 1, padding: 20, backgroundColor: '#6279FC', marginVertical: 10 }}>
                    <Text style={{ letterSpacing: 1, fontFamily: 'monospace', color: '#fff', fontSize: 20, fontWeight: 'bold' }} >{this.props.nome_usuario}</Text>
                    <Text style={{ letterSpacing: 1, fontFamily: 'monospace', color: '#fff', fontSize: 15, fontWeight: 'bold' }} >{ formarter.apply( this.props.numero) }</Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

function cellPhoneMask(number){
    let mask = '(00)00000-0000'
}