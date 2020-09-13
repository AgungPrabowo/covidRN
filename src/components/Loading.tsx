import React from "react";
import { View, ActivityIndicator, Modal, Text } from "react-native";

const Loading = (props: { loading: boolean }) => (
  <Modal transparent visible={props.loading}>
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ borderRadius: 10, backgroundColor: "white", padding: 25 }}>
        <Text style={{ fontSize: 20, fontWeight: "200" }}>Loading</Text>
        <ActivityIndicator animating={true} size="large" color="#2395F6" />
      </View>
    </View>
  </Modal>
);

export default Loading;
