import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

interface CardClassProps {
  nameClass: string;
  gradeClass: string;
  timeStartClass: string;
  timeEndClass: string;
  sumStudents: number;
  dayClass: string;
  homeRoomTeacher: string;
}

const CardClass = ({
  nameClass,
  gradeClass,
  timeStartClass,
  timeEndClass,
  sumStudents,
  dayClass,
  homeRoomTeacher,
}: CardClassProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.titleText}>{nameClass}</Text>
        <Pressable onPress={() => alert("Menu")}>
          <Ionicons
            name="ellipsis-vertical"
            size={20}
            color="#fff"
            style={styles.menuIcon}
          />
        </Pressable>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.gradeText}>
          Kelas {gradeClass} ({homeRoomTeacher})
        </Text>
        <Text style={styles.scheduleText}>
          Hari {dayClass}, Jam {timeStartClass} - {timeEndClass}
        </Text>
      </View>
      <Text style={styles.studentCountText}>{sumStudents} Siswa</Text>
    </View>
  );
};

export default CardClass;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: "#3674B5",
    padding: 16,
    borderRadius: 16,
    height: 140,
    maxHeight: 140,
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
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#fff",
  },
  menuIcon: {
    alignSelf: "flex-end",
  },
  infoContainer: {
    flexDirection: "column",
    gap: 4,
  },
  gradeText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#fff",
  },
  scheduleText: {
    fontWeight: "500",
    fontSize: 14,
    color: "#fff",
  },
  studentCountText: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#fff",
  },
});
