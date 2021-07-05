import React, { useEffect, useState } from "react";
import { View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, ProviderPropType } from 'react-native-maps';
import { getProductStore } from '../reducers/storeReducer';
import { useDispatch, useSelector } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const PlacesMaps = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const productStore = useSelector((store) => store.storeReducer.productsStore);
  useEffect(() => {
    dispatch(getProductStore());
  }, [])
  return (
    <View>
      <MapView
        style={{ height: '100%', width: '100%' }}
        initialRegion={{
          latitude: 21.038132839736,
          longitude: 105.81729351904,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {productStore.map((e, i) => (
          <Marker
            key={i}
            title={e.street}
            // image={flagPinkImg}
            key={e.name}
            coordinate={{ latitude: e.latitude, longitude: e.longitude }}
          >
            <TouchableOpacity>
              <Fontisto name="map-marker-alt" size={25} style={{ color: 'red' }} />
            </TouchableOpacity>
          </Marker>
        ))}
      </MapView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', right: 10, top: 10 }}>
        <Ionicons name="close-circle" size={40} style={{ color: 'black' }} />
      </TouchableOpacity>
    </View>
  )
}

export default PlacesMaps
