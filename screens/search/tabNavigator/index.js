import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import {createBottomTabNavigator, createAppContainer, TabBarBottom} from 'react-navigation'
import SearchTab from './searchTab'
import FavoritesTab from './favoritesTab'



const SearchTabNavigator = createBottomTabNavigator({
    SearchTab: {screen: SearchTab},
    FavoritesTab: {screen: FavoritesTab},
},
{
    defaultNavigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state
            let iconName
            if (routeName === 'FavoritesTab') {
                iconName = `favorite${focused ? '' : '-border'}`
            } else if (routeName === 'SearchTab') {
                iconName = 'search'
            }

            return <MaterialIcons name={iconName} size={25} color={tintColor}/>
            },
        
        }),
        tabBarComponent: TabBarBottom,
        header: null,
        tabBarPosition: 'bottom',
        tabBarOptions: {
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
)


export default createAppContainer(SearchTabNavigator)