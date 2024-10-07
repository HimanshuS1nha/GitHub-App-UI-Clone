import { Tabs } from "expo-router";
import React from "react";
import { View, Image } from "react-native";
import { Ionicons, FontAwesome, Octicons } from "@expo/vector-icons";
import tw from "twrnc";

const TabsLayout = () => {
  return (
    <Tabs initialRouteName="home">
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <>
                {focused ? (
                  <Ionicons name="home-sharp" size={size} color={color} />
                ) : (
                  <Ionicons name="home-outline" size={size} color={color} />
                )}
              </>
            );
          },
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <FontAwesome
                name={focused ? "bell" : "bell-o"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused, size }) => {
            return (
              <Octicons
                name={focused ? "telescope-fill" : "telescope"}
                size={size}
                color={color}
              />
            );
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={tw`w-7.5 h-7.5 ${
                  focused ? "border-2 border-blue-500" : ""
                } rounded-full`}
              >
                <Image
                  source={require("../../assets/images/profile-pic.png")}
                  style={tw`w-full h-full rounded-full`}
                />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
