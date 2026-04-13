import { Tabs } from 'expo-router';
import { theme } from '../../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.tertiary,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: theme.colors.background,
          borderTopWidth: 1,
          elevation: 0, // remove shadow on android
          shadowOpacity: 0, // remove shadow on iOS
          height: 60,
          paddingBottom: theme.spacing.small,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.body.fontFamily,
          fontSize: 12,
        },
        headerStyle: {
          backgroundColor: '#FFFFFF',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.background,
        },
        headerTitleStyle: {
          fontFamily: theme.typography.headings.fontFamily,
          fontSize: 20,
          color: theme.colors.tertiary,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Catálogo',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="view-grid-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrito',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="shopping-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
