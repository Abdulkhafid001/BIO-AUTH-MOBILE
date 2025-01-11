import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Link href="/tabs" style={styles.button}>
          Go back to App!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 30,
    textDecorationLine: 'none',
    color: '#fff',
    backgroundColor: '#0893FC',
    padding: 20,
    width: "20%",
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center"
  },
});
