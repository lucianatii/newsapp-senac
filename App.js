import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet} from 'react-native';
//import {MyList} from './src/components/MyList';
import MyList from './src/components/MyList';  


class App extends Component
{

  render(){
    return(
      
      <View>
        <Image style={styles.topo} source={require('./src/images/topo.png')}/>     
      
      <View style={styles.barra}></View>
      <View>
        <MyList></MyList>
      </View>
      
      </View>
     
    );
  }
}

export default App;

const styles = StyleSheet.create ({
  topo: {
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 10,
    width: 200, 
    height: 80,
  },

    barra: {
backgroundColor: 'black',
height: 2

    }

  
})


