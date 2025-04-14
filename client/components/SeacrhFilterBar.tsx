import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SeacrhFilterBar = () => {
  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        placeholderTextColor="#B3B3B3"
      />
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="filter" size={20} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="search" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default SeacrhFilterBar;

const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
