import React, { Component } from 'react'
import { Text, KeyboardAvoidingView } from 'react-native'
import SearchHeader from '../../../components/searchHeader'
import Map from '../../../components/map'

export default class SearchTab extends Component {
 
  render() {
    return (
      <KeyboardAvoidingView>
        <SearchHeader />
        <Map />
      </KeyboardAvoidingView>
    )
  }
}
