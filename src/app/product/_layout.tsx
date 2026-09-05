import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="slug"
        options={{
          headerShown: true,
          title: "Categories",
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="arrow-back" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
