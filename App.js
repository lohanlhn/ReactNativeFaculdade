import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Calculadora from './src/Atividade 26-08/Calculadora'


export default props => {
  return(
    <View style={styles.container}>      
      <Calculadora/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    alignItems: "center",
    justifyContent: "center",
    margin:30
  }
})