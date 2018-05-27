import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

//Imports
import Routes from './app/Routes'
import Gallery from './app/components/Gallery'
//import Test from './app/components/SignInTest'




export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingLeft: 0,
    paddingRight: 0,


  }
});
