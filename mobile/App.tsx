import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { NotoSerif_400Regular, NotoSerif_700Bold } from '@expo-google-fonts/noto-serif';
import { PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import { theme } from './theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    NotoSerif_400Regular,
    NotoSerif_700Bold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-commerce Pink</Text>
      <Text style={styles.subtitle}>Experiencia de compra rápida, elegante y accesible.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.normal,
  },
  loadingContainer: {
    backgroundColor: theme.colors.background,
  },
  title: {
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 32,
    color: theme.colors.primary,
    marginBottom: theme.spacing.small,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 16,
    color: theme.colors.tertiary,
    textAlign: 'center',
  },
});
