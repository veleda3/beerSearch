import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import {Button} from 'react-native-elements'
import {width, height} from '../theme'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },
    imageContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
    },
    image: {
        width: width,
        height: height 
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
        marginBottom: 30,
    }
})

export default class Home extends Component {

    static navigationOptions = {
        header: null
    }

    handlePress = () => {
        const {navigate} = this.props.navigation
        navigate("SearchTabNavigator")
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image} 
                        source={require('../assets/beerImage.jpg')}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Find me a beer!"
                        onPress={this.handlePress}
                        large
                        leftIcon={{name: 'search'}}
                        borderRadius={10}
                    />

                </View>
            </View>
        )
    }
}


