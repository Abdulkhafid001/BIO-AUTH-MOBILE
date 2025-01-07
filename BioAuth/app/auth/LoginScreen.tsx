// BioAuth/app/auth/LoginScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useAuth } from './authContext';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    login();
    router.replace('/tabs');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
  },
});