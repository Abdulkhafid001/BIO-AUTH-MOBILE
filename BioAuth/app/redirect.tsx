import React from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

interface RedirectScreenProps {
  setIsAuthenticated: (value: boolean) => void;
}

// ask AI to give me beautiful AI authentication failed page and tell the user to press the
// button to try again.

const RedirectScreen: React.FC<RedirectScreenProps> = ({
  setIsAuthenticated,
}) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={() => {
          router.push("/tabs");
        }}
        style={styles.btn}
      >
        <Text style={styles.text}>Start adding emojis now!</Text>
      </TouchableOpacity> */}
      <Text style={styles.aiResponse}>
        AI verification failed, this is because you are not your usual self
        during authentication, <br></br>there are abnormalities in your
        authentication behavior.
        <br />
        Adjust your behavior to login again.
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/login")}
        style={styles.btn}
      >
        <Text style={styles.text}>Try Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "courier",
  },
  aiResponse: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "courier",
    marginTop: 30,
  },
  btn: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0893FC",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    marginTop: 50,
  },
});

export default RedirectScreen;
