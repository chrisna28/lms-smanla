import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type AddPostProps = {
  label: string;
  onPress: () => void;
};

const AddPost = ({ label, onPress }: AddPostProps) => {
  return (
    <View style={styles.addPost}>
      <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
        {label}
      </Text>
      <Pressable onPress={onPress}>
        <View style={styles.addIcon}>
          <Ionicons name="add" size={24} color="#fff" />
        </View>
      </Pressable>
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  addPost: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3674B5",
    paddingVertical: 8,
    paddingRight: 8,
    paddingLeft: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 16,
  },
  addIcon: {
    backgroundColor: "#578FCA",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
  },
});
