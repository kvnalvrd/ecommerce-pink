import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '../../theme';
import { ProductCard } from '../../components/ProductCard';
import { MOCK_PRODUCTS } from '../../data/products';

export default function ProductsScreen() {
  const router = useRouter();

  const handleProductPress = (id: string) => {
    router.push(`/product/${id}`);
  };

  const handleAddToCart = (id: string) => {
    // console.log('Added to cart:', id);
    alert('Añadido al carrito');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => handleProductPress(item.id)}
            onAddToCart={() => handleAddToCart(item.id)}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.title}>Nuestro Catálogo</Text>
            <Text style={styles.subtitle}>Encuentra los mejores productos para ti</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  listContainer: {
    padding: theme.spacing.normal,
  },
  header: {
    marginBottom: theme.spacing.large,
  },
  title: {
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 28,
    color: theme.colors.tertiary,
    marginBottom: theme.spacing.small,
  },
  subtitle: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 16,
    color: '#666',
  },
});
