import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomHeader from "@/components/CustomHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import FormInput from "@/components/FormInput";

const AddNewPosting = () => {
  const router = useRouter();
  const dateNow = new Date();

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <CustomHeader
        label="Tambah Pengumuman"
        onPressBack={() => router.back()}
        isIoniconsAvailable={false}
      />

      <View style={styles.viewContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.flexItem}>
            <FormInput label="Kelas" value="X-1" editable={false} />
          </View>
          <View style={styles.flexItem}>
            <FormInput
              label="Tanggal"
              value={dateNow.toLocaleDateString("id-ID", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
              editable={false}
            />
          </View>
        </View>
        <FormInput
          label="Judul Pengumuman"
          placeholder="Masukkan Judul Pengumuman"
        />
        <View style={{ gap: 8 }}>
          <View
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Isi Pengumuman
            </Text>
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNewPosting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3674B5",
  },
  viewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    gap: 16,
    padding: 16,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between",
  },
  flexItem: {
    flex: 1,
  },
});
