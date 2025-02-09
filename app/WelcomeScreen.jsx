import { StyleSheet, Text, View , Image ,Dimensions , Pressable} from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'; 
import { photo_1, photo_small, blur_1 } from '../content/inportImages'

const { height, width } = Dimensions.get('window');
export default function AuthScreen() {
    const router = useRouter();

  return (
    <View style={styles.container} >
            <View style={styles.topPart} >
    
                <Image
                    source={photo_small}
                    resizeMode='cover' 
                    style={styles.imageTwo}
                />
                <Image
                    source={photo_1}
                    resizeMode='cover'
                    style={styles.imageOne}
                />
                <Image
                    source={blur_1}
                    resizeMode='cover'
                    style={styles.blur}
                />
            </View>
            <View style={styles.buttonPart} >

                <Text style={styles.textOne} >Get The Freshest Fruit Salad Combo</Text>
                <Text style={styles.textTwo}>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>
                <Pressable
                    style={styles.btn}
                    onPress={() =>{  router.push('/AuthScreen') }}
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
    backgroundColor: "#fff"
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
    width: width * 0.8
},

textOne: {
    color: '#27214D',
    fontSize: 20,
    paddingBottom: 16,
    fontWeight : '600' 
},

textTwo: {
    color: '#5D577E',
    fontSize: 16,
    paddingBottom: 60,
    lineHeight: 25
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