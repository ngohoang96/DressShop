import React, { Component } from 'react'
import { View,Text,TouchableOpacity,Dimensions,StyleSheet,Image } from 'react-native'
import bannerImage from '../../img/temp/banner.jpg'
const {width } = Dimensions.get('window')
export default class Collection extends Component {
    
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (

            <View style ={wrapper}>
                 <View style={{ height: 50, justifyContent: 'center' }}>
                    <Text style={textStyle} >SPRING COLLECTION</Text>
                </View>
                <TouchableOpacity   style={{ flex: 4, justifyContent: 'flex-end' }}
                                    onPress = {()=>this.props.navigation.navigate('ListProduct')}>
                    <Image style={imageStyle} source={bannerImage}/>
                </TouchableOpacity>
            </View>
        )
    }
}
const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: imageHeight, 
        width: imageWidth
    }
});