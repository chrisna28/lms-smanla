import React from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import { Link, useRouter } from "expo-router";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSignIn = () => {
    console.log("Username: ", username);
    console.log("Password: ", password);
    router.navigate("/(teachers)");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "center" }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            padding: 20,
            alignItems: "center",
            gap: 16,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("@/assets/images/logo.png")}
              style={styles.logo}
            />
            <Text style={styles.title}>Sign In to SIA</Text>
          </View>
          <View style={styles.loginForm}>
            <FormInput
              label="Username"
              placeholder="example@mail.com"
              secure={false}
              value={username}
              onChangeText={(text: string) => setUsername(text)}
              keyboardType="email-address"
            />
            <FormInput
              label="Password"
              placeholder="password"
              secure={true}
              value={password}
              onChangeText={(text: string) => setPassword(text)}
              keyboardType="default"
            />
            <Button
              label="Sign In"
              onPress={() => {
                handleSignIn();
              }}
            />
          </View>
          {!isKeyboardVisible && (
            <View>
              <Text
                style={{
                  color: "#fff",
                  marginTop: 16,
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Follow us on social media!
              </Text>
              <View style={styles.socialContainer}>
                <View style={styles.icon}>
                  <Image
                    source={require("@/assets/images/facebook.png")}
                    style={styles.iconImage}
                  />
                </View>
                <View style={styles.icon}>
                  <Image
                    source={require("@/assets/images/youtube.png")}
                    style={styles.iconImage}
                  />
                </View>
                <View style={styles.icon}>
                  <Image
                    source={require("@/assets/images/instagram.png")}
                    style={styles.iconImage}
                  />
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.footer}>
        <Text
          style={{
            color: "#fff",
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          © 2021 SIA. All rights reserved.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3674B5",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
  logo: {
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loginForm: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 16,
    gap: 8,
    borderRadius: 8,
    maxWidth: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 5,
  },
  socialContainer: {
    flexDirection: "row",
    gap: 16,
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 6,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  footer: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
