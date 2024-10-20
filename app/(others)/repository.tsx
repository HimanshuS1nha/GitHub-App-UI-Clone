import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import { useLocalSearchParams } from "expo-router";
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome6,
  FontAwesome5,
  Ionicons,
  Octicons,
} from "@expo/vector-icons";

import { repositories } from "@/constants/repositories";

const Repository = () => {
  const { index } = useLocalSearchParams() as unknown as { index: number };
  return (
    <>
      <View style={tw`bg-[#fafafb] py-4 px-4 gap-y-3.5`}>
        <View style={tw`flex-row gap-x-1.5 items-center`}>
          <Image
            source={require("../../assets/images/profile-pic.png")}
            style={tw`w-7 h-7 rounded-full`}
          />
          <Text style={tw`text-gray-700`}>RandomUser</Text>
        </View>

        <Text style={tw`text-xl font-bold`}>{repositories[index].name}</Text>

        <View style={tw`flex-row items-center gap-x-5`}>
          <View style={tw`flex-row items-center gap-x-2.5`}>
            <Feather name="star" size={17} color="gray" />
            <View style={tw`flex-row gap-x-1`}>
              <Text style={tw`font-semibold`}>{repositories[index].stars}</Text>
              <Text style={tw`text-gray-700`}>stars</Text>
            </View>
          </View>

          <View style={tw`flex-row items-center gap-x-2.5`}>
            <FontAwesome6 name="code-fork" size={17} color="gray" />
            <View style={tw`flex-row gap-x-1`}>
              <Text style={tw`font-semibold`}>0</Text>
              <Text style={tw`text-gray-700`}>forks</Text>
            </View>
          </View>
        </View>

        <View style={tw`flex-row gap-x-3 items-center`}>
          <Pressable
            style={tw`items-center justify-center border-[0.5px] border-gray-400 h-12 flex-row gap-x-1.5 rounded-md w-[83%]`}
          >
            <Feather name="star" size={20} color="black" />
            <Text style={tw`font-medium`}>STAR</Text>
          </Pressable>

          <View
            style={tw`bg-gray-100 border border-gray-300 items-center justify-center w-12 rounded-md h-12`}
          >
            <FontAwesome name="bell" size={18} color="blue" />
          </View>
        </View>
      </View>

      <View style={tw`h-[0.6px] bg-gray-400`} />

      <View style={tw`bg-white py-3`}>
        <View style={tw`gap-y-5`}>
          <View style={tw`flex-row justify-between items-center px-4`}>
            <View style={tw`flex-row gap-x-4 items-center`}>
              <View style={tw`p-2 rounded bg-[#22c55e]`}>
                <FontAwesome5 name="dot-circle" size={16} color="white" />
              </View>
              <Text style={tw`text-base`}>Issues</Text>
            </View>

            <Text style={tw`text-gray-700`}>0</Text>
          </View>

          <View style={tw`flex-row justify-between items-center px-4`}>
            <View style={tw`flex-row gap-x-4 items-center`}>
              <View style={tw`p-2 rounded bg-[#2563eb]`}>
                <Ionicons name="git-pull-request" size={16} color="white" />
              </View>
              <Text style={tw`text-base`}>Pull Requests</Text>
            </View>

            <Text style={tw`text-gray-700`}>0</Text>
          </View>

          <View style={tw`flex-row gap-x-4 items-center px-4`}>
            <View style={tw`p-2 rounded bg-[#facc15]`}>
              <FontAwesome5 name="dot-circle" size={16} color="white" />
            </View>
            <Text style={tw`text-base`}>Actions</Text>
          </View>

          <View style={tw`flex-row justify-between items-center px-4`}>
            <View style={tw`flex-row gap-x-4 items-center`}>
              <View style={tw`p-2 rounded bg-[#e5e7eb]`}>
                <FontAwesome5 name="ellipsis-h" size={16} color="black" />
              </View>
              <Text style={tw`text-base`}>More</Text>
            </View>

            <AntDesign name="down" size={12} color="black" />
          </View>
        </View>

        <View style={tw`h-[0.4px] bg-gray-400 mt-4`} />

        <View style={tw`gap-y-5 pt-3`}>
          <View style={tw`flex-row gap-x-4 items-center px-4`}>
            <View style={tw`p-2 rounded bg-[#ffffff]`}>
              <FontAwesome6 name="code-branch" size={16} color="black" />
            </View>
            <View>
              <Text style={tw`text-gray-700`}>Current branch</Text>
              <Text style={tw`text-base font-medium`}>main</Text>
            </View>
          </View>

          <View style={tw`flex-row gap-x-4 items-center px-4`}>
            <View style={tw`p-2 rounded bg-[#e5e7eb]`}>
              <Octicons name="file-code" size={16} color="black" />
            </View>
            <Text style={tw`text-base`}>Code</Text>
          </View>

          <View style={tw`flex-row gap-x-4 items-center px-4`}>
            <View style={tw`p-2 rounded bg-[#e5e7eb]`}>
              <Feather name="git-commit" size={16} color="black" />
            </View>
            <Text style={tw`text-base`}>Commits</Text>
          </View>
        </View>

        <View style={tw`h-[0.4px] bg-gray-400 mt-4`} />

        <View style={tw`pt-3 px-4 flex-row justify-between items-center`}>
          <View style={tw`flex-row gap-x-4 items-center`}>
            <View style={tw`p-2 rounded bg-[#ffffff]`}>
              <Feather name="info" size={16} color="gray" />
            </View>
            <Text style={tw`text-base text-gray-700`}>Readme.md</Text>
          </View>

          <Text style={tw`text-blue-600 font-medium`}>EDIT</Text>
        </View>
      </View>
    </>
  );
};

export default Repository;
