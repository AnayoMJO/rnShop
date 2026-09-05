import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Not Found" }} />
      <Text style={styles.title}>404 — Page not found</Text>
      <Text style={styles.message}>Sorry, we couldn't find that page.</Text>
      <Link href="/" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
