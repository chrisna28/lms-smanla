import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/CustomHeader";
import AccountHeader from "@/components/AccountHeader";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AddPost from "@/components/AddPost";
import CardPost from "@/components/CardPost";

export default function Index() {
  const { id } = useLocalSearchParams();
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
            label={`Kelas ${id}`}
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
            <View style={styles.classGrid}>
              <AddPost
                label="Tambah Pengumuman"
                onPress={() => {
                  console.log("Tambah Pengumuman");
                }}
              />
              <CardPost
                image={require("@/assets/images/PhotoProfile.png")}
                name="Chrisna Mahendra Utama"
                time="28/09/2025, Jam 10:00"
              />
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
