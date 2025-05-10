import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "@/components/CustomHeader";
import AccountHeader from "@/components/AccountHeader";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AddPost from "@/components/AddPost";
import CardPost from "@/components/CardPost";

const postsData: Record<
  number,
  { id: number; image: any; name: string; time: string; postContent: string }[]
> = {
  1: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Budi Santoso, S.Pd., M.Pd.",
      time: "25/04/2025, Jam 08:30",
      postContent:
        "Tugas Matematika untuk Bab Trigonometri dikumpulkan minggu depan.",
    },
    {
      id: 2,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Chrisna Mahendra Utama",
      time: "20/04/2025, Jam 10:00",
      postContent:
        "Diskusi kelompok untuk materi Aljabar akan diadakan Jumat ini.",
    },
  ],
  2: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Siti Aminah, S.Pd.",
      time: "27/04/2025, Jam 09:15",
      postContent:
        "Praktikum Fisika tentang mekanika akan diadakan di laboratorium pada Selasa depan.",
    },
  ],
  3: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Ahmad Hidayat, M.Sc.",
      time: "26/04/2025, Jam 14:20",
      postContent:
        "Pengumpulan laporan praktikum Kimia diperpanjang hingga Kamis depan.",
    },
    {
      id: 2,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Ahmad Hidayat, M.Sc.",
      time: "22/04/2025, Jam 11:45",
      postContent: "Jangan lupa bawa jas lab untuk praktikum besok.",
    },
  ],
  4: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Dewi Kartika, S.Pd.",
      time: "24/04/2025, Jam 15:30",
      postContent:
        "Kunjungan ke kebun botani akan diadakan minggu depan. Harap persiapkan perlengkapan yang diperlukan.",
    },
  ],
  5: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Agus Purnomo, S.Pd., M.Pd.",
      time: "25/04/2025, Jam 10:00",
      postContent:
        "Pengumpulan tugas Bahasa Indonesia diperpanjang hingga Rabu depan.",
    },
  ],
  6: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Lina Wati, S.Pd.",
      time: "23/04/2025, Jam 09:45",
      postContent:
        "Presentasi Bahasa Inggris akan dimulai minggu depan. Siapkan materi dengan baik.",
    },
  ],
  7: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Rahmat Dani, S.Pd.",
      time: "26/04/2025, Jam 13:15",
      postContent:
        "Kunjungan ke museum sejarah akan diadakan bulan depan. Informasi lebih lanjut akan diberitahukan.",
    },
  ],
  8: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Nurul Hikmah, S.E., M.Pd.",
      time: "24/04/2025, Jam 10:30",
      postContent: "Diskusi kelas tentang inflasi akan diadakan Senin depan.",
    },
  ],
  9: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Bambang Sulistyo, S.Pd.",
      time: "22/04/2025, Jam 11:00",
      postContent: "Proyek pemetaan wilayah akan dimulai minggu depan.",
    },
  ],
  10: [
    {
      id: 1,
      image: require("@/assets/images/PhotoProfile.png"),
      name: "Rina Susanti, S.Sn.",
      time: "25/04/2025, Jam 14:00",
      postContent: "Persiapkan alat lukis untuk pelajaran minggu depan.",
    },
  ],
};

export default function ClassDetail() {
  const { id, nameClass, gradeClass } = useLocalSearchParams();
  const router = useRouter();
  const [posts, setPosts] = useState<
    {
      id: number;
      image: any;
      name: string;
      time: string;
      postContent: string;
    }[]
  >([]);

  const handleAddPost = () => {
    router.push("/(teachers)/postClass");
  };

  useEffect(() => {
    const classId =
      typeof id === "string"
        ? parseInt(id)
        : Array.isArray(id)
        ? parseInt(id[0])
        : id;
    const classPosts =
      typeof classId === "number" ? postsData[classId] || [] : [];
    setPosts(classPosts);
  }, [id]);

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
            label={`${nameClass} ${gradeClass}`}
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
            <View style={styles.classGrid}>
              <AddPost
                label="Tambah Pengumuman"
                onPress={() => {
                  handleAddPost();
                }}
              />
              {posts.map((post) => (
                <CardPost
                  key={post.id}
                  image={post.image}
                  name={post.name}
                  time={post.time}
                  postContent={post.postContent}
                />
              ))}
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
  classGrid: {
    gap: 16,
  },
});
