import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/CustomHeader";
import AccountHeader from "@/components/AccountHeader";

const Class = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#3674B5" }}>
      <View>
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
      </View>
    </SafeAreaView>
  );
};

export default Class;

const styles = StyleSheet.create({});
