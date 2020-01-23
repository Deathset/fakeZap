import React, { Component } from "react"
import { View, Alert, StyleSheet, Text, TextInput, ActivityIndicator, Dimensions ,TouchableOpacity} from "react-native"
import service from '../../service'

const { height, width } = Dimensions.get('window')
export default class TelaInicial extends Component {

    static navigationOptions ={
        header:null
    }

    constructor() {
        super()
        this.state = {
            nome_usuario:'',
            numero: '',
            loading: false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ color: 'white', textAlign: "center", fontSize:20, letterSpacing:2, fontWeight:'bold' }}>{'LSMessager'}</Text>
                <TextInput style={styles.input} value={this.state.nome_usuario} placeholder ='Nome de usuario' onChangeText={nome_usuario => this.setState({ nome_usuario })} />
                <TextInput style={styles.input} value={this.state.numero} placeholder = 'Número'  onChangeText={numero => this.setState({ numero })} />
                
                {
                    this.state.loading ? 
                    <View style={styles.btn}>
                        <ActivityIndicator
                        size={'large'}
                        color={'#fff'}
                        />
                    </View>
                    :
                <TouchableOpacity style={styles.btn} onPress={() => this.login()}>
                    <Text style={{ fontSize: 19, color: 'white' }}>Login</Text>
                </TouchableOpacity>
                }
            </View>
        )
    }

    async login() {
        this.setState({loading:true})
        try {
            let { nome_usuario, numero } = this.state
            let tmp = {
                nome_usuario: nome_usuario.trim(),
                numero: numero.trim()
            }
            let usuario = await service.post('/new/user', tmp)
            if(usuario){
                this.setState({loading:false})
                this.props.navigation.navigate('TelaContatos',{usuario})
            }else{
                Alert.alert('Não foi possível fazer login')
            }
            
        } catch (error) {
            Alert.alert('Não foi possível fazer login')
            this.setState({loading:false})
            console.log(error)
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#3F2F8F', justifyContent: "center", alignContent: "center"
    },
    input: {
        backgroundColor: '#ffff', borderRadius: 5, marginTop: 30, marginLeft: 30, marginRight: 30, textAlign:'center'
    },
    btn: {
        height:width/6,
        alignItems: 'center',
        backgroundColor: '#2C2068',
        padding: 15, margin: 30, marginTop: 40, borderRadius: 60, shadowColor: "#fff"
    }
})


