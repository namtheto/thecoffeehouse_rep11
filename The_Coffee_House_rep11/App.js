import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Navigation from './src/navigation/Navigation';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import allReducer from "./src/reducers";

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, allReducer)
let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({})