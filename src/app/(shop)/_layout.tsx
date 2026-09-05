import { FontAwesome } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useAuth } from "../../provider/auth-provider";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  //color: string;
}) {
  return <FontAwesome size={24} {...props} />;
}

export default function ShopLayout() {
  const { session, mounting } = useAuth();

  if (mounting) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center" }}
      />
    );
  }

  if (!session) {
    return <Redirect href="/auth" />;
  }

  return (
    <SafeAreaView edges={["top"]} style={styles.SafeAreaView}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 18 },
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 5,
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="shopping-cart" />;
            },
            title: "Shop",
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="book" />;
            },
            title: "Order",
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: { flex: 1 },
});
