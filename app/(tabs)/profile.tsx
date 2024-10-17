import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

const Profile = () => {
  return (
    <>
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
    </>
  );
};

export default Profile;
