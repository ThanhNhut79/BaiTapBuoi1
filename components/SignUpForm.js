import { Text, StyleSheet, View,TextInput,Button } from 'react-native'
import React, { Component } from 'react'

export default class SignUpForm extends Component {
  render() {
    return (
        <View style = {styles.container}>
        <Text style = {styles.text}>Address</Text>
        <TextInput style = {styles.input}/>
        <Text style = {styles.text}>State</Text>
        <TextInput style = {styles.input}/>
        <Text style = {styles.text}>Your Phone Nmber</Text>
        <TextInput style = {styles.input}/>
        <Button title='Register' color="green"></Button>
        
    </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 150
        
     },
     input: {
        margin: 20,
        height: 45,
        borderColor: 'green',
        borderWidth: 1
     },
     text:{
        paddingLeft:20

     }
})