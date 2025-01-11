import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
const bgImage = require("../assets/images/background-image.png");

interface AuthProps {
  onAuthenticate: () => void;
}

const LoginScreen: React.FC<AuthProps> = ({ onAuthenticate }) => {
  return (
    <View style={styles.container}>
      <Image source={bgImage} style={styles.image} />
      <Text style={styles.title}>StickerSmash</Text>
      <Text style={styles.description}>
        Remain calm and during authentication, for the AI can detect abnormal
        logins.
      </Text>
      <Text style={styles.description}>
        Add an emoji to your favorite image(s) and save to your device.
      </Text>
      <TouchableOpacity onPress={onAuthenticate} style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0893FC",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 300,
    margin: "auto",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "arial",
  },
  title: {
    fontSize: 50,
    fontWeight: "400",
    marginVertical: 20,
    textAlign: "center",
    color: "white",
  },
  description: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    marginHorizontal: 20,
    fontFamily: "courier",
  },
});

export default LoginScreen;
