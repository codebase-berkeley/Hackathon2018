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
            <MapView style={styles.map}
      region={this.state.region}
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
