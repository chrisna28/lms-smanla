import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type CustomHeaderProps = {
  label: string;
  onPressBack: () => void;
  isIoniconsAvailable?: boolean;
  onPressNotification?: () => void;
  onPressSettings?: () => void;
};

const CustomHeader = ({
  label,
  onPressBack,
  isIoniconsAvailable = false,
  onPressNotification = () => alert("Notifications"),
  onPressSettings = () => alert("Settings"),
}: CustomHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <View style={styles.leftSection}>
          <TouchableOpacity
            onPress={onPressBack}
            style={styles.backButton}
            accessibilityLabel="Go back"
          >
            <Ionicons name="arrow-back" size={20} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {label}
          </Text>
        </View>

        {isIoniconsAvailable && (
          <View style={styles.rightSection}>
            <TouchableOpacity
              onPress={onPressNotification}
              accessibilityLabel="Notifications"
            >
              <Ionicons name="notifications-outline" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressSettings}
              accessibilityLabel="Settings"
            >
              <Ionicons name="settings-outline" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#3674B5",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginRight: 16,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  backButton: {
    padding: 4,
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    flexShrink: 1,
  },
});
