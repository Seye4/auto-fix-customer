import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { DashboardScreen } from "../../features/dashboard/dashboard-screen";
import { setIsCustomerAuthenticated } from "../../features/auth/storage";

export default function ProfileTab() {
  const router = useRouter();

  async function handleLogout() {
    await setIsCustomerAuthenticated(false);
    router.replace("/login");
  }

  return (
    <DashboardScreen
      eyebrow="Customer profile"
      title="Manage your account"
      description="Update your customer details, preferences, and quick actions from one place."
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Account actions</Text>
        <Text style={styles.cardText}>
          Add profile editing, saved vehicles, and emergency contacts here later.
        </Text>

        <Pressable onPress={handleLogout} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </Pressable>
      </View>
    </DashboardScreen>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 22,
    backgroundColor: "#111827",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#D1D5DB",
    marginBottom: 18,
  },
  button: {
    minHeight: 50,
    borderRadius: 16,
    backgroundColor: "#F97316",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
