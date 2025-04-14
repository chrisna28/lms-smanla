import { ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import React from "react";
import Profile from "./Profile";

type CardPostProps = {
  image: ImageSourcePropType;
  name: string;
  time: string;
};

const CardPost = ({ image, name, time }: CardPostProps) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "flex-start" }}>
        <Profile
          image={image}
          name={name}
          nip={time}
          containerStyle={{}}
          textContainerStyle={{ gap: 2 }}
          imageStyle={{ width: 40, height: 40 }}
          nameStyle={{ fontSize: 16 }}
          nipStyle={{ fontSize: 12 }}
        />
      </View>
      <View style={{ justifyContent: "flex-start" }}>
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            marginBottom: 8,
            textAlign: "justify",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error magnam
          incidunt nesciunt odit quidem. Ratione ullam nulla id debitis?
          Doloribus amet nisi debitis deserunt et? Porro neque ab aut dolores.
        </Text>
      </View>
    </View>
  );
};

export default CardPost;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 16,
    backgroundColor: "#3674B5",
    padding: 16,
    borderRadius: 8,
    maxHeight: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
