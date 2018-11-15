import React, { Component } from 'react'
import { View,Text,TouchableOpacity,Image} from 'react-native'
export default class Cart extends Component {
    static navigationOptions = {
        tabBarIcon: param => {
            if (param.focused) { return <Image style={{ width: 25, height: 25 }} source={require('../../img/icon/cartactive.png')} /> }
            else {
                return <Image style={{ width: 28, height: 28 }} source={require('../../img/icon/cartinactive.png')} />
            }
        },
    }
    render() {
        
        return (
            <View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail')}>
                <Text>Cart Component</Text>
                </TouchableOpacity>

            </View>
        )
    }
}