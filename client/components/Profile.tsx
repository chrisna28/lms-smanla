import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

type ProfileProps = {
  image: ImageSourcePropType;
  name: string;
  nip: string;
  containerStyle?: ViewStyle;
  textContainerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  nameStyle?: TextStyle;
  nipStyle?: TextStyle;
};

const Profile = ({
  image,
  name,
  nip,
  containerStyle,
  textContainerStyle,
  imageStyle,
  nameStyle,
  nipStyle,
}: ProfileProps) => {
  return (
    <View style={[styles.userInfo, containerStyle]}>
      <Image source={image} style={[styles.profileImage, imageStyle]} />
      <View style={[styles.textContainer, textContainerStyle]}>
        <Text style={[styles.nameText, nameStyle]}>{name}</Text>
        <Text style={[styles.nipText, nipStyle]}>{nip}</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
});
