import React from 'react';
import { NativeRouter as Router, Route } from 'react-router-native';
import Home from './components/Home';
import About from './components/About';
import { View } from 'react-native';

class App extends React.Component {
  render() {
    return <View>
      <Text>po</Text>
    

    </View>
      // <Router>
      //   <Route path="/" exact component={Home} />
      //   <Route path="/about" component={About} />
      // </Router>
    // );
  }
}

export default App;