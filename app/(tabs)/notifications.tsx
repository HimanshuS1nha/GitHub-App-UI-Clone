import { View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "twrnc";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";

import { notifications } from "@/constants/notifications";

const Notifications = () => {
  return (
    <>
      <View
        style={tw`bg-white px-4 pb-3 flex-row gap-x-1.5 border-b-[0.5px] border-b-gray-400`}
      >
        <View
          style={tw`bg-gray-100 flex-row items-center px-3 py-2 rounded-full gap-x-1.5 border border-gray-300`}
        >
          <Text>Inbox</Text>
          <AntDesign name="down" size={15} color="black" />
        </View>
        <View
          style={tw`bg-gray-100 px-3 py-2 rounded-full border border-gray-300`}
        >
          <Text>Unread</Text>
        </View>
        <View
          style={tw`bg-gray-100 flex-row items-center px-3 py-2 rounded-full gap-x-1.5 border border-gray-300`}
        >
          <Text>Repository</Text>
          <AntDesign name="down" size={15} color="black" />
        </View>
      </View>

      <ScrollView>
        {notifications.map((notification) => {
          return (
            <View
              style={tw`bg-white p-4 flex-row justify-between border-b border-b-gray-300`}
              key={notification.id}
            >
              <View style={tw`flex-row gap-x-4 w-[87%]`}>
                <Ionicons name="shield-outline" size={24} color="black" />
                <View style={tw`mt-0.5 gap-y-1`}>
                  <Text style={tw`text-gray-700`}>RandomUser</Text>
                  <Text style={tw`font-semibold w-[50%] text-base`}>
                    {notification.title}
                  </Text>
                  <View style={tw`flex-row gap-x-1.5`}>
                    <FontAwesome
                      name="github-square"
                      size={19}
                      color="black"
                      style={tw`rounded-full`}
                    />
                    <Text style={tw`text-gray-700`}>
                      {notification.content}
                    </Text>
                  </View>
                </View>
              </View>
              <Text style={tw`text-gray-700`}>{notification.time}</Text>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Notifications;
