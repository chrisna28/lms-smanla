import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
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
    <SafeAreaView style={styles.container}>
      <StatusBar style={"light"} />
      <KeyboardAvoidingView>
        <ScrollView style={{ flexGrow: 1, backgroundColor: "#3674B5" }}>
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
          <View
            style={{
              flexDirection: "column",
              gap: 16,
              backgroundColor: "#fff",
              padding: 16,
              marginTop: 16,
              borderTopEndRadius: 16,
              borderTopStartRadius: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 1,
              }}
            >
              Daftar Kelas
            </Text>
            <View style={{ gap: 16 }}>
              <Link
                href={{
                  pathname: "/(students)/classDetail/[id]",
                  params: { id: "1" },
                }}
              >
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
});
