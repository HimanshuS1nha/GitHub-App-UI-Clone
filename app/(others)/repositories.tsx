import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

import { repositories } from "@/constants/repositories";

const Repositories = () => {
  return (
    <>
      <View
        style={tw`bg-white px-4 pb-3 flex-row gap-x-1.5 border-b-[0.5px] border-b-gray-400`}
      >
        <View
          style={tw`bg-gray-100 flex-row items-center px-2.5 py-1 rounded-full gap-x-1.5 border border-gray-300`}
        >
          <Text>All</Text>
          <AntDesign name="down" size={12} color="black" />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`bg-white py-4 gap-y-6`}
      >
        {repositories.map((repository, i) => {
          return (
            <Pressable
              key={repository.name}
              style={tw`px-3 flex-row items-center gap-x-4`}
              onPress={() =>
                router.push({ pathname: "/repository", params: { index: i } })
              }
            >
              <Image
                source={require("../../assets/images/profile-pic.png")}
                style={tw`w-9 h-9 rounded-full`}
              />
              <View style={tw`gap-y-0.5`}>
                <Text style={tw`text-gray-700`}>RandomUser</Text>
                <Text style={tw`text-lg font-medium`}>{repository.name}</Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Repositories;
