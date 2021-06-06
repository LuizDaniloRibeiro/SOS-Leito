import React from 'react'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import Icon from 'react-native-vector-icons/Ionicons'
import { FontAwesome5 } from '@expo/vector-icons';

const MapScreen = ({ navigation }) => {
      return (
        <SafeAreaView forceInset={{ top: 'always' }}>
          <Map />
        </SafeAreaView>
      )
    }

MapScreen.navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name="map-marked" color={ tintColor } size={ 30 } />
      )
    }

export default MapScreen