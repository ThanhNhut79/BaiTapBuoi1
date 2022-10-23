import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignUpForm from './components/SignUpForm';

export default function App() {
  return (
    <View style={styles.container}>
      <SignUpForm></SignUpForm>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
