import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Class = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Class {id}</Text>
    </View>
  );
};

export default Class;

const styles = StyleSheet.create({});
