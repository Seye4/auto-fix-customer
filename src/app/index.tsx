import { useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";

import { getHasCompletedCustomerOnboarding } from "../features/onboarding/storage";
import { getIsCustomerAuthenticated } from "@/features/auth/storage";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    let isMounted = true;

    async function routeCustomer() {
      const hasCompletedOnboarding = await getHasCompletedCustomerOnboarding();

      if (!isMounted) {
        return;
      }

      if (!hasCompletedOnboarding) {
        router.replace("/onboarding");
        return;
      }

      const isAuthenticated = await getIsCustomerAuthenticated();

      if (!isMounted) {
        return;
      }

      router.replace(isAuthenticated ? "/(tabs)" : "/login");
    }

    routeCustomer();

    return () => {
      isMounted = false;
    };
  }, [router]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#F97316" />
        <Text style={styles.title}>Preparing Auto-Fix</Text>
        <Text style={styles.subtitle}>
          Checking your onboarding and sign-in status.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFF8F1",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#4B5563",
  },
});
