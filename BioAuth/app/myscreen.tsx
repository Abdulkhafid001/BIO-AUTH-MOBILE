import { Text, View, StyleSheet } from "react-native";

export default function MyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Screen is ready! fuck off and find out 🤣</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
