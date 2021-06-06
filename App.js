import React from 'react';
import { StyleSheet, Text, View } from 'react-native';    
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import MapScreen from './src/screens/MapScreen'
import HospList from './src/screens/HospList'
import MapDetailScreen from './src/screens/MapDetailScreen'
import { setNavigator } from './src/screens/navigationRef'
import { FontAwesome5 } from '@expo/vector-icons'



const mapListFlow = createStackNavigator({
  Hospital: HospList,
  MapDetalhe: MapDetailScreen
})

mapListFlow.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <FontAwesome5 name="map-marked" color={ tintColor } size={ 30 } />
  )
}

const switchNavigator = createSwitchNavigator({
   mainFlow: createBottomTabNavigator({
     Mapa: MapScreen,
     mapListFlow
        
   },{
     tabBarOptions: {
        showLabel: true,
        activeTintColor: '#2905FF'
    }
   })
})

const App = createAppContainer(switchNavigator)

    export default () => {
      return (
        <App 
          ref={navigator => {
            setNavigator(navigator)
          }}
        />
      );
    }
