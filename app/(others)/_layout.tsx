import { router, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { FontAwesome6, AntDesign, Ionicons } from "@expo/vector-icons";

export default function OthersLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="repositories"
        options={{
          title: "",
          headerLeft: () => {
            return (
              <View style={tw`flex-row items-center gap-x-4`}>
                <Pressable onPress={router.back}>
                  <FontAwesome6 name="arrow-left" size={20} color="black" />
                </Pressable>
                <Text style={tw`font-bold text-xl`}>Repositories</Text>
              </View>
            );
          },
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="repository"
        options={{
          title: "",
          headerLeft: () => {
            return (
              <Pressable onPress={router.back}>
                <FontAwesome6 name="arrow-left" size={20} color="black" />
              </Pressable>
            );
          },
          headerRight: () => {
            return (
              <View style={tw`flex-row gap-x-6 items-center`}>
                <AntDesign name="pluscircleo" size={20} color="blue" />
                <Ionicons name="ellipsis-vertical" size={20} color="blue" />
              </View>
            );
          },
          headerStyle: { backgroundColor: "#fafafb" },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
