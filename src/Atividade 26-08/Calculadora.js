import React, {Component} from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Contador extends Component{
    state = {
        a: 0,
        b: 0,
        resultado: 0,
    }

    incremento(num){
        this.setState({numero:num+1})
    }

    decremento(num){
        this.setState({numero:num-1})
    }
    soma(){
        this.setState({resultado:+Number(this.state.a) + Number(this.state.b)})
    }
    subtracao() {
        this.setState({resultado:(Number(this.state.a) - Number(this.state.b))})
    }
    divisao() {
        if(this.state.b == 0){
            setResultado("Não é possivel dividir por 0")
        }else{
            this.setState({resultado:(Number(this.state.a) / Number(this.state.b))})
        }        
    }
    mult() {
        this.setState({resultado:(Number(this.state.a) * Number(this.state.b))})
    }

    render(){ 
        return(
            <View style={styles.Flex}>
            <TextInput style={[styles.TextInputStyle, {borderColor:"blue"}]} keyboardType="decimal-pad" placeholder="Informe o número" onChangeText={num => {this.setState({a:num})}}  />
            <View style={styles.ViewBotoesStyle}>
                <Icon name="plus" size={50} onPress={() => this.soma()} />
                <Icon name="minus" size={50} onPress={() => this.subtracao()} />
                <Icon name="divide" size={50} onPress={() => this.divisao()} />
                <Icon name="times" size={50} onPress={() => this.mult()} />
            </View>                        
            <TextInput style={[styles.TextInputStyle, {borderColor:"red"}]} keyboardType="decimal-pad" placeholder="Informe o número" onChangeText={num => {this.setState({b:num})}} />
            <Text>Resultado: {this.state.resultado}</Text>
            </View>
        );
    }
     
}

const styles = StyleSheet.create({
    Flex:{
        width:"70%",
        alignItems:"center"
    },
    ViewBotoesStyle:{
        justifyContent:"space-between",
        flexDirection: "row",        
        width: "150%",
        marginVertical:20
    },
    TextInputStyle:{        
        borderWidth:2,
        borderRadius:20,
        width: "70%",
        textAlign:"center",
        margin:20
    }
})
