import { Text, Pressable, Image, View, Dimensions } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Drawer } from "expo-router/drawer";
import { DrawerItemList } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { logo } from "../../content/inportImages";

const { height, width } = Dimensions.get("window");
export default function Layout() {
  const router = useRouter(); //

  return (
    <Drawer
      screenOptions={({ navigation }) => ({
        headerLeft: (props) => (
          <MaterialIcons
            style={{ marginTop: 25, marginLeft: 15, textAlign: "center" }}
            name="format-align-center"
            onPress={navigation.toggleDrawer}
            size={24}
            color="black"
          />
        ),
      })}
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: height * 0.4,
                marginTop: 30,
              }}
            >
              <Image
                source={logo} // come from props
                resizeMode="cover" // enum('cover', 'contain', 'stretch', 'repeat', 'center') defualt 'cover'
                style={{ width : width*0.25, height : width*0.35 }}
              />
              <View style={{ width : width*0.5, marginVertical: 20,backgroundColor :"#F6851F" , padding : 14 ,borderTopLeftRadius : 16 , borderBottomRightRadius : 14}}>
                <Text style={{ color : "#fff" ,textAlign :"center" }}>Fruit Hub</Text>
              </View>
            </View>

            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        // component={Profile}
        options={{
          drawerLabel: "Home",
          title: "",

          drawerIcon: () => (
            <SimpleLineIcons name="settings" size={20} color="#808080" />
          ),

          headerRight: () => (
            <Pressable
              onPress={() => {
                router.push("MyBasket");
              }}
              title="profile"
              color="#00cc00"
              style={{ marginTop: 25, marginRight: 15, textAlign: "center" }}
            >
              <FontAwesome
                name="shopping-basket"
                size={20}
                color="#FFA451"
                style={{ textAlign: "center" }}
              />
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 10,
                  color: "#27214D",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                My basket
              </Text>
            </Pressable>
          ),
        }}
      />

      <Drawer.Screen
        name="MyBasket"
        // component={Profile}

        options={{
          drawerLabel: "My Basket",
          title: "",
          headerShown: false,

          drawerIcon: () => (
            <SimpleLineIcons name="settings" size={20} color="#808080" />
          ),
        }}
      />

      <Drawer.Screen
        name="TrackOrder"
        // component={Profile}
        options={{
          drawerLabel: "Track Order",
          headerShown: false,

          drawerIcon: () => (
            <SimpleLineIcons name="settings" size={20} color="#808080" />
          ),
          
        }}

      />




      <Drawer.Screen
        name="OrderComplete"
        // component={Profile}
        options={{
          drawerLabel: "Order Complete",
          headerShown: false,
          drawerItemStyle: { display: 'none' }

        }}
      />

      <Drawer.Screen
        name="AddToBasket"
        // component={Profile}
        options={{
          drawerLabel: "hidden",
          headerShown: false,
          drawerItemStyle: { display: 'none' }

        }}
      />
    </Drawer>
  );
}
