import { StyleSheet, View, ImageSourcePropType } from "react-native";
import React from "react";
import Profile from "./Profile";
import SearchFilterBar from "./SearchFilterBar";

type AccountHeaderProps = {
  image: ImageSourcePropType;
  name: string;
  nip: string;
  onSearch?: (query: string) => void;
  onFilterPress?: () => void;
};

const AccountHeader = ({
  image,
  name,
  nip,
  onSearch = () => {},
  onFilterPress = () => {},
}: AccountHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Profile image={image} name={name} nip={nip} />
      </View>
      <SearchFilterBar onSearch={onSearch} onFilterPress={onFilterPress} />
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: "#3674B5",
    gap: 4,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
