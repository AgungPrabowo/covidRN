import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

export default SettingsScreen;