import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AccountHeader = ({ image, name, nip }: any) => {
  return (
    <View style={{ flexDirection: "column", paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={image}
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              alignSelf: "center",
            }}
          />
          <View style={{ marginLeft: 16, gap: 4 }}>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
              {name}
            </Text>
            <Text style={{ fontSize: 14, color: "#fff" }}>{nip}</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 8,
        }}
      >
        <TextInput
          style={{
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
          }}
          placeholder="Search"
          placeholderTextColor="#000"
        />
        <TouchableOpacity
          style={{
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
          }}
        >
          <Ionicons name="filter" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
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
          }}
        >
          <Ionicons name="search" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountHeader;

const styles = StyleSheet.create({});
