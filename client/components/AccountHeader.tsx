import { StyleSheet, View, ImageSourcePropType } from "react-native";
import React from "react";
import Profile from "./Profile";
import SeacrhFilterBar from "./SeacrhFilterBar";

type AccountHeaderProps = {
  image: ImageSourcePropType;
  name: string;
  nip: string;
};

const AccountHeader = ({ image, name, nip }: AccountHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Profile image={image} name={name} nip={nip} />
      </View>
      <SeacrhFilterBar />
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
});
