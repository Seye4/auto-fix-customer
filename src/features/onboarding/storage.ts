import { File, Paths } from "expo-file-system";

const onboardingStateFile = new File(Paths.document, "auto-fix-onboarding-state.json");

type OnboardingState = {
  hasCompletedCustomerOnboarding: boolean;
};

export async function getHasCompletedCustomerOnboarding() {
  try {
    if (!onboardingStateFile.exists) {
      return false;
    }

    const content = await onboardingStateFile.text();
    const parsed = JSON.parse(content) as Partial<OnboardingState>;

    return parsed.hasCompletedCustomerOnboarding === true;
  } catch {
    return false;
  }
}

export async function setHasCompletedCustomerOnboarding(value: boolean) {
  try {
    if (!onboardingStateFile.exists) {
      onboardingStateFile.create({ intermediates: true, overwrite: true });
    }

    onboardingStateFile.write(
      JSON.stringify({ hasCompletedCustomerOnboarding: value } satisfies OnboardingState),
      { append: false }
    );
  } catch (error) {
    console.warn("Unable to persist onboarding state", error);
  }
}
