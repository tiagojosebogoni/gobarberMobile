import React from 'react'; 
import { StatusBar } from 'react-native'
import Routes from './routes';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-'

export default function src() {
  return (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
    <Routes />
  </>
  )
}
