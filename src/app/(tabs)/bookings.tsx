import { Text, View } from "react-native";

import { DashboardScreen } from "../../features/dashboard/dashboard-screen";

export default function BookingsTab() {
  return (
    <DashboardScreen
      eyebrow="Active bookings"
      title="Manage current requests"
      description="See ongoing bookings, check statuses, and monitor who is on the way."
    >
      <View>
        <Text>Active service requests and schedules will appear here.</Text>
      </View>
    </DashboardScreen>
  );
}
