
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Pressable, Alert, ActivityIndicator } from 'react-native';
import  { useState } from 'react'

export default function App() {
  
  const [showLoading, setShowLoading] = useState(false);
  // const x = (x, y) => x * y
  console.log(showLoading)
  return (
    <ScrollView style={styles.container}>



      <View style={styles.text}>
        <Image source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }} style={{ width: 300, height: 100 }}></Image>
        <Image source={require('./konexio-logo_1.png')} style={{ width: 300, height: 100 }} />

        <Pressable
          
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'red' : 'blue',
            },

          ]}
          onPress={({showLoading}) => [ setShowLoading(true) ,
          ] }  >
           <ActivityIndicator animating={showLoading} />
          
          
          {/* Alert.alert('Button Pressed!') */}
          
          <Text >Button</Text>
        </Pressable>



        <Text style={styles.text1}>1</Text>
        <Text style={styles.text2}>1</Text>
        <Text style={styles.text3}>1</Text>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: "blue",
    height: 100,
    width: 500


  },
  text: {
    backgroundColor: "white",
    margin: 30,
    marginLeft: 30
  },
  text1: {
    marginBottom: 80,
    marginTop: 80,
    fontSize: 30


  },
  text2: {
    marginBottom: 80,
    marginTop: 80,
    textAlign: 'center'


  },
  text3: {
    marginBottom: 80,
    marginTop: 80,
    fontWeight: "bold"


  },



});
