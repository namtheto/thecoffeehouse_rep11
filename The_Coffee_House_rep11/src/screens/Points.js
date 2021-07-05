import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, TouchableOpacity, FlatList } from 'react-native'
import Header from '../components/Header_content'
import TichDiem from '../components/TichDiem'
import DoiUuDai from '../components/DoiUuDai'
import PhieuUuDai from '../components/PhieuUuDai'

const Point = () => {
  const [SC, setScreen] = useState('TichDiem');
  const ToggleScreen = () => {
    if (SC) {
      if (SC == 'TichDiem') {
        return <TichDiem />;
      }
      if (SC == 'DoiUuDai') {
        return <DoiUuDai />;
      }
      if (SC == 'PhieuUuDai') {
        return <PhieuUuDai />
      }
    }
  };
  return (
    <View>
      <Header />
      <View style={styles.Tab}>
        <TouchableOpacity onPress={() => setScreen('TichDiem')} style={[styles.Stack, { borderBottomColor: SC == 'TichDiem', borderBottomWidth: 2, borderBottomColor: SC == 'TichDiem' ? '#fe8f01' : 'white' }]}>
          <Text style={[styles.TitTab, { color: SC == 'TichDiem' ? '#fe8f01' : 'grey' }]}>TÍCH ĐIỂM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('DoiUuDai')} style={[styles.Stack, { borderBottomColor: SC == 'DoiUuDai', borderBottomWidth: 2, borderBottomColor: SC == 'DoiUuDai' ? '#fe8f01' : 'white' }]}>
          <Text style={[styles.TitTab, { color: SC == 'DoiUuDai' ? '#fe8f01' : 'grey' }]}> ĐỔI ƯU ĐÃI</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setScreen('PhieuUuDai')} style={[styles.Stack, { borderBottomColor: SC == 'PhieuUuDai', borderBottomWidth: 2, borderBottomColor: SC == 'PhieuUuDai' ? '#fe8f01' : 'white' }]}>
          <Text style={[styles.TitTab, { color: SC == 'PhieuUuDai' ? '#fe8f01' : 'grey' }]}>PHIẾU ƯU ĐÃI</Text>
        </TouchableOpacity>
      </View>
      <ToggleScreen />
    </View>
  )
}

export default Point

const styles = StyleSheet.create({
  Tab: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  Stack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  TitTab: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})
