import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
    </SafeAreaView >
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight
  }
})