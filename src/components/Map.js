import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions, Image } from 'react-native'
    
const height = Dimensions.get('window').height
    
const response = [
      {
        id: '1',
        coordinates: {
          latitude: -23.5083269537475, 
          longitude: -47.442509312685644,
        },
        title: 'Santa Casa',
        description: 'Sorocaba',
        icon: require('../../assets/locationRed.png'),
      },
      {
        id: '2',
        coordinates: {
          latitude: -23.213447741596855, 
          longitude: -47.31722517916694,
        },
        title: 'UPA Bairro de Éden',
        description: 'Itu',
        category: 1,
        icon: require('../../assets/locationBlue.png'),
      },
      
]
    
const Map = () => {
    return (
        <MapView
          style={styles.map}
          loadingEnabled={true}
          region={{
            latitude: -15.59611,
            longitude: -56.09667,
            latitudeDelta: 0.010,
            longitudeDelta: 1
          }}
        >
          {response.map(marker => (
            <MapView.Marker
              key={marker.id}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
              imagem={marker.imagem} style={{ height: 32, width: 32 }}
            >
              <Image source={ marker.icon } style={{ height: 32, width: 32 }} />
            </MapView.Marker>
          ))}
        </MapView>
    )
}
    
const styles = StyleSheet.create({
    map: {
        height
    }
})
    
export default Map