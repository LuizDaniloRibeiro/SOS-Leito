import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, Dimensions, Image } from 'react-native'
    
const height = Dimensions.get('window').height
    
const response = [
      {
        id: '1',
        coordinates: {
          latitude: -23.507914069421325,  
          longitude: -47.45631086608613,
        },
        title: 'Hospital Santa Lucinda de Sorocaba Casa',
        description: 'Sorocaba',
        icon: require('../../assets/locationRed.png'),
      },
      {
        id: '2',
        coordinates: {
          latitude: -23.5007608624658,  
          longitude: -47.45415646787265,
        },
        title: 'Hospital Samaritano',
        description: 'Sorocaba',
        category: 1,
        icon: require('../../assets/locationBlue.png'),
      },
      {
        id: '3',
        coordinates: {
          latitude: -23.50355406568667,  
          longitude: -47.47302602463894,
        },
        title: 'Hospital Evangélico de Sorocaba',
        description: 'Sorocaba',
        category: 1,
        icon: require('../../assets/locationYellow.png'),
      },
      {
        id: '4',
        coordinates: {
          latitude: -23.498240116047523,  
          longitude: -47.44464739989595,
        },
        title: 'Santa Casa de Misericórdia de Sorocaba',
        description: 'Sorocaba',
        category: 1,
        icon: require('../../assets/locationBlue.png'),
      },
      {
        id: '5',
        coordinates: {
          latitude: -23.501101500175228,  
          longitude: -47.474808974884574,
        },
        title: 'Mental Medicina Especializada',
        description: 'Sorocaba',
        category: 1,
        icon: require('../../assets/locationBlue.png'),
      },
      
]
    
const Map = () => {
    return (
        <>
            

            <MapView
            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude: -23.514899901534225, 
                longitude: -47.46676499231346,
                latitudeDelta: 0,
                longitudeDelta: 0.050
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

        </>
    )
}
    
const styles = StyleSheet.create({
    map: {
        height
    }
})
    
export default Map