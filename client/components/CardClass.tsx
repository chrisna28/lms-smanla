import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CardClass = ({
  nameClass,
  gradeClass,
  timeStartClass,
  timeEndClass,
  sumStudents,
  dayClass,
  homeRoomTeacher,
}: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#3674B5",
        padding: 16,
        borderRadius: 16,
        height: 150,
        maxHeight: 150,
        width: "100%",
        maxWidth: 400,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: "space-between",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
          {nameClass}
        </Text>
        <Pressable>
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color="#fff"
            style={{ alignSelf: "flex-end" }}
            onPress={() => alert("Menu")}
          />
        </Pressable>
      </View>
      <View style={{ flexDirection: "column", gap: 4 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16, color: "#fff" }}>
          {gradeClass} ({homeRoomTeacher})
        </Text>
        <Text style={{ fontWeight: "semibold", fontSize: 16, color: "#fff" }}>
          Hari {dayClass}, Jam {timeStartClass} - {timeEndClass}
        </Text>
      </View>
      <Text style={{ fontWeight: "bold", fontSize: 14, color: "#fff" }}>
        {sumStudents} Siswa
      </Text>
    </View>
  );
};

export default CardClass;

const styles = StyleSheet.create({});
