import { View, Text, TextInput } from "react-native";
import React from "react";

const FormInput = ({
  label,
  placeholder,
  secure,
  value,
  onChangeText,
  keyboardType,
  editable,
}: any) => {
  return (
    <View style={{ gap: 8 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 14, fontWeight: "bold" }}>{label}</Text>
        {label === "Password" && (
          <Text style={{ fontSize: 12, color: "#3674B5", paddingRight: 4 }}>
            Forgot Password?
          </Text>
        )}
      </View>
      <View>
        <TextInput
          style={{
            height: 40,
            maxWidth: "100%",
            minWidth: "38%",
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            fontSize: 14,
          }}
          placeholder={placeholder}
          placeholderTextColor={"gray"}
          secureTextEntry={secure}
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          keyboardType={keyboardType}
          editable={editable}
        />
      </View>
    </View>
  );
};

export default FormInput;
