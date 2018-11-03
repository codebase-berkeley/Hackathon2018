import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
           <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
