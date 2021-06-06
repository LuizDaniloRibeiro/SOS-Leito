import React from 'react'
import { SafeAreaView } from 'react-navigation'
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons'

const response = [
  {
    id: '1',
    title: 'Cuiabá'
  },
  {
    id: '2',
    title: 'Campo Grande'
  },
  {
    id: '3',
    title: 'São Paulo'
  },
  {
    id: '4',
    title: 'Rio de Janeiro'
  },
  {
    id: '5',
    title: 'Ceará'
  },
  {
    id: '6',
    title: 'Rio Grande do Sul',
  },
  {
    id: '7',
    title: 'Acre'
  },
]


const HospList = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={ styles.container } forceInset={{ top: 'always' }}>
        <FlatList 
          data={ response }
          keyExtractor={ item => item.id }
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => 
                  navigation.navigate('MapDetail', {_id: item.id})
              }>
                <ListItem chevron title={ item.title } />
            </TouchableOpacity>
            )
          }}
        />
      </SafeAreaView>
    </>
  )
}

HospList.navigationOptions = {
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome5 name="hospital-user" color={ tintColor } size={ 30 } />
      )
}


const styles = StyleSheet.create({
   container: {
     margin: 4,
     padding: 30,
   }
 })   

export default HospList