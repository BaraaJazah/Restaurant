import { StyleSheet, Text, View, SafeAreaView, Button, TextInput, Dimensions, Pressable,
         Image, FlatList, ScrollView } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import {
    Ionicons,
    AntDesign,
    FontAwesome,
    MaterialIcons
} from "@expo/vector-icons";
import { dish_1, } from '../../content/inportImages'
import { LinearGradient } from 'expo-linear-gradient';
import data from '../../content/CardData'
import PagerView from 'react-native-pager-view';
import { StatusBar } from 'expo-status-bar';
import { useRouter , useLocalSearchParams} from 'expo-router';

const { height, width } = Dimensions.get('window');
export default function HomeScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    
    const [search, onChangeSearch] = useState();
    const ref = useRef();
    const [hoveredButton, setHoveredButton] = useState(0);
    
    const Card = ({ item }) => {

        return (
          <Pressable onPress={()=>{router.push({ pathname: "/AddToBasket", 
                                            params: { foodName: item.foodName , 
                                                        price: item.Price ,
                                                        image : item.imageSrc ,
                                                    }})}} style={[styles.card2, { backgroundColor: "#FFFAEB" }]} >

                <View style={styles.cardImages} >
                    {/* icon love */}
                    <AntDesign style={styles.cardImagesIcon} name="hearto" size={20} color="#FFA451" />
                    <Image
                        source={item.imageSrc}
                        resizeMode='cover'
                    />

                </View >
                <Text style={{ marginTop: 10, color: "#27214D", fontSize: 14 }} >{item.foodName} </Text>
                <View style={styles.cardDown}>
                    <View style={styles.cardDownLeft} >

                        {/* icon Dolar */}
                        <FontAwesome name="dollar" size={15} color="#FFA451" />
                        <Text style={{ color: "#FFA451", fontSize: 14, marginLeft: 5 }}>{item.Price}</Text>

                    </View>
                    <MaterialIcons name="add-circle-outline" size={24} color="#FFA451" />
                </View>
            </Pressable>
        );
    }


    return (
        <View style={styles.container} >
            <View style={styles.topPart}>
                <Text style={styles.topPartText} >Hello Tony, What fruit salad combo do you want today?</Text>
                <View style={styles.topPartView} >
                    <View style={styles.topPartViewInputGR}>
                        <Pressable style={styles.topPartViewInputGRIcon} >
                            <AntDesign name="search1" size={16} color="#86869E" />
                        </Pressable>
                        <TextInput
                            style={styles.topPartViewInputGRInput}
                            onChangeText={search => { onChangeSearch(search) }}
                            value={search}
                            placeholder="Search for fruit salad combos"
                            placeholderTextColor="#86869E"
                        />
                    </View>
                    <Ionicons style={styles.topPartViewIcon} name="repeat" size={24} color="#070648" />
                </View>
            </View>
            {/*  Middle Part  */}
            <LinearGradient colors={['#fff', '#f2f2f2']} style={styles.middlePart}>
                <Text style={styles.middlePartText} >Recommended Combo</Text>
                <View style={styles.middlePartCard}>

                    {/*  start card */}
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <Pressable onPress={  ()=>  { router.push({ pathname: "/AddToBasket", 
                                                params: { foodName: item.foodName , 
                                                          price: item.Price ,
                                                          image : item.imageSrc ,
                                                          } }) } } style={[styles.card, {}]} >

                                    <View style={styles.cardImages} >
                                        {/* icon love */}
                                        <AntDesign style={styles.cardImagesIcon} name="hearto" size={20} color="#FFA451" />
                                        <Image
                                            source={item.imageSrc}
                                            resizeMode='cover'
                                        />

                                    </View >
                                    <Text style={{ marginTop: 10, color: "#27214D", fontSize: 14 }} >{item.foodName}</Text>
                                    <View style={styles.cardDown}>
                                        <View style={styles.cardDownLeft} >

                                            {/* icon Dolar */}
                                            <FontAwesome name="dollar" size={15} color="#FFA451" />
                                            <Text style={{ color: "#FFA451", fontSize: 14, marginLeft: 5 }}>{item.Price}</Text>

                                        </View>
                                        <MaterialIcons name="add-circle-outline" size={24} color="#FFA451" />
                                    </View>
                                </Pressable>
                            );
                        }}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />
                    {/*  End card */}

                    {/* scroll */}
                </View>

            </LinearGradient>

            {/*  Down Part  */}

            <LinearGradient colors={['#f2f2f2', '#fff']} style={styles.downPart}>
                {/* pager */}
                <View style={styles.PagerViewBtns}>
                    <Pressable  style={styles.pagerBtns}
                        onPress={() => ref.current?.setPage(0) }
                        onPressIn={() => setHoveredButton(0)}
                    >
                        <Text style={[styles.pagerBtnText, hoveredButton === 0 && styles.hover]} > Hottest </Text>
                    </Pressable>
                    <Pressable style={styles.pagerBtns}
                        onPress={() => ref.current?.setPage(1)}
                        onPressIn={() => setHoveredButton(1)}
                    >
                        <Text style={[styles.pagerBtnText, hoveredButton === 1 && styles.hover]}> Popular </Text>
                    </Pressable>
                    <Pressable style={styles.pagerBtns}
                        onPress={() => ref.current?.setPage(2)}
                        onPressIn={() => setHoveredButton(2)}
                    >
                        <Text style={[styles.pagerBtnText, hoveredButton === 2 && styles.hover]}> New combo </Text>
                    </Pressable>
                    <Pressable style={styles.pagerBtns}
                        onPress={() => ref.current?.setPage(3)}
                        onPressIn={() => setHoveredButton(3)}
                    >
                        <Text style={[styles.pagerBtnText, hoveredButton === 3 && styles.hover]}> Top </Text>
                    </Pressable>

                </View>
                <PagerView
                    style={styles.PagerView}
                    ref={ref}
                    initialPage={0}
                    onPageScroll={(e) => console.log(e)}
                    onPageSelected={(e) => console.log(e)}
                    onPageScrollStateChanged={(e) => console.log(e)}
                >
                    <View key="0">
                        <FlatList
                            data={data}
                            renderItem={Card}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View>
                    <View key="2">
                        <FlatList
                            data={data}
                            renderItem={Card}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View>
                    <View key="3">
                        <FlatList
                            data={data}
                            renderItem={Card}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View>
                    <View key="1">
                        <FlatList
                            data={data}
                            renderItem={Card}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        />
                    </View>
                </PagerView>

                <StatusBar style="auto" />
            </LinearGradient>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#fff",

    },
    //  Top Part
    topPart: {
        height: height * 0.20,

    },
    topPartText: {
        color: '#27214D',
        fontSize: 20,
        margin: 24,
        width : width *0.7

    },
    topPartView: {

        margin: 24,
        marginTop: 0,
        marginBottom: 0,
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: 'center',
    },
    topPartViewInputGR: {

        flexDirection: 'row',
        backgroundColor: "#F3F4F9",
        width: width * 0.75,
        padding: 16,
        borderRadius: 16,
        alignItems: 'center'
    },
    topPartViewInputGRInput: {

        fontSize: 14,
        color: '#86869E',

    },
    topPartViewInputGRIcon: {
        marginRight: 10
    },
    //  Middle part
    middlePart: {
        height: height * 0.38,
        marginBottom: 0,


    },
    middlePartText: {

        color: "#27214D",
        fontSize: 24,
        margin: 24,
        fontWeight: '500'

    },
    middlePartCard: {

        flexDirection: 'row',
        justifyContent: "center",
    },
    card: {
        backgroundColor: "#fff",
        width: width * 0.42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 14,
        marginLeft: width * 0.04,
        marginRight: width * 0.04

    },
    cardImagesIcon: {
        position: "relative",
        textAlign: 'right',
        transform: [{ translateX: 25 }, { translateY: 20 }],

    },
    cardDown: {
        flexDirection: "row",

        justifyContent: 'space-between',
        width: "80%",

        marginTop: 10,
        marginBottom: 10,

    },
    cardDownLeft: {
        flexDirection: "row",
        alignItems: 'center'
    },
    downPart: {
        height: height * 0.40,
        flex: 1,

    },
    PagerViewBtns: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 0.2,
    },

    pagerBtns: {
        marginTop: 0,

    },

    pagerBtnText: {
        fontSize: 16,


    },

    PagerView: {
        height: height * 0.25,
        flex: 0.75,
        // margin : 24 ,
        marginBottom: 10,



    },


    card2: {
        width: width * 0.42,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 14,
        marginLeft: width * 0.04,
        marginRight: width * 0.04

    },

    hover: {

        fontSize : 18 ,
        fontWeight : '500',
        borderBottomColor :"#F08626" ,
        borderBottomWidth :1 ,



    },


})