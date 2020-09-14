import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Stack from './src/Componentes_aula 09-09/endPointAccess/navegacao/StackBusca'
import {NavigationContainer} from '@react-navigation/native'


export default props => {
  return(
    <View style={{flex:1}}>      
    <NavigationContainer>
      <Stack/>
    </NavigationContainer>      
    </View>
  )
}
