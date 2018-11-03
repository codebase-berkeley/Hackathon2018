import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

export default class Maps extends React.Component {
    render() {
      return (
        <MapView 
          style={styles.map}
          region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}/>
      );
    }
  }

  const styles = StyleSheet.create({
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    }
  })