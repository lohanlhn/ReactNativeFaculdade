import React from 'react'
import {View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <View style={styles.FlexV1}>
            <Quadrado cor='#7fffd4' lado={20}/>
            <Quadrado cor='#ff801a' lado={30}/>
            <Quadrado cor='#50d1f6' lado={40}/>
            <Quadrado cor='#dd22c1' lado={50}/>
            <Quadrado cor='#8312ed' lado={60}/>
        </View>
    );
}

const styles = StyleSheet.create({
    FlexV1:{
        // flexGrow:1,
        backgroundColor:'black',
        width:'100%',
        height:'50%',
        flexDirection:"row",
        justifyContent:"space-around"
    }
})