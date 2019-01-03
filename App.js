import Home from './screens/home'
import SearchTabNavigator from './screens/search/tabNavigator'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const RootStack = createStackNavigator({
  Home: { screen: Home },
  SearchTabNavigator: { screen: SearchTabNavigator}
},
{
  defaultNavigationOptions: ({navigation}) => ({
    header: null
  })
})

const App = createAppContainer(RootStack)

export default App