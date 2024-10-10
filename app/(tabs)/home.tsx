import { View, Text, ScrollView } from "react-native";
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
    <ScrollView style={tw`bg-white pt-5 px-4`}>
      <View style={tw`flex-row justify-between`}>
        <Text style={tw`font-medium text-base`}>My Work</Text>
        <AntDesign name="ellipsis1" size={24} color="gray" />
      </View>

      <View style={tw`mt-7 gap-y-7`}>
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
    </ScrollView>
  );
};

export default Home;
