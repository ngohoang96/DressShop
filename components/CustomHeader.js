import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
export default class CustomHeader extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        )
    }
}