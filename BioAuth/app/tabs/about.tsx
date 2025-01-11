import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

// const aboutImage = require("");
// const bgImage = require("./assets/images/background-image.png");

export default function AboutScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        StickerSmash app allows you to add emojis to your favorite pictures,
        <br></br>
        or other favorite media.
      </Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/login");
        }}
        style={styles.btn}
      >
        <Text style={styles.text}>Logout</Text>
      </TouchableOpacity>
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
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    fontFamily: "courier",
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
  image: {
    width: "auto",
    height: "auto",
    margin: "auto",
  },
});
