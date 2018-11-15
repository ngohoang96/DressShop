import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, TextInput } from 'react-native'
import icMenu from '../img/icon/ic_menu.png'
import icLogo from '../img/icon/ic_logo.png';

const { height } = Dimensions.get('window');
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: '',
        }
    }
    render() {
        const { navigation } = this.props;
        const { wrapper, row1, textInput, iconStyle, titleStyle } = styles;
        return (
            <View style={wrapper} >
                <View style={row1}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image style={iconStyle}
                               source={icMenu}
                        />
                    </TouchableOpacity>
                    <Text style={titleStyle}> Dress Shop</Text>
                    <Image style={iconStyle}
                           source={icLogo} 
                    />
                </View>
                <TextInput
                        style={textInput}
                        placeholder='What do you want'
                        underlineColorAndroid="transparent"
                        value={this.state.txtSearch}
                        onChangeText={text => this.setState({ txtSearch: text })}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: { 
        height: height / 8, 
        flexDirection:'column',
        backgroundColor: '#4469B0', 
        padding: 10, 
        justifyContent: 'space-around' 
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    textInput: { 
        height: height / 23, 
        backgroundColor: '#FFF', 
        paddingLeft: 10,
        paddingVertical: 0 
    },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 25, height: 25 }
});