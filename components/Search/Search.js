import React, { Component } from 'react'
import { View,Text,TouchableOpacity,Image} from 'react-native'
export default class Search extends Component {
    static navigationOptions = {
        tabBarIcon: param => {
            if (param.focused) { return <Image style={{ width: 33, height: 33 }} source={require('../../img/icon/searchactive.png')} /> }
            else {
                return <Image style={{ width: 33, height: 33 }} source={require('../../img/icon/searchinactive.png')} />
            }
        },

    }
    render() {
        
        return (
            <View>
                <TouchableOpacity >
                <Text>Search Component</Text>
                </TouchableOpacity>

            </View>
        )
    }
}