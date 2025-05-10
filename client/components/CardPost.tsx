import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "./Profile";

type CardPostProps = {
  image: ImageSourcePropType;
  name: string;
  time: string;
  postContent: string;
  onPress?: () => void;
};

const CardPost = ({
  image,
  name,
  time,
  postContent,
  onPress,
}: CardPostProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Profile
          image={image}
          name={name}
          nip={time}
          containerStyle={styles.profile}
          textContainerStyle={styles.profileTextContainer}
          imageStyle={styles.profileImage}
          nameStyle={styles.profileName}
          nipStyle={styles.profileTime}
        />
      </View>

      <Text style={styles.postContent} selectable>
        {postContent}
      </Text>
    </View>
  );
};

export default CardPost;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3674B5",
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    gap: 12,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    marginBottom: 0,
  },
  profileTextContainer: {
    gap: 4,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  profileTime: {
    fontSize: 12,
    color: "#E0E0E0",
    opacity: 0.8,
  },
  postContent: {
    color: "#FFFFFF",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "left",
  },
});
