export type OnboardingSlide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  accent: string;
  highlight: string;
  statsLabel: string;
  statsValue: string;
};

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: "fast-help",
    eyebrow: "Welcome to Auto-Fix",
    title: "Request roadside help in minutes",
    description:
      "Book a trusted driver, tow truck, or mechanic from one place whenever your trip takes an unexpected turn.",
    accent: "#F97316",
    highlight: "#FFF1E8",
    statsLabel: "Available services",
    statsValue: "Driver, tow, mechanic",
  },
  {
    id: "smart-matching",
    eyebrow: "Faster support",
    title: "Get matched with the right professional",
    description:
      "Choose the exact service you need and connect with the nearest provider ready to help.",
    accent: "#0F766E",
    highlight: "#E8FFFA",
    statsLabel: "Match focus",
    statsValue: "Closest qualified provider",
  },
  {
    id: "live-updates",
    eyebrow: "Stay informed",
    title: "Track every step from request to arrival",
    description:
      "See your request progress clearly so you always know what is happening and when help is close.",
    accent: "#2563EB",
    highlight: "#EBF3FF",
    statsLabel: "Experience",
    statsValue: "Clear status updates",
  },
  {
    id: "ready-to-start",
    eyebrow: "One last step",
    title: "Create your customer account and get started",
    description:
      "Register once to save your details, request support faster, and manage future bookings with ease.",
    accent: "#BE123C",
    highlight: "#FFF0F4",
    statsLabel: "Next action",
    statsValue: "Create your account",
  },
];
