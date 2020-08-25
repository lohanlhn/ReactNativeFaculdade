import React, { useState } from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5'

export default props => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [resultado, setResultado] = useState(0)

    function soma(){
        setResultado(Number(a) + Number(b))
    }
    function subtracao() {
        setResultado(Number(a) - Number(b))
    }
    function divisao() {
        if(b == 0){
            setResultado("Não é possivel dividir por 0")
        }else{
            setResultado(Number(a) / Number(b))
        }        
    }
    function mult() {
        setResultado(Number(a) * Number(b))
    }
    
    return(
        <View style={styles.Flex}>
            <TextInput style={[styles.TextInputStyle, {borderColor:"blue"}]} keyboardType="decimal-pad" placeholder="Informe o número" onChangeText={setA} />
            <View style={styles.ViewBotoesStyle}>
                <Icon name="plus" size={50} onPress={soma} />
                <Icon name="minus" size={50} onPress={subtracao} />
                <Icon name="divide" size={50} onPress={divisao} />
                <Icon name="times" size={50} onPress={mult} />
            </View>                        
            <TextInput style={[styles.TextInputStyle, { borderColor: "red" }]} keyboardType="decimal-pad" placeholder="Informe o número" onChangeText={setB}/>
            <Text>Resultado: {resultado}</Text>
        </View>
    )
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