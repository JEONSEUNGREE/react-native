import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

function Title({children}) {
  return (
    <Text style={style.title}>{children}</Text>
  )
}

export default Title

const style = StyleSheet.create({
title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    borderWidth: 2,
    borderColor: 'white'
    }
})