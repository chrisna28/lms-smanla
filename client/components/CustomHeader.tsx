import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CustomHeader = ({ label, onPressBack }: any) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 8,
        backgroundColor: "#3674B5",
      }}
    >
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Ionicons
              name="arrow-back"
              size={20}
              color="#fff"
              style={{ marginRight: 16, padding: 4 }}
              onPress={onPressBack}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#fff",
              marginBottom: 1,
            }}
          >
            {label}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
