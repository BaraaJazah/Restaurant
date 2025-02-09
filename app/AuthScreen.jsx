import { StyleSheet, Text, View, Image, Dimensions, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { photo_2, photo_small, blur_2 } from '../content/inportImages'
import { Link, useRouter } from 'expo-router';
const { height, width } = Dimensions.get('window');
export default function WelcomeScreen() {

    const router = useRouter();
    const [name, onChangeName] = useState('');
    return (
        <View style={styles.container}  >
            <View style={styles.topPart} >
                <Image
                    source={photo_small}
                    resizeMode='cover'
                    style={styles.imageTwo}
                />
                <Image
                    source={photo_2}
                    resizeMode='cover'
                    style={styles.imageOne}
                />
                <Image
                    source={blur_2}
                    resizeMode='cover'
                    style={styles.blur}
                />
            </View>
            <View style={styles.buttonPart} >
                <Text style={styles.textOne} >What is your firstname?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={ name => onChangeName(name) }
                    value={name}
                    color = '#C2BDBD'
                />
                <Pressable
                    style={styles.btn}
                    onPress={() => { router.replace('/(screens)/HomeScreen') }}
                >
                    <Text style={styles.btnText}>Let’s Continue</Text>
                </Pressable>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({

    container: {
        height: height,
        width: width,
        flex: 1,
        backgroundColor: "#fff",
        position: 'absolute'
    },

    topPart: {
        height: height * 0.6,
        backgroundColor: '#FFA451',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    buttonPart: {
        height: height * 0.4,
        padding: 24,
    },

    imageOne: {
        width: width * 0.7,
        height: width * 0.6,

    },
    imageTwo: {
        transform: [{ translateX: width * 0.3 }, { translateY: 20 }]
    },

    blur: {

        marginTop: 10,
        width: width * 0.8,
    },

    textOne: {
        color: '#27214D',
        fontSize: 20,
        paddingBottom: 8,
        fontWeight : '600' 

    },

    input: {
        color: '#5D577E',
        fontSize: 16,
        padding: 20,
        backgroundColor : '#F3F1F1' , 
        marginBottom  : 20 ,
        marginTop  : 10 ,
        borderRadius : 12 , 

    },

    btn: {
        backgroundColor: '#FFA451',
        padding: 24,
        borderRadius: 12,


    },

    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,

    }

})