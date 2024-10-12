import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";

import { homeMenu } from "@/constants/home-menu";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={tw`bg-white py-5`}>
      <View style={tw`flex-row justify-between px-4`}>
        <Text style={tw`font-medium text-base`}>My Work</Text>
        <AntDesign name="ellipsis1" size={24} color="gray" />
      </View>

      <View style={tw`mt-7 gap-y-7 px-4`}>
        {homeMenu.map((item) => {
          return (
            <View style={tw`flex-row gap-x-4 items-center`} key={item.title}>
              <View style={tw`bg-[${item.color}] py-2 px-2 rounded-md`}>
                <item.Icon name={item.iconName} size={16} color="white" />
              </View>
              <Text style={tw`text-base`}>{item.title}</Text>
            </View>
          );
        })}
      </View>

      <View style={tw`h-[0.2px] bg-gray-400 mt-7`} />

      <View style={tw`px-4 mt-7 gap-y-6`}>
        <Text style={tw`font-medium text-base`}>Favourties</Text>
        <View style={tw`items-center`}>
          <Text style={tw`text-gray-700 text-center w-[90%] leading-5 text-base`}>
            Add favourite repositories for quick access at any time, without
            having to search
          </Text>
        </View>

        <Pressable
          style={tw`items-center justify-center shadow-sm shadow-black h-12`}
        >
          <Text style={tw`text-blue-600 font-medium`}>ADD FAVOURITES</Text>
        </Pressable>
      </View>

      <View style={tw`h-[0.2px] bg-gray-400 mt-7`} />
    </ScrollView>
  );
};

export default Home;
