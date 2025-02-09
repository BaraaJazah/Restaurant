import { StyleSheet, Text, View, Pressable, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  Feather,
  Entypo
} from "@expo/vector-icons";


import { useRouter } from 'expo-router';

import { orderTrack_1, orderTrack_2, orderTrack_3, line, map } from '../../content/inportImages'

const { height, width } = Dimensions.get('window');

export default function TrackOrder() {

  const router = useRouter();


  return (
    <View style={{backgroundColor : "#fff" , height: height  * 1.2}}>


      <View style={styles.up} >
        <View style={styles.topIcon}>

          <Pressable onPress={()=>{router.back()}} style={{ flexDirection: 'row', }}  >
            <Ionicons style={{}} name="chevron-back" size={20} color="black" />
            <Text style={styles.topIconText} >Go Back</Text>
          </Pressable>
        </View>
        <Text style={styles.topText}>
          Delivery Status
        </Text>
      </View>


      <View style={{ backgroundColor: "#fff", height: height * 0.8 }}>

        {/* Repeat 1 */}
        <View style={{ margin: width * 0.06, marginTop: 40, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>

          <View style={{ flexDirection: "row", alignItems: "center" }} >

            <View style={{ backgroundColor: "#FFFAEB", padding: width * 0.04, borderRadius: 16, }}>

              <Image
                source={orderTrack_1}
                resizeMode='cover'
                style={{ width: width * 0.12, height: width * 0.12 }}
              />
            </View>

            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 16 }}>Order Taken</Text>

          </View>
          <View style={{ backgroundColor: "#4CD964", padding: 6, borderRadius: 100 }}>

            <Feather name="check" size={20} color="#fff" />
          </View>
        </View>


        {/* Repeat 2 */}
        <View style={{ backgroundColor: "red", marginLeft: width * 0.15 }}>


          <Image
            source={line}
            resizeMode='cover'
            style={{ position: 'absolute', transform: [{ translateY: -20 }] }}
          />
        </View>



        <View style={{ margin: width * 0.06, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>

          <View style={{ flexDirection: "row", alignItems: "center" }} >

            <View style={{ backgroundColor: "#F1EFF6", padding: 14, borderRadius: 16, }}>

              <Image
                source={orderTrack_2}
                resizeMode='cover'
                style={{ width: width * 0.12, height: width * 0.12 }}
              />
            </View>

            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 16 }}>Order Is Being Prepared</Text>

          </View>
          <View style={{ backgroundColor: "#4CD964", padding: 6, borderRadius: 100 }}>

            <Feather name="check" size={20} color="#fff" />
          </View>
        </View>

        {/* Repeat 3 */}
        <View style={{ backgroundColor: "red", marginLeft: width * 0.15 }}>


          <Image
            source={line}
            resizeMode='cover'
            style={{ position: 'absolute', transform: [{ translateY: -20 }] }}
          />
        </View>



        <View style={{ margin: width * 0.06, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>

          <View style={{ flexDirection: "row", alignItems: "center" }} >

            <View style={{ backgroundColor: "#FEF0F0", padding: 14, borderRadius: 16, }}>

              <Image
                source={orderTrack_3}
                resizeMode='cover'
                style={{ width: width * 0.12, height: width * 0.12 }}
              />
            </View>

            <View >
              <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 16 }}>Order Is Being Delivered</Text>
              <Text style={{ fontSize: 14, marginLeft: 16, marginTop: 5 }}>Your delivery agent is coming</Text>
            </View>

          </View>
          <View style={{ backgroundColor: "#4CD964", padding: 6, borderRadius: 100 }}>

            <Feather name="check" size={20} color="#fff" />
          </View>
        </View>


        {/* end Repeat */}

        <View style={{ marginLeft: width * 0.15 }}>


          <Image
            source={line}
            resizeMode='cover'
            style={{ position: 'absolute', transform: [{ translateY: -20 }] }}
          />
        </View>


        {/* google map */}
        <View style={{ height: height * 0.16, alignItems: "center", zIndex: 1 }}>


          <Image
            source={map}
            resizeMode='cover'
          />

        </View>



        <View style={{ backgroundColor: "red", marginLeft: width * 0.15 }}>


          <Image
            source={line}
            resizeMode='cover'
            style={{ position: 'absolute', transform: [{ translateY: -20 }] }}
          />
        </View>



        <View style={{ margin: width * 0.06, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>

          <View style={{ flexDirection: "row", alignItems: "center" }} >

            <View style={{ backgroundColor: "#F0FEF8", padding: 14, borderRadius: 16, }}>

              <View style={{ backgroundColor: "#4CD964", padding: 6, borderRadius: 100 }}>

                <Feather name="check" size={20} color="#fff" />
              </View>
            </View>

            <Text style={{ fontSize: 16, fontWeight: "500", marginLeft: 16 }}>Order Received</Text>

          </View>

          <Entypo name="dots-three-horizontal" size={40} color="#FFE3C9" />
        </View>


      </View>


    </View>
  )
}

const styles = StyleSheet.create({


  up: {

    height: height * 0.2,
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: "#FFA451"
  },

  topIcon: {
    position: "absolute",
    left: width * 0.04,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 18,
    alignSelf: "center"

  },

  topIconText: {
    justifyContent: "center",
    fontSize: 14,

  },

  topText: {
    color: "#fff",
    fontSize: 24,
    alignSelf: "center"

  },

})

