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
              <Link href="/(students)/(classDetails)/1">
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
    paddingBottom: 120, // Extra padding at bottom for better scrolling
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
