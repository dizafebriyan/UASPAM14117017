import { View, Text } from 'react-native'
import React from 'react'
import Table from './src/table';
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <Table/>
    </NavigationContainer>
  )
}

export default App