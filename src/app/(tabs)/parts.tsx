import { Text, View } from "react-native";

import { DashboardScreen } from "../../features/dashboard/dashboard-screen";

export default function PartsTab() {
  return (
    <DashboardScreen
      eyebrow="Vehicle parts"
      title="Browse the parts section"
      description="Use this area to discover or request spare parts for your vehicle when repairs are needed."
    >
      <View>
        <Text>Parts listings and requests can live here as the marketplace grows.</Text>
      </View>
    </DashboardScreen>
  );
}
