import { Text, View } from "react-native";

import { DashboardScreen } from "../../features/dashboard/dashboard-screen";

export default function HistoryTab() {
  return (
    <DashboardScreen
      eyebrow="Service history"
      title="Review your completed jobs"
      description="Keep track of previous roadside support requests and revisit the details anytime."
    >
      <View>
        <Text>Completed rides, towing requests, and mechanic visits will appear here.</Text>
      </View>
    </DashboardScreen>
  );
}
