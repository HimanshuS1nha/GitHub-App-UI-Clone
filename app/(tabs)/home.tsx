import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

import { homeMenu } from "@/constants/home-menu";
import { shortCutIcons } from "@/constants/shortcut-icons";

const Home = () => {
  return (
    <ScrollView contentContainerStyle={tw`bg-white py-4`}>
      <View style={tw`flex-row justify-between px-4`}>
        <Text style={tw`font-medium text-base`}>My Work</Text>
        <AntDesign name="ellipsis1" size={24} color="gray" />
      </View>

      <View style={tw`mt-7 gap-y-6 px-4`}>
        {homeMenu.map((item) => {
          return (
            <Pressable
              style={tw`flex-row gap-x-4 items-center`}
              key={item.title}
              onPress={() => {
                if (item.url) {
                  router.push(item.url as "/repositories");
                }
              }}
            >
              <View style={tw`bg-[${item.color}] py-2 px-2 rounded`}>
                <item.Icon name={item.iconName} size={16} color="white" />
              </View>
              <Text style={tw`text-base`}>{item.title}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={tw`h-[0.4px] bg-gray-400 mt-7`} />

      <View style={tw`px-4 mt-7 gap-y-7`}>
        <Text style={tw`font-medium text-base`}>Favourties</Text>
        <View style={tw`gap-y-4`}>
          <View style={tw`items-center`}>
            <Text
              style={tw`text-gray-700 text-center w-[90%] leading-5 text-base`}
            >
              Add favourite repositories for quick access at any time, without
              having to search
            </Text>
          </View>

          <Pressable
            style={tw`items-center justify-center border-[0.5px] border-gray-400 h-12`}
          >
            <Text style={tw`text-blue-600 font-medium rounded-md`}>
              ADD FAVOURITES
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={tw`h-[0.4px] bg-gray-400 mt-7`} />

      <View style={tw`px-4 mt-7 gap-y-7`}>
        <Text style={tw`font-medium text-base`}>Shortcuts</Text>

        <View style={tw`gap-y-4`}>
          <View style={tw`items-center gap-y-2`}>
            <View style={tw`flex-row items-center gap-x-1`}>
              {shortCutIcons.map((item) => {
                return (
                  <View
                    key={item.iconName}
                    style={tw`p-1.5 bg-[${item.bgColor}] rounded-full`}
                  >
                    <item.Icon
                      name={item.iconName}
                      color={item.color}
                      size={16}
                    />
                  </View>
                );
              })}
            </View>
            <Text style={tw`font-semibold text-base`}>
              The things you need, one tap away
            </Text>
            <Text style={tw`text-gray-700 text-base text-center w-[88%]`}>
              Fast access your list of Issues, Pull Requests, or Discussions
            </Text>
          </View>
          <Pressable
            style={tw`items-center justify-center border-[0.5px] border-gray-400 h-12 rounded-md`}
          >
            <Text style={tw`text-blue-600 font-medium`}>GET STARTED</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
