import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    // 로딩시 보여지는 화면
    <View style={styles.container}>
      <Text style={styles.text}>서준이의 날씨 앱</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#ffeb99",
  },
  text: {
    fontSize: 30,
  },
});
