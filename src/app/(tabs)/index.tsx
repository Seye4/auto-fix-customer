import { StyleSheet, Text, View } from "react-native";

import { DashboardScreen } from "../../features/dashboard/dashboard-screen";

export default function HomeTab() {
  return (
    <DashboardScreen
      eyebrow="Auto-Fix home"
      title="Book roadside help fast"
      description="Request a driver, tow truck, or mechanic from your main customer dashboard."
    >
      <View style={styles.serviceGrid}>
        {["Hire Driver", "Tow Vehicle", "Find Mechanic"].map((service) => (
          <View key={service} style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>{service}</Text>
            <Text style={styles.serviceText}>Tap here to start a new request.</Text>
          </View>
        ))}
      </View>
    </DashboardScreen>
  );
}

const styles = StyleSheet.create({
  serviceGrid: {
    gap: 12,
  },
  serviceCard: {
    padding: 18,
    backgroundColor: "#FFF7ED",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FED7AA",
  },
  serviceTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 6,
  },
  serviceText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#4B5563",
  },
});
