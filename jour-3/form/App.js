
import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      pass:""
    };
    this.onPress=this.onPress.bind(this)
  }
  // const validateEmail = (email) => {
	// 	const re =
	// 		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	return re.test(email);
	// };

  onPress(){
    const re =
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
		
    if(this.state.text.match(passRegex)>6&&this.state.pass.match(re)){
     console.log("bimmm") 
     return(
     <Button title="envoie" ></Button>
       )
    }else{
     return <Button 
      disabled 
       
        title="envoie" ></Button>
    }
  }
  render() {
    console.log(this.state.text)
    console.log(this.state.pass)
    const {pass,text}=this.state
    return (
      <View style={styles.container} >
        <Text>Formulaire</Text>

        <TextInput
        placeholder="login"
        value={this.state.text}
         onChangeText={(text) => this.setState({ text })}
        value={text}
        
        />
        
        <TextInput
        placeholder="password"
        value={pass}
        onChangeText={(pass) => this.setState({ pass })}
        />
        {this.onPress()}
{/*         
        <Button onPress={this.onPress} 
       
        title="envoie" ></Button> */}
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
