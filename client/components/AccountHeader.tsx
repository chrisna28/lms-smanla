import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type AccountHeaderProps = {
  image: ImageSourcePropType;
  name: string;
  nip: string;
};

const AccountHeader = ({ image, name, nip }: AccountHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.userInfo}>
          <Image source={image} style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.nipText}>{nip}</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#000"
        />
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="filter" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal: 16,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "center",
  },
  textContainer: {
    marginLeft: 16,
    gap: 4,
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  nipText: {
    fontSize: 14,
    color: "#fff",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  searchInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconButton: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
