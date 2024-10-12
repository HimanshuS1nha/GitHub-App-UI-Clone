import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import {
  SimpleLineIcons,
  FontAwesome6,
  Ionicons,
  Feather,
} from "@expo/vector-icons";

const Explore = () => {
  return (
    <>
      <View style={tw`bg-white px-4 py-3 gap-y-7`}>
        <Text style={tw`font-medium text-base`}>Discover</Text>

        <View style={tw`flex-row gap-x-4 items-center`}>
          <View style={tw`py-2 px-2 rounded bg-rose-600`}>
            <SimpleLineIcons name="fire" size={16} color="white" />
          </View>
          <Text style={tw`text-base`}>Trending Repositories</Text>
        </View>

        <View style={tw`flex-row gap-x-4 items-center`}>
          <View style={tw`py-2 px-2 rounded bg-purple-600`}>
            <FontAwesome6 name="face-smile" size={16} color="white" />
          </View>
          <Text style={tw`text-base`}>Awesome Lists</Text>
        </View>
      </View>

      <View style={tw`mt-4 px-4`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text style={tw`font-medium text-base`}>Activity</Text>
          <Ionicons name="filter" size={20} color="black" />
        </View>

        <View style={tw`flex-row justify-between items-center mt-6`}>
          <View style={tw`flex-row gap-x-3 items-center`}>
            <View>
              <Image
                source={require("../../assets/images/profile-pic.png")}
                style={tw`w-8 h-8 rounded-full`}
              />
              <View
                style={tw`absolute bg-gray-500 p-1 rounded-full -bottom-1.5 -right-1`}
              >
                <FontAwesome6 name="code-fork" size={13} color="white" />
              </View>
            </View>

            <View style={tw`flex-row gap-x-1.5`}>
              <Text style={tw`font-semibold`}>RandomUser2</Text>
              <Text style={tw`text-gray-700`}>forked a repository</Text>
            </View>
          </View>
          <Text style={tw`text-gray-700`}>10d</Text>
        </View>
      </View>

      <View style={tw`bg-white mt-6 mx-4 p-4 rounded-lg`}>
        <View style={tw`flex-row gap-x-4`}>
          <Image
            source={require("../../assets/images/profile-pic.png")}
            style={tw`w-5 h-5 rounded-full`}
          />
          <Text style={tw`font-semibold`}>RandomUser2 / randomrepository</Text>
        </View>

        <View style={tw`mt-5 flex-row gap-x-5`}>
          <View style={tw`flex-row gap-x-1 items-center`}>
            <Feather name="star" size={20} color="black" />
            <Text style={tw`text-base`}>0</Text>
          </View>

          <View style={tw`flex-row gap-x-2 items-center`}>
            <View style={tw`w-2.5 h-2.5 bg-blue-600 rounded-full`} />
            <Text style={tw`text-base text-gray-700`}>TypeScript</Text>
          </View>
        </View>

        <Pressable
          style={tw`items-center justify-center border-[0.5px] border-gray-400 h-12 mt-4 flex-row gap-x-1.5 rounded-md`}
        >
          <Feather name="star" size={20} color="black" />
          <Text style={tw`font-medium`}>STAR</Text>
        </Pressable>
      </View>
    </>
  );
};

export default Explore;
