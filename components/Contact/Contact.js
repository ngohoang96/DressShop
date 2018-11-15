import React, { Component } from 'react'
import { View,Text,TouchableOpacity,Image} from 'react-native'
export default class Contact extends Component {
    static navigationOptions = {
        tabBarIcon: param => {
            if (param.focused) { return <Image style={{ width: 33, height: 33 }} source={require('../../img/icon/contactactive.png')} /> }
            else {
                return <Image style={{ width: 33, height: 33 }} source={require('../../img/icon/contactinactive.png')} />
            }
        },

    }
    render() {
        
        return (
            <View>
                <TouchableOpacity >
                <Text>Contact Component</Text>
                </TouchableOpacity>

            </View>
        )
    }
}