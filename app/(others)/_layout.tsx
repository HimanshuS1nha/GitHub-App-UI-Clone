import { router, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import tw from "twrnc";
import { FontAwesome6 } from "@expo/vector-icons";

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

      <Stack.Screen name="repository" />
    </Stack>
  );
}
