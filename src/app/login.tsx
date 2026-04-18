import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Link, useRouter } from "expo-router";

import { setIsCustomerAuthenticated } from "../features/auth/storage";

export default function LoginScreen() {
  const router = useRouter();

  async function handleLogin() {
    await setIsCustomerAuthenticated(true);
    router.replace("/(tabs)");
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View>
          <Text style={styles.brand}>Auto-Fix</Text>
          <Text style={styles.eyebrow}>Customer login</Text>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.description}>
            Sign in to request a driver, tow truck, or mechanic and manage your bookings.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Login to continue</Text>

          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email address"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            style={styles.input}
          />

          <Pressable onPress={handleLogin} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </Pressable>

          <Link href="/register" style={styles.secondaryLink}>
            Create a new account
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF8F1",
  },
  screen: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 28,
  },
  brand: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
  },
  eyebrow: {
    marginTop: 30,
    fontSize: 14,
    fontWeight: "700",
    color: "#F97316",
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  title: {
    marginTop: 10,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: "800",
    color: "#111827",
  },
  description: {
    marginTop: 12,
    fontSize: 17,
    lineHeight: 28,
    color: "#4B5563",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: "#F3E8D9",
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 18,
  },
  input: {
    minHeight: 56,
    borderRadius: 18,
    backgroundColor: "#F9FAFB",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#111827",
    marginBottom: 14,
  },
  primaryButton: {
    minHeight: 56,
    borderRadius: 18,
    backgroundColor: "#F97316",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  secondaryLink: {
    marginTop: 18,
    fontSize: 16,
    fontWeight: "600",
    color: "#0F766E",
    textAlign: "center",
  },
});
