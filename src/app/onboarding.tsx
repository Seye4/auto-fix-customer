import { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { onboardingSlides } from "../features/onboarding/data";
import { setHasCompletedCustomerOnboarding } from "../features/onboarding/storage";

export default function OnboardingScreen() {
  const router = useRouter();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slide = onboardingSlides[currentSlideIndex];
  const isLastSlide = currentSlideIndex === onboardingSlides.length - 1;

  async function completeOnboarding() {
    await setHasCompletedCustomerOnboarding(true);
    router.replace("/register");
  }

  async function handleNext() {
    if (!isLastSlide) {
      setCurrentSlideIndex((previousIndex) => previousIndex + 1);
      return;
    }

    await completeOnboarding();
  }

  async function handleSkip() {
    await completeOnboarding();
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <View style={styles.topRow}>
          <Text style={styles.brand}>Auto-Fix</Text>
          {!isLastSlide ? (
            <Pressable onPress={handleSkip}>
              <Text style={styles.skipText}>Skip</Text>
            </Pressable>
          ) : (
            <View style={styles.skipPlaceholder} />
          )}
        </View>

        <View style={[styles.heroCard, { backgroundColor: slide.highlight }]}>
          <View style={[styles.heroAccent, { backgroundColor: slide.accent }]} />
          <Text style={[styles.eyebrow, { color: slide.accent }]}>{slide.eyebrow}</Text>
          <Text style={styles.title}>{slide.title}</Text>
          <Text style={styles.description}>{slide.description}</Text>

          <View style={styles.statsCard}>
            <Text style={styles.statsLabel}>{slide.statsLabel}</Text>
            <Text style={styles.statsValue}>{slide.statsValue}</Text>
          </View>
        </View>

        <View style={styles.progressRow}>
          {onboardingSlides.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.progressDot,
                index === currentSlideIndex && [
                  styles.progressDotActive,
                  { backgroundColor: slide.accent },
                ],
              ]}
            />
          ))}
        </View>

        <View style={styles.bottomPanel}>
          <Text style={styles.stepLabel}>
            Screen {currentSlideIndex + 1} of {onboardingSlides.length}
          </Text>
          <Text style={styles.bottomCopy}>
            Update the `onboardingSlides` array to add more screens or reduce them later.
          </Text>

          <Pressable
            onPress={handleNext}
            style={[styles.primaryButton, { backgroundColor: slide.accent }]}
          >
            <Text style={styles.primaryButtonText}>
              {isLastSlide ? "Continue to register" : "Next"}
            </Text>
          </Pressable>
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
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  brand: {
    fontSize: 22,
    fontWeight: "800",
    color: "#111827",
  },
  skipText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6B7280",
  },
  skipPlaceholder: {
    width: 40,
  },
  heroCard: {
    flex: 1,
    borderRadius: 32,
    padding: 24,
    justifyContent: "flex-end",
    marginBottom: 24,
  },
  heroAccent: {
    position: "absolute",
    top: 24,
    right: 24,
    width: 110,
    height: 110,
    borderRadius: 28,
    opacity: 0.14,
  },
  eyebrow: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    marginBottom: 12,
  },
  title: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 14,
  },
  description: {
    fontSize: 17,
    lineHeight: 28,
    color: "#374151",
    marginBottom: 24,
  },
  statsCard: {
    borderRadius: 24,
    backgroundColor: "#FFFFFF",
    padding: 18,
  },
  statsLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#6B7280",
    marginBottom: 6,
  },
  statsValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 24,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: "#D1D5DB",
  },
  progressDotActive: {
    width: 28,
  },
  bottomPanel: {
    paddingBottom: 8,
  },
  stepLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#F97316",
    marginBottom: 8,
  },
  bottomCopy: {
    fontSize: 15,
    lineHeight: 24,
    color: "#4B5563",
    marginBottom: 18,
  },
  primaryButton: {
    minHeight: 58,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});
