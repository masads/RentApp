import React from 'react'
import {  Dimensions,ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'


export default function WelcomeScreen({navigation}) {
    return (
       <ImageBackground
       style={styles.background}
       source={require('../assets/images/welcome_background.png')}
       >
           <View style={styles.welcometext}>
                <Text style={styles.tagline}>Welcome Home
                </Text>
           </View>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background:
    {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        width: Dimensions.get("window").width, //for full screen
        height: Dimensions.get("window").height, //for full screen
    },
    buttonContainer:
    {
        padding:20,
        width:'100%',
        bottom:40
    },
    logo:
    {
        width:100,
        height:100
    },
    welcometext:
    {
        position:'absolute',
        top:120,
        alignItems:'center'
    },
    tagline:
    {
        marginHorizontal:50,
        textAlign:'center',
        fontSize:30,
        fontWeight:'600',
        paddingVertical:20,
        fontFamily:'Roboto',
        color:'#505050'
    },
    RegisterBtn:
    {   
        borderWidth:2,
        borderColor:'#505050',
        opacity: 0.7,
    }
})
