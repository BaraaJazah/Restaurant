import { StyleSheet, Text, View, Pressable, Dimensions, Image, FlatList, Modal, StatusBar, TextInput } from 'react-native'
import React, { useState } from 'react'
import {
  Ionicons,
  AntDesign,
  FontAwesome
} from "@expo/vector-icons";

import { dish_1, dish_2, dish_3 } from '../../content/inportImages'
import data from '../../content/BasketCard'
import { useRouter } from 'expo-router';

const { height, width } = Dimensions.get('window');

export default function MyBasket() {

  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const [modalPayVisible, setModalPayVisible] = useState(false);

  const [phone, onChangePhone] = useState("");
  const [address, onChangeAddress] = useState("");

  const [cardName, onChangeCardName] = useState("");
  const [cardNumber, onChangeCardNumber] = useState("");
  const [date, onChangeDate] = useState("");
  const [ccv, onChangeCcv] = useState("");
  const Card = ({ item }) => {


    return (

      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 15 }} >
          <View style={styles.middleLeft} >
            <View style={styles.middleLeftImage} >
              <Image
                source={item.imageSrc}
                resizeMode='cover'
                style={{ width: width * 0.15, height: width * 0.15 }}
              />
            </View>
            <View style={{ marginLeft: 20, justifyContent: "center" }} >

              <Text style={{ fontSize: 16, fontWeight: '500' }} >{item.foodName}</Text>
              <Text style={{ fontSize: 14, marginTop: 6 }}>{item.packerNum} packs</Text>

            </View>
          </View>
          <View style={styles.middleRight}>
            <FontAwesome name="dollar" size={20} color="black" />
            <Text style={{ fontSize: 16, marginLeft: 5 }}>{item.Price}</Text>
          </View>

        </View>
        <View style={styles.line} ></View>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: "#fff", height: height * 1.2 }}>


      <View style={styles.up} >
        <View style={styles.topIcon}>

          <Pressable onPress={()=>{router.back()}} style={{ flexDirection: 'row', }}  >
            <Ionicons style={{}} name="chevron-back" size={20} color="black" />
            <Text style={styles.topIconText} >Go Back</Text>
          </Pressable>
        </View>
        <Text style={styles.topText}>
          My Basket
        </Text>
      </View>


      <View style={{ backgroundColor: "#fff", height: height * 0.6, marginTop: 30 }}>


        <FlatList
          data={data}
          style={styles.scroll}
          showsHorizontalScrollIndicator={false}
          renderItem={Card}
          keyExtractor={(item) => item.id}
        />

      </View>



      <View style={{ backgroundColor: "#fff" }}>

        <View style={{ margin: 15, }}>

          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: height * 0.04, alignItems: "center" }}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>Total</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FontAwesome name="dollar" size={24} color="black" />
                <Text style={{ fontSize: 24, marginLeft: 6, fontWeight: '600' }}>20000</Text>

              </View>
            </View>

            <Pressable onPress={() => { setModalVisible(!modalVisible) }} style={styles.downPartBtn} >
              <Text style={{ textAlign: 'center', color: "#FFF", fontSize: 16 }}>Checkout</Text>
            </Pressable>
          </View>
        </View>

      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <StatusBar barStyle='dark-content' //'dark-content'
          hidden={false}
          backgroundColor="rgba(0, 0, 0 , 0.3)"
        />

        <View style={{ backgroundColor: "rgba(0, 0, 0 , 0.3)", height: height }}>

          <View style={styles.modal}>
            <Pressable
              style={styles.closeIcon}
              onPress={() => setModalVisible(!modalVisible)}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>

            <View style={[styles.group, { marginTop: 40 }]}>
              <Text style={styles.groupText}>Delivery address</Text>
              <TextInput
                style={styles.groupInput}
                onChangeText={(address) => { onChangeAddress(address) }}
                value={address}
                placeholder="10th avenue, Lekki, Lagos State"
                placeholderTextColor="#C2BDBD"
              />
            </View>
            <View style={styles.group}>
              <Text style={styles.groupText}>Number we can call</Text>
              <TextInput
                style={styles.groupInput}
                onChangeText={(phone) => { onChangePhone(phone) }}
                value={phone}
                placeholder="09090605708"
                placeholderTextColor="#C2BDBD"
                keyboardType="numeric"

              />
            </View>
            <View style={[styles.btnsGroup ,{justifyContent : "space-around" , marginTop : 20}]}>
              <Pressable onPress={() => { setModalVisible(!modalVisible); router.push("/OrderComplete") }} style={styles.btn}>
                <Text style={styles.btnText}>Pay on delivery</Text>
              </Pressable>
              <Pressable onPress={() => { setModalVisible(!modalVisible);  setModalPayVisible(!modalPayVisible);  }} style={styles.btn}>
                <Text style={styles.btnText}>Pay with card</Text>
              </Pressable>
            </View>
          </View>
        </View>

      </Modal>



      <Modal
        animationType="slide"
        transparent={true}
        visible={modalPayVisible}
      >
        <StatusBar barStyle='dark-content' //'dark-content'
          hidden={false}
          backgroundColor="rgba(0, 0, 0 , 0.3)"
        />
        <View style={{ backgroundColor: "rgba(0, 0, 0 , 0.3)", height: height }}>
          <View style={[styles.modal, { height: height * 0.65 }]}>
            <Pressable
              style={[styles.closeIcon]}
              onPress={() => setModalPayVisible(!modalPayVisible)}>
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
            <View style={[styles.group, { marginHorizontal: 20, margin: 0, justifyContent: "center", flex: 0.25, marginTop: 10 }]}>
              <Text style={styles.groupText}>Card Holders Name</Text>
              <TextInput
                style={[styles.groupInput, { padding: height * 0.02 }]}
                onChangeText={(cardName) => { onChangeCardName(cardName) }}
                value={cardName}
                placeholder="Beraa ceze"
                placeholderTextColor="#C2BDBD"
              />
            </View>
            <View style={[styles.group, { marginHorizontal: 20, margin: 0, justifyContent: "center", flex: 0.25 }]}>
              <Text style={styles.groupText}>Card Number</Text>
              <TextInput
                style={[styles.groupInput, { padding: height * 0.02 }]}
                onChangeText={(cardNumber) => { onChangeCardNumber(cardNumber) }}
                value={cardNumber}
                placeholder="1234 5678 9012 1314"
                placeholderTextColor="#C2BDBD"
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.group, { marginHorizontal: 20, margin: 0, flex: 0.25, flexDirection: "row", justifyContent: "space-around" }]}>
              <View>
                <Text style={styles.groupText}>Date</Text>
                <TextInput
                  style={[styles.groupInput, { width: width * 0.3, padding: height * 0.02 }]}
                  onChangeText={(date) => { onChangeDate(date) }}
                  value={date}
                  placeholder="10/30"
                  placeholderTextColor="#C2BDBD"
                  keyboardType="numeric"

                />
              </View>
              <View  >
                <Text style={styles.groupText}>CCV</Text>
                <TextInput
                  style={[styles.groupInput, { width: height * 0.15, padding: height * 0.02 }]}
                  onChangeText={(ccv) => { onChangeCcv(ccv) }}
                  value={ccv}
                  placeholder="123"
                  placeholderTextColor="#C2BDBD"

                />
              </View>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: width, flex: 0.25 }} >

              <View style={[styles.btnsGroup, { padding: height * 0.03, backgroundColor: "#FFA451", borderTopLeftRadius: 20, borderTopRightRadius: 20 }]}>
                <Pressable onPress={() => { setModalPayVisible(!modalPayVisible); router.push("/OrderComplete") }} style={[styles.btn, { backgroundColor: "#fff" }]}>
                  <Text style={styles.btnText}>Complete Order</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({


  up: {

    height: height * 0.2,
    justifyContent: 'center',
    flexDirection: "row",
    backgroundColor: "#FFA451",
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

  middleLeft: {
    flexDirection: "row",

  },

  middleLeftImage: {
    backgroundColor: "#FEF0F0",   // #
    padding: 10,
    borderRadius: 16
  },

  middleRight: {
    flexDirection: "row",

  },

  line: {
    width: width,
    height: 1,
    backgroundColor: "#F3F3F3",
    margin: height * 0.015,
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

  modal: {
    height: height * 0.6,
    backgroundColor: '#fff',
    bottom: 0,
    position: "absolute",
    width: width,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

  },

  closeIcon: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -70 }],
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"

  },
  group: {
    margin: height * 0.03,
  },
  groupText: {
    fontSize: height * 0.025,
    color: "#27214D",
    marginBottom: height * 0.02
  },
  groupInput: {
    backgroundColor: "#F3F1F1",
    fontSize: height * 0.02,
    padding: height * 0.01,
    borderRadius: 12,
    marginTop: height * 0.01,
    color: "#C2BDBD",

  },

  btnsGroup: {
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: height*0.04

  },
  btn: {
    padding: height * 0.02,
    borderColor: "#FFA451",
    borderWidth: 1,
    borderRadius: 14,

  },
  btnText: {
    color: "#FFA451",
    fontSize: height * 0.02

  }

})