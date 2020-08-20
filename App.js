import React from 'react'
import {View, StyleSheet} from 'react-native'

import FlexBox from './src/FlexBox'

export default props => {
  return(
    <View style={styles.container}>      
      <FlexBox/>
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