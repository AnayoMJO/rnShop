import { useOrderUpdateSubscription } from "@/api/subscriptions";
import { Stack } from "expo-router";

export default function OrderLayout() {
  useOrderUpdateSubscription()
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Order" }}
      />
    </Stack>
  );
}
