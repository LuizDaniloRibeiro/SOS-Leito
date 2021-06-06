import React from 'react';
import { StyleSheet, Text, View } from 'react-native';    
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MapScreen from './src/screens/MapScreen'
// import MapListScreen from './src/screens/MapListScreen'
import { setNavigator } from './src/screens/navigationRef'

    const switchNavigator = createSwitchNavigator({
      mainFlow: createBottomTabNavigator({
        Hospital: MapScreen,
        
      }, {
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
