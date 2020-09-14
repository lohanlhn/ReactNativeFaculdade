import React,{useState, useEffect} from 'react'
import {Text, View, Alert, Button} from 'react-native'

export default function Lista (props){
    const id = props.route.params.idCliente
    const [data, setData] = useState([])
    const string = 'https://cartoes-piotto.herokuapp.com/api/cliente/'+id 
    useEffect(() => {
            fetch(string, {
            method: 'GET',
            headers: {
                'Accept' : 'application/json',
                'Authorization':'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNDg0ODY4MjAwMiIsInJvbGUiOiJST0xFX0VYQ0xVU0FPIiwiY3JlYXRlZCI6MTU5OTUwMjc4NDY0MCwiZXhwIjoxNjAwMTA3NTg0fQ.krqxO4tHpD7XXasENrTUh3Z2thmFpGR7lckNTCdFptWA0nZZwXevOqKFerScecuGoZMAa5Wt_xj7eOuSI4qkEQ'
            }
        })
        .then((response) => {   
            if(!response.ok){
                if(response.status == 400){
                    Alert.alert("Cliente nao encontrado!");
                    props.navigation.goBack()
                }
            }
            return response.json()
        })
        .then((json) => {
                setData(json.dados)
            }
        )
        .catch((error) => {
            console.error(error)})
        }, []);
    
    function renderizacao (){
        if(data != null){
            return (
                <>
                    <Text style={{fontSize:24, color:'blue', fontWeight:'bold'}}>
                        Cliente  
                    </Text>
                    <Text>
                        ID: {data.id}
                    </Text>
                    <Text>
                        CPF: {data.cpf} 
                    </Text>
                    <Text>
                        Nome: {data.nome}
                    </Text>
                    <Text>
                        UF: {data.uf}
                    </Text>
                    <Button title="Voltar" onPress={() => props.navigation.goBack()}/>  
                    <Button title="Listar cartoes" />
                </>
            )
        }
    }

    return(
        <View style={{flex:1, padding: 24}}>
            {renderizacao()}
        </View>
    );
}