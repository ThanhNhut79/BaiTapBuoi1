import { Text, StyleSheet, View, TextInput, Button } from 'react-native'
import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>Your Email</Text>
            <TextInput style = {styles.input}/>
            <Text style = {styles.text}>Your Password</Text>
            <TextInput style = {styles.input}/>
            <Button title='SIGN IN' color="green"></Button>
            <Button title='Forgot your password ?' color="green" ></Button>
        </View>
        
    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 170
        
     },
     input: {
        margin: 20,
        height: 45,
        borderColor: 'green',
        borderWidth: 1
     },
     text:{
        paddingLeft:20

     },
})