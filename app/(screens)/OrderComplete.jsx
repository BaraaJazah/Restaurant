import { Pressable, StyleSheet, Text, View ,Dimensions} from 'react-native'
import React from 'react'
import {
  FontAwesome,
} from "@expo/vector-icons";
import { useRouter } from 'expo-router';




const { height, width } = Dimensions.get('window');

export default function OrderComplete() {


  const router = useRouter();

  return (
    <View style={{backgroundColor:"#fff" }} >
      <View style={{ height : height , marginTop : height*0.2 ,  alignItems: "center" , }} >
        <View style={styles.checkOutsizeBorder}>
          <View style={styles.checkInsizeBorder} >
            <FontAwesome name="check" size={40} color="#fff" />
          </View>
        </View>
        <Text style={styles.textOne}>Congratulations!!!</Text>
        <Text style={styles.textTwo}>Your order have been taken and is being attended to</Text>
        <Pressable onPress={()=>{router.push("/TrackOrder")}} style={styles.btnOne}>
          <Text style={styles.btnOneText}>Track order</Text>
        </Pressable>
        <Pressable onPress={()=>{router.push("/HomeScreen")}} style={styles.btnTwo}>
          <Text style={styles.btnTwoText}>Continue shopping</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  checkOutsizeBorder:{
    padding : 30 , 
    backgroundColor : "rgba(76, 217, 100, 0.2)" , 
    borderRadius : 100 ,
    borderWidth : 2 , 
    borderColor : "rgb(76, 217, 100)" ,
    marginBottom : height*0.05
  },
  checkInsizeBorder:{
    backgroundColor : "rgb(76, 217, 100)",
    padding : 30 ,
    borderRadius : 100 ,
  
  },

  textOne:{
    fontSize: 32 ,
    fontWeight : '500',
  },
  textTwo:{
    fontSize: 20 ,
    width : width * 0.75 ,
    textAlign :  'center',
    marginVertical : height * 0.05,  


  },
  btnOne:{
    backgroundColor : "#FFA451",
    padding  : 24 ,
    borderRadius  : 14 ,
    paddingHorizontal :  32 ,
    marginBottom : height*0.05 ,
  },
  btnOneText:{
    color : "#fff",
    fontSize : 16 ,

  },
  btnTwo:{
    padding  : 24 ,
    borderRadius  : 14 ,
    paddingHorizontal :  32 ,
    borderWidth : 1,
    borderColor : "#FFA451",
  },
  btnTwoText:{
    color : '#FFA451' ,
    fontSize : 16
  },


})