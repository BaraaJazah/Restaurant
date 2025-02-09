import { StyleSheet, Text, View, Image, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import {
  Ionicons,
  AntDesign,
  FontAwesome
} from "@expo/vector-icons";
import { dish_2, dish_3, dish_4 } from '../../content/inportImages'
import { useRouter, useLocalSearchParams } from 'expo-router';


const { height, width } = Dimensions.get('window');

export default function AddToBasket() {

  const router = useRouter();

  const [count, setCount] = useState(1);

  const { foodName, price, image } = useLocalSearchParams();

  return (
    <View style={styles.container} >

      <View style={styles.top}>
        <Pressable onPress={() => { router.back() }} style={styles.topIcon} >
          <Ionicons style={{}} name="chevron-back" size={20} color="black" />
          <Text style={styles.topIconText} >Go Back</Text>
        </Pressable>


          <Image
            source={image}
            resizeMode='contain'
            style={styles.topImage}
          />

      </View>
      <View style={styles.down} >
        {/* Down Top part */}
        <View style={{ margin: height * 0.02, }} >
          {/* <Text style={{ fontSize: 32, color: "#27214D", fontWeight: "600" }} >Quinoa Fruit Salad</Text> */}
          <Text style={{ fontSize: 32, color: "#27214D", fontWeight: "600" }} >{foodName}</Text>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.03 }} >

            <View style={{ flexDirection: "row", gap: 10 }}>
              <Pressable onPress={() => { setCount(count - 1) }}>
                <AntDesign name="minuscircleo" size={32} color="black" />
              </Pressable>
              <Text style={{ fontSize: 24 }}>{count}</Text>
              <Pressable onPress={() => { setCount(count + 1) }}>
                <AntDesign name="pluscircleo" size={32} color="#FFA451" />
              </Pressable>

            </View>

            <View style={{ flexDirection: "row", gap: 10 }}>
              <FontAwesome style={{ marginTop: 3 }} name="dollar" size={28} color="black" />
              <Text style={{ fontSize: 24, fontWeight: "400", }}>{price}</Text>
            </View>

          </View>
        </View>


        {/* Down Middle part */}
        <View style={styles.line} ></View>

        <View style={{ margin: height * 0.02 }}>
          <Text style={styles.middlePart}>One Pack Contains:</Text>
          <Text style={{ color: "#27214D", fontSize: 15 }}>Red Quinoa, Lime, Honey, Blueberries, Strawberries, Mango, Fresh mint.</Text>

        </View>


        {/* Down Bottom part */}
        <View style={styles.line} ></View>


        <View style={{ margin: height * 0.02 }}>
          <Text>
            If you are looking for a new fruit salad to eat today, quinoa is the perfect brunch for you. make
          </Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.04, alignItems: "center" }}>
            <AntDesign style={styles.downPartIcon} name="hearto" size={24} color="#FFA451" />

            <Pressable style={styles.downPartBtn} >
              <Text style={{ textAlign: 'center', color: "#FFF", fontSize: 16 }}>Add to basket</Text>
            </Pressable>
          </View>
        </View>


      </View>

    </View>
  )
}
2
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  top: {
    height: height * 0.45,
    justifyContent: 'center',
    textAlign: "center",
    backgroundColor: "#FFA451",
    alignItems: "center"
  },
  topIcon: {
    flexDirection: 'row',
    position: "absolute",
    left: width * 0.05,
    top: width * 0.1,
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 18,


  },
  topIconText: {
    justifyContent: "center",
    fontSize: 14,

  },
  topImage: {
    width: width * 0.4,
    height : width *0.4

  },
  down: {

    height: height * 0.65,
    position: 'relative',
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    transform: [{ translateY: - (height * 0.07) }]



  },

  line: {
    width: width,
    height: 1,
    backgroundColor: "#F3F3F3",
    margin: height * 0.015,
  },

  middlePart: {
    color: "#27214D",
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#FFA451',
    width: width * 0.45,
    marginBottom: height * 0.03,
    paddingBottom: height * 0.02

  },

  downPartBtn: {
    backgroundColor: "#FFA451",
    padding: 20,
    width: width * 0.6,
    borderRadius: 16
  },

  downPartIcon: {
    backgroundColor: "#FFF7F0",
    padding: 20,
    borderRadius: 50,
  },


})