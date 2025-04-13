import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type CustomHeaderProps = {
  label: string;
  onPressBack: () => void;
};

const CustomHeader = ({ label, onPressBack }: CustomHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={onPressBack}>
            <Ionicons
              name="arrow-back"
              size={20}
              color="#fff"
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>{label}</Text>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity>
            <Ionicons
              name="notifications"
              size={20}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="settings"
              size={20}
              color="#fff"
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    paddingTop: 8,
    backgroundColor: "#3674B5",
  },
  headerContent: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginRight: 16,
  },
  backIcon: {
    marginRight: 16,
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 1,
  },
  icon: {
    padding: 4,
  },
  settingsIcon: {
    marginLeft: 16,
    padding: 4,
  },
});
