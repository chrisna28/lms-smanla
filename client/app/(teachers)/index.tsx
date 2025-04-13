import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/CustomHeader";
import AccountHeader from "@/components/AccountHeader";
import { Link, useRouter } from "expo-router";
import CardClass from "@/components/CardClass";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >
          <CustomHeader
            label="Beranda"
            onPressBack={() => {
              router.back();
            }}
          />
          <AccountHeader
            image={require("@/assets/images/PhotoProfile.png")}
            name="Chrisna Mahendra Utama"
            nip="2411007"
          />
          <View style={styles.classListContainer}>
            <Text style={styles.classListTitle}>Daftar Kelas</Text>
            <View style={styles.classGrid}>
              <Link href="/(classDetails)/1">
                <CardClass
                  nameClass="Matematika"
                  gradeClass="Kelas X-1"
                  homeRoomTeacher="Budi Santoso, S.Pd., M.Pd."
                  dayClass="Senin"
                  timeStartClass="08:00"
                  timeEndClass="09:00"
                  sumStudents="10"
                />
              </Link>
              <Link href="/(classDetails)/2">
                <CardClass
                  nameClass="Bahasa Inggris"
                  gradeClass="Kelas X-2"
                  homeRoomTeacher="Siti Aminah, S.Pd."
                  dayClass="Selasa"
                  timeStartClass="09:00"
                  timeEndClass="10:00"
                  sumStudents="20"
                />
              </Link>
              <Link href="/(classDetails)/3">
                <CardClass
                  nameClass="Biologi"
                  gradeClass="Kelas X-3"
                  homeRoomTeacher="Ahmad Fauzi, S.Pd."
                  dayClass="Rabu"
                  timeStartClass="10:00"
                  timeEndClass="11:00"
                  sumStudents="15"
                />
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3674B5",
  },
  scrollView: {
    flexGrow: 1,
    backgroundColor: "#3674B5",
  },
  scrollContent: {
    flexGrow: 1,
  },
  classListContainer: {
    flexDirection: "column",
    gap: 16,
    backgroundColor: "#fff",
    padding: 16,
    marginTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flexGrow: 1,
    paddingBottom: 120,
  },
  classListTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  classGrid: {
    gap: 16,
  },
});
