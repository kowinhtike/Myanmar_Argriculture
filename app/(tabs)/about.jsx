import {
  Image,
  Text,
  TouchableOpacity,
  View,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { aboutStyles } from "../styles/aboutStyles";
import { useEffect } from "react";

const about = () => {

  const [fontsLoaded] = useFonts({
    CustomFont: require("../../assets/fonts/Poppins-Regular.ttf"), // Update with your font path and name
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View style={aboutStyles.root}>
      <View style={aboutStyles.header}>
        <View style={aboutStyles.headerLeft}>
          <Text
            style={aboutStyles.headerTitle}
          >
            Application Developer
          </Text>
          <Text style={aboutStyles.headerSubTitle}>
            Ko Win Htike
          </Text>
        </View>
        <Image
          style={aboutStyles.profile}
          source={require("../../assets/images/developer.jpg")}
        />
      </View>
      <View style={aboutStyles.container}>
        <Text style={aboutStyles.title}>ရည်ရွယ်ချက်</Text>
        <Text>
          {" "}
          စိုက်ပျိူးရေးနှင့်ဆိုင်သော ဗဟုသုတများနှင့် ခေတ်မှီ နည်းပညာများကို
          အများသူငှာ အခမဲ့လေ့လာနိုင်စေရန် ရည်ရွယ်ပြီး ကိုဝင်းထိုက်မှ Develop
          လုပ်ပေးထားခြင်းဖြစ်ပါတယ်။{" "}
        </Text>
      </View>
      <View style={aboutStyles.container}>
        <Text style={aboutStyles.title}>အသွင်အပြင်များ</Text>
        <Text>
          {" "}
          မေးခွန်းများကို ဖော်ပြထားသော စာမျက်နာနှင့် နှင့် မိမိသဘောကျလို့
          သိမ်းဆည်းထားသော မေးခွန်းများကို ပြန်လည်ကြည့်ရှုနိုင်သည့် စာမျက်နာတို့
          ပါဝင်ပါသည်။{" "}
        </Text>
      </View>
      <View style={aboutStyles.container}>
        <TouchableOpacity
          style={aboutStyles.link}
          onPress={() => {
            Linking.openURL(
              "https://www.facebook.com/winhtikeit?mibextid=LQQJ4d"
            );
          }}
        >
          <Ionicons name="logo-facebook" size={25} color={"blue"} />
          <Text style={aboutStyles.linkText}>
            {" "}
            Contact me in facebook{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={aboutStyles.container}>
        <Text style={aboutStyles.title}>ဒေတာ ကိုးကားချက်</Text>
        <Text>
          Title : Myanmar-Agriculture-1K {"\n"}
          Author : Min Si Thu, Khin Myat Noe {"\n"}
          Version : 1 {"\n"}
          Date : 2024-08-14
        </Text>
        <TouchableOpacity
          style={aboutStyles.link}
          onPress={() => {
            Linking.openURL(
              "https://github.com/MinSiThu/Myanmar-Agriculture-1K"
            );
          }}
        >
          <Ionicons name="logo-github" size={25} color={"black"} />
          <Text style={[aboutStyles.linkText,{color:"black"}]}>
            {" "}
            ဆက်လက်လေ့လာရန် ...
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default about;
