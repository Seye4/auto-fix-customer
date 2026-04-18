import { PropsWithChildren } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

type DashboardScreenProps = PropsWithChildren<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export function DashboardScreen({
  children,
  description,
  eyebrow,
  title,
}: DashboardScreenProps) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.brand}>Auto-Fix</Text>
          <Text style={styles.eyebrow}>{eyebrow}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <View style={styles.card}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF8F1",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 18,
  },
  hero: {
    borderRadius: 28,
    backgroundColor: "#111827",
    padding: 24,
  },
  brand: {
    fontSize: 20,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  eyebrow: {
    marginTop: 24,
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.6,
    color: "#FDBA74",
  },
  title: {
    marginTop: 10,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "800",
    color: "#FFFFFF",
  },
  description: {
    marginTop: 12,
    fontSize: 16,
    lineHeight: 26,
    color: "#D1D5DB",
  },
  card: {
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderWidth: 1,
    borderColor: "#F3E8D9",
  },
});
