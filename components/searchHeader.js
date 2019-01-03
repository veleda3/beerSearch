import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {SearchBar}  from 'react-native-elements'

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})
export default class SearchHeader extends Component {
  render() {
    return (
      <View>
        <SearchBar
            containerStyle={{marginTop: 50, backgroundColor: 'white', borderColor: 'white'}}
            lightTheme
            placeholder='Search'
            inputStyle={{backgroundColor: 'transparent'}}
            placeholderTextColor='green'
        />
      </View>
    )
  }
}
