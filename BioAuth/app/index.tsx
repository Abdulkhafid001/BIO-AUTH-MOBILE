import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import LoginScreen from "./login";
import RedirectScreen from "./redirect";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";

// write a ts function that returns a list of numbers from 1- 10
// only authenticate when it is 0,3,5,7,9

export default function Index() {
  const router = useRouter();
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(true);
    })();
  });

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Enter Password",
    });
    auth.then((result) => {
      setIsAuthenticated(result.success);
      router.push("/tabs");
      console.log(result);
    });
  }

  return (
    <View style={styles.appContainer}>
      {isAuthenticated ? (
        <RedirectScreen setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <LoginScreen onAuthenticate={onAuthenticate} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#25292e",
  },
});
