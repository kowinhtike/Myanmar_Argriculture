import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Platform,Dimensions } from "react-native";

const TabsLayout = () => {
  const { width, height } = Dimensions.get('window'); // Screen size information
  const headerShown = Platform.OS === 'web' && width > 600 ? false : true;
  return (
    //to replace more icons  visit this website https://ionic.io/ionicons
    <Tabs screenOptions={{
      tabBarStyle:headerShown ? {} : {position:'absolute',top:0}
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "အကြောင်းအရာများ",
          headerStyle: { backgroundColor: "#067528" },
          headerShown:headerShown,
          headerTitleStyle: {
            color: "white",
          },
          title: "Home",
          tabBarActiveTintColor:"#067528",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? "#067528" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          headerTitle: "သိမ်းဆည်းထားသည်များ",
          headerStyle: { backgroundColor: "#067528" },
          headerShown:headerShown,
          headerTitleStyle: {
            color: "white",
          },
          title: "Favourite",
          tabBarActiveTintColor:"#067528",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "heart" : "heart-outline"}
              color={focused ? "#067528" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "App အကြောင်း",
          headerStyle: { backgroundColor: "#067528" },
          headerShown:headerShown,
          headerTitleStyle: {
            color: "white",
          },
          title: "About App",
          tabBarActiveTintColor:"#067528",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "help" : "help-outline"}
              color={focused ? "#067528" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
