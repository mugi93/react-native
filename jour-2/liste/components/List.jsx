import React, { Component } from 'react'
import { Text, View , FlatList ,StyleSheet , Image } from 'react-native';
import Svg from 'react-native-svg';
// import {SvgUri} from 'react-native-svg-uri';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: []

        }
        this.renderItem = this.renderItem.bind(this)
    }
    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => response.json())
            .then(count => {
                this.setState({
                    countries: count

                })

            })

    }

  renderItem({item}) {
        console.log(item)
        
            return (
                <>
                    <View>
                        <Text>{item.name}</Text>
                        <Text>{item.capital}</Text>
                      
                     <Image  style={styles.img}source={{uri:item.flag}} ></Image>

                        
                    </View>

                </>
            )
        

    }


    render() { 
        const {countries}=this.state
        console.log(countries)
        return (

          
                <FlatList
                    data={countries}
                    renderItem={this.renderItem}
                    keyExtractor={(countries) => countries.alpha3Code}
                />
               
           
        )
    }
}
const styles=StyleSheet.create({
    img: {
      width:250,
      height:150
    },
  });