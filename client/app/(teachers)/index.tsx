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
import AddPost from "@/components/AddPost";

export default function Index() {
  const router = useRouter();

  const classesData = [
    {
      id: 1,
      nameClass: "Matematika",
      gradeClass: "X-1",
      homeRoomTeacher: "Budi Santoso, S.Pd., M.Pd.",
      dayClass: "Senin",
      timeStartClass: "08:00",
      timeEndClass: "09:00",
      sumStudents: 30,
    },
    {
      id: 2,
      nameClass: "Fisika",
      gradeClass: "X-2",
      homeRoomTeacher: "Siti Aminah, S.Pd.",
      dayClass: "Senin",
      timeStartClass: "10:00",
      timeEndClass: "11:00",
      sumStudents: 28,
    },
    {
      id: 3,
      nameClass: "Kimia",
      gradeClass: "X-3",
      homeRoomTeacher: "Ahmad Hidayat, M.Sc.",
      dayClass: "Selasa",
      timeStartClass: "08:00",
      timeEndClass: "09:30",
      sumStudents: 32,
    },
    {
      id: 4,
      nameClass: "Biologi",
      gradeClass: "X-1",
      homeRoomTeacher: "Dewi Kartika, S.Pd.",
      dayClass: "Selasa",
      timeStartClass: "13:00",
      timeEndClass: "14:30",
      sumStudents: 30,
    },
    {
      id: 5,
      nameClass: "Bahasa Indonesia",
      gradeClass: "X-2",
      homeRoomTeacher: "Agus Purnomo, S.Pd., M.Pd.",
      dayClass: "Rabu",
      timeStartClass: "09:00",
      timeEndClass: "10:30",
      sumStudents: 28,
    },
    {
      id: 6,
      nameClass: "Bahasa Inggris",
      gradeClass: "X-3",
      homeRoomTeacher: "Lina Wati, S.Pd.",
      dayClass: "Rabu",
      timeStartClass: "10:30",
      timeEndClass: "12:00",
      sumStudents: 32,
    },
    {
      id: 7,
      nameClass: "Sejarah",
      gradeClass: "X-1",
      homeRoomTeacher: "Rahmat Dani, S.Pd.",
      dayClass: "Kamis",
      timeStartClass: "07:30",
      timeEndClass: "09:00",
      sumStudents: 30,
    },
    {
      id: 8,
      nameClass: "Ekonomi",
      gradeClass: "X-2",
      homeRoomTeacher: "Nurul Hikmah, S.E., M.Pd.",
      dayClass: "Kamis",
      timeStartClass: "09:00",
      timeEndClass: "10:30",
      sumStudents: 28,
    },
    {
      id: 9,
      nameClass: "Geografi",
      gradeClass: "X-3",
      homeRoomTeacher: "Bambang Sulistyo, S.Pd.",
      dayClass: "Jumat",
      timeStartClass: "08:00",
      timeEndClass: "09:30",
      sumStudents: 32,
    },
    {
      id: 10,
      nameClass: "Seni Budaya",
      gradeClass: "X-1",
      homeRoomTeacher: "Rina Susanti, S.Sn.",
      dayClass: "Jumat",
      timeStartClass: "09:30",
      timeEndClass: "11:00",
      sumStudents: 30,
    },
  ];

  const handleAddPost = () => {
    router.push("/(teachers)/postClass");
  };

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
            isIoniconsAvailable={true}
          />
          <AccountHeader
            image={require("@/assets/images/PhotoProfile.png")}
            name="Chrisna Mahendra Utama"
            nip="2411007"
          />
          <View style={styles.classListContainer}>
            <Text style={styles.classListTitle}>Daftar Kelas</Text>
            <AddPost
              label="Tambah Pengumuman"
              onPress={() => {
                handleAddPost();
              }}
            />
            {classesData.map((post) => (
              <Link
                key={post.id}
                href={{
                  pathname: "/(teachers)/(classDetails)/[id]",
                  params: {
                    id: post.id,
                    nameClass: post.nameClass,
                    gradeClass: post.gradeClass,
                  },
                }}
              >
                <CardClass
                  key={post.id}
                  nameClass={post.nameClass}
                  gradeClass={post.gradeClass}
                  timeStartClass={post.timeStartClass}
                  timeEndClass={post.timeEndClass}
                  sumStudents={post.sumStudents}
                  dayClass={post.dayClass}
                  homeRoomTeacher={post.homeRoomTeacher}
                />
              </Link>
            ))}
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
});
