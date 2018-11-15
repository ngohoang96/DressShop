import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper';
const url =`http://localhost/app/images/type/`;
const { width, height } = Dimensions.get('window');

export default class Category extends Component {

    render() {
        const { wrapper, textStyle, imageStyle, cateTitle } = styles;

        const { types, navigation } = this.props;
        return (
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle} >LIST OF CATEGORY</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                    <Swiper showsPagination autoplayDirection width={imageWidth} height={imageHeight}>
                        {types.map(e => (
                            <TouchableOpacity onPress={() => navigation.navigate('ListProduct')} key={e.id}>
                                <ImageBackground source={{ uri: `${url}${e.image}` }} style={imageStyle} >
                                    <Text style={cateTitle}>
                                        {e.name}
                                    </Text>
                                </ImageBackground>
                                <Text style={cateTitle}>
                                    {e.name}
                                </Text>
                            </TouchableOpacity>
                        ))}

                    </Swiper>
                </View>
            </View>
        )
    }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
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
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});