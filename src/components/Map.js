import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { 
  StyleSheet, 
  Dimensions, 
  Image, 
  View, 
  Text, 
  TouchableWithoutFeedback, 
  TouchableNativeFeedback
} from 'react-native'
    
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
    
const response = [
      {
        id: '1',
        coordinates: {
          latitude: -23.507914069421325,  
          longitude: -47.45631086608613,
        },
        title: 'Hospital Santa Lucinda de Sorocaba Casa',
        description: 'Sorocaba',
        icon: require('../../assets/locationYellow.png'),
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
        category: 2,
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
        category: 3,
        icon: require('../../assets/locationRed.png'),
      },
      {
        id: '5',
        coordinates: {
          latitude: -23.501101500175228,  
          longitude: -47.474808974884574,
        },
        title: 'Mental Medicina Especializada',
        description: 'Sorocaba',
        category: 4,
        icon: require('../../assets/locationYellow.png'),
      },
      {
        id: '6',
        coordinates: {
          latitude: -23.501101509711990,  
          longitude: -47.474808954445776,
        },
        title: 'Mental Medicina Especializada',
        description: 'Sorocaba',
        category: 4,
        icon: require('../../assets/locationBlue.png'),
      },
      {
        id: '7',
        coordinates: {
          latitude: -23.501101500175228,  
          longitude: -47.474808974884574,
        },
        title: 'Mental Medicina Especializada',
        description: 'Sorocaba',
        category: 4,
        icon: require('../../assets/locationYellow.png'),
      },
      {
        id: '8',
        coordinates: {
          latitude: -23.5011014879542,  
          longitude: -47.474808974884574,
        },
        title: 'Mental Medicina Especializada',
        description: 'Sorocaba',
        category: 4,
        icon: require('../../assets/locationRed.png'),
      },
      
      
]
    
const Map = () => {
  const [spot, setSpot] =  useState(null)
  const [visible, setVisible] = useState(false)
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

            onPress={( event ) => {
              setVisible(false)
            }}

            >
            {response.map(marker => (
                <MapView.Marker
                key={marker.id}
                identifier={marker.id}
                coordinate={marker.coordinates}
                title={marker.title}
                description={marker.description}
                showUserLocation={true}
                onPress={(event) => {
                  setSpot(event._targetInst.return.key)
                  setVisible(true)
                }}
                imagem={marker.imagem} style={{ height: 32, width: 32 }}
                >
                <Image source={ marker.icon } style={{ height: 32, width: 32 }} />
                </MapView.Marker>
            ))}
            </MapView>

            { 
              spot && visible ? (
                <TouchableNativeFeedback onPress={() => {
                    setVisible(true)
                }}>
                  <View style={ styles.card }>
                    <Image source={ require('../../assets/hospital-santa-casa.jpeg')} style={ styles.img }/>
                    <Text style={ styles.descricaoTitulo }>HOSPITAL PUBLICO</Text>
                    <Text style={ styles.descricaoTitulo }>Santa Casa de Misericórdia de Sorocaba</Text>
                    <Text style={ styles.descricao }>Telefone: (15) 2101-8000</Text>
                    <Text style={ styles.descricao }>Av. São Paulo, 750 - Jardim Árvore Grande, Sorocaba - SP, 18013-000</Text>
                    <Text style={ styles.descricao }>Total de leitos: 20</Text>
                    <Text style={ styles.descricao }>Leitos disponiveis: 2</Text>
                  </View>
                </TouchableNativeFeedback>
              ) : <View />  
            }

        </>
    )
}
    
const styles = StyleSheet.create({
    map: {
        height
    },
    card: {
      backgroundColor: '#D04627',
      height: 250,
      width: width - 20,
      position: 'absolute',
      overflow: 'hidden',
      margin: 10,
      bottom: 50,
      shadowRadius: 20,
      borderRadius: 8,
      elevation: 20
    },
    img: {
      width: 200,
      height: 100,
      marginLeft: 100,
      marginBottom: 10,
      marginTop: 15,
      borderRadius: 10
    },
    descricao: {
      textAlign: 'center',
      fontSize: 12,
      color: '#fff'
    },
    descricaoTitulo: {
      fontWeight: 'bold',
      fontSize: 14,
      textAlign: 'center',
      color: '#fff'
    }
})
    
export default Map