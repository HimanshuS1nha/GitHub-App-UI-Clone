import { Tabs } from "expo-router";
import React from "react";
import { View, Image, Text } from "react-native";
import {
  Ionicons,
  FontAwesome,
  Octicons,
  AntDesign,
  SimpleLineIcons,
} from "@expo/vector-icons";
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
          headerTitle: ({ children }) => {
            return <Text style={tw`font-bold text-xl`}>{children}</Text>;
          },
          headerRight: () => {
            return (
              <View style={tw`flex-row gap-x-6 items-center pr-4`}>
                <AntDesign name="search1" size={20} color="blue" />
                <AntDesign name="pluscircleo" size={20} color="blue" />
                <Ionicons name="ellipsis-vertical" size={20} color="blue" />
              </View>
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
          headerTitle: ({ children }) => {
            return <Text style={tw`font-bold text-xl`}>{children}</Text>;
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
          headerTitle: ({ children }) => {
            return <Text style={tw`font-bold text-xl`}>{children}</Text>;
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
          headerTitle: "",
          headerRight: () => {
            return (
              <View style={tw`flex-row gap-x-6 items-center pr-4`}>
                <SimpleLineIcons name="share" size={20} color="blue" />
                <Ionicons name="settings-outline" size={22} color="blue" />
              </View>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
