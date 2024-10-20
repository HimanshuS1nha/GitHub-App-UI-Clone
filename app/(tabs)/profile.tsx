import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import { router } from "expo-router";

import { repositories } from "@/constants/repositories";

const Profile = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={tw`bg-white py-5 px-4`}>
        <View style={tw`flex-row gap-x-4 items-center`}>
          <Image
            source={require("../../assets/images/profile-pic.png")}
            style={tw`w-16 h-16 rounded-full`}
          />
          <View style={tw`gap-y-1`}>
            <Text style={tw`font-bold text-2xl`}>Random User</Text>
            <Text style={tw`text-gray-700`}>RandomUser • he/him</Text>
          </View>
        </View>

        <View
          style={tw`bg-gray-100 flex-row justify-between px-2.5 py-2 rounded-lg mt-5 items-center`}
        >
          <View style={tw`flex-row gap-x-3 items-center`}>
            <Entypo name="emoji-happy" size={18} color="gray" />
            <Text style={tw`text-gray-700 text-base`}>Set your status</Text>
          </View>

          <MaterialIcons name="edit" size={18} color="gray" />
        </View>

        <View style={tw`gap-y-2 mt-7`}>
          <View style={tw`flex-row items-center gap-x-3`}>
            <Feather name="link" size={18} color="gray" />
            <Text style={tw`font-bold text-base`}>
              https://my-portfolio-website.dev
            </Text>
          </View>

          <View style={tw`flex-row items-center gap-x-3`}>
            <FontAwesome5 name="linkedin" size={18} color="gray" />
            <Text style={tw`font-bold text-base ml-1`}>in/random-user</Text>
          </View>

          <View style={tw`flex-row items-center gap-x-3`}>
            <FontAwesome5 name="youtube" size={18} color="gray" />
            <Text style={tw`font-bold text-base -ml-0.5`}>@CodingChange</Text>
          </View>

          <View style={tw`flex-row gap-x-3 items-center`}>
            <Feather name="user" size={18} color="gray" />
            <View style={tw`flex-row gap-x-1 items-center`}>
              <Text style={tw`font-semibold text-base`}>10</Text>
              <Text style={tw`text-gray-700 text-base`}>followers</Text>
              <Text style={tw` text-base`}>•</Text>
              <Text style={tw`font-semibold text-base`}>6</Text>
              <Text style={tw`text-gray-700 text-base`}>following</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={tw`bg-white mt-7 py-4`}>
        <View style={tw`flex-row gap-x-3 items-center px-4`}>
          <Octicons
            name="pin"
            size={20}
            color="black"
            style={{ transform: [{ rotate: "90deg" }] }}
          />
          <Text style={tw`text-base font-semibold`}>Pinned</Text>
        </View>

        <ScrollView
          contentContainerStyle={tw`mt-4 px-4`}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {repositories.map((repository, i) => {
            return (
              <Pressable
                key={repository.name}
                style={tw`p-4 rounded border border-gray-300 mr-4 w-68 h-36 gap-y-2`}
                onPress={() =>
                  router.push({ pathname: "/repository", params: { index: i } })
                }
              >
                <View style={tw`flex-row gap-x-2`}>
                  <Image
                    source={require("../../assets/images/profile-pic.png")}
                    style={tw`w-5 h-5 rounded-full`}
                  />
                  <Text style={tw`text-gray-700`}>RandomUser</Text>
                </View>
                <Text style={tw`text-base font-semibold`}>
                  {repository.name}
                </Text>

                <View
                  style={tw`absolute bottom-4 left-3.5 w-full flex-row gap-x-2 items-center`}
                >
                  <FontAwesome
                    name="star"
                    size={20}
                    style={tw`text-yellow-400`}
                  />
                  <Text style={tw`text-gray-700`}>{repository.stars}</Text>
                  <View
                    style={tw`w-2.5 h-2.5 bg-[${repository.color}] rounded-full`}
                  />
                  <Text style={tw`text-gray-700 text-base`}>
                    {repository.language}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={tw`h-[0.4px] bg-gray-400 mt-4`} />

        <View style={tw`mt-4 gap-y-5`}>
          <Pressable
            style={tw`flex-row justify-between items-center px-4`}
            onPress={() => router.push("/repositories")}
          >
            <View style={tw`flex-row gap-x-4 items-center`}>
              <View style={tw`p-2 rounded bg-[#1f2937]`}>
                <AntDesign name="book" size={16} color="white" />
              </View>
              <Text style={tw`text-base`}>Repositories</Text>
            </View>

            <Text style={tw`text-gray-700`}>3</Text>
          </Pressable>

          <View style={tw`flex-row justify-between items-center px-4`}>
            <View style={tw`flex-row gap-x-4 items-center`}>
              <View style={tw`p-2 rounded bg-[#ea580c]`}>
                <Octicons name="organization" size={16} color="white" />
              </View>
              <Text style={tw`text-base`}>Organizations</Text>
            </View>

            <Text style={tw`text-gray-700`}>0</Text>
          </View>

          <View style={tw`flex-row justify-between items-center px-4`}>
            <View style={tw`flex-row gap-x-4 items-center`}>
              <View style={tw`p-2 rounded bg-[#facc15]`}>
                <AntDesign name="staro" size={16} color="white" />
              </View>
              <Text style={tw`text-base`}>Starred</Text>
            </View>

            <Text style={tw`text-gray-700`}>36</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
