import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>About</Text>
				
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
	alignItems: 'center',
  }
});

export default About;