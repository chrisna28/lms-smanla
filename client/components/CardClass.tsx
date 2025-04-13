import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardClass = ({ nameClass, gradeClass, timeClass, sumStudents }: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#3674B5",
        padding: 16,
        borderRadius: 16,
        height: 143,
        maxHeight: 143,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
        {nameClass}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
        {gradeClass}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
        {timeClass}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
        {sumStudents}
      </Text>
    </View>
  );
};

export default CardClass;

const styles = StyleSheet.create({});
