import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ label, onPress, style }: any) => {
  return (
    <View style={{ padding: 4 }}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text
          style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}
          {...style}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3674B5",
    height: 40,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
});

export default Button;
