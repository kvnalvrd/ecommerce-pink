import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { theme } from '../../theme';
import { Button } from '../../components/Button';
import { ProductCard } from '../../components/ProductCard';
import { MOCK_PRODUCTS } from '../../data/products';

export default function HomeScreen() {
  const router = useRouter();

  const handleProductPress = (id: string) => {
    router.push(`/product/${id}`);
  };

  const handleAddToCart = (id: string) => {
    // console.log('Added to cart:', id);
    alert('Añadido al carrito');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Image
          style={styles.heroImage}
          source="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          contentFit="cover"
        />
        <View style={styles.heroOverlay}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Nueva Colección 2024</Text>
          </View>
          <Text style={styles.heroTitle}>Resalta tu Belleza{'\n'}<Text style={styles.highlight}>Natural</Text></Text>
          <Text style={styles.heroSubtitle}>
            Descubre nuestra nueva línea de productos formulados con ingredientes orgánicos.
          </Text>
          <View style={styles.heroButtons}>
            <Button
              title="Comprar Ahora"
              onPress={() => router.push('/products')}
              style={styles.heroButton}
            />
            <Button
              title="Conoce Más"
              variant="secondary"
              onPress={() => {}}
              style={styles.heroButton}
            />
          </View>
        </View>
      </View>

      {/* Featured Products */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Destacados</Text>
          <TouchableOpacity onPress={() => router.push('/products')}>
            <Text style={styles.viewAll}>Ver todo</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.sectionSubtitle}>Nuestros productos más vendidos y favoritos.</Text>

        <View style={styles.productsGrid}>
          {MOCK_PRODUCTS.slice(0, 2).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPress={() => handleProductPress(product.id)}
              onAddToCart={() => handleAddToCart(product.id)}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  hero: {
    height: 450,
    position: 'relative',
    marginBottom: theme.spacing.large,
  },
  heroImage: {
    ...StyleSheet.absoluteFillObject,
  },
  heroOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: theme.spacing.large,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  badge: {
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: theme.spacing.normal,
    paddingVertical: theme.spacing.small,
    borderRadius: theme.borderRadius.md,
    marginBottom: theme.spacing.normal,
  },
  badgeText: {
    fontFamily: theme.typography.body.fontFamily,
    color: theme.colors.tertiary,
    fontSize: 12,
    fontWeight: theme.typography.body.weights.semiBold as any,
  },
  heroTitle: {
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 36,
    color: theme.colors.tertiary,
    marginBottom: theme.spacing.normal,
    lineHeight: 44,
  },
  highlight: {
    color: theme.colors.primary,
  },
  heroSubtitle: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 16,
    color: theme.colors.tertiary,
    marginBottom: theme.spacing.large,
    lineHeight: 24,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: theme.spacing.normal,
    width: '100%',
  },
  heroButton: {
    flex: 1,
  },
  section: {
    paddingHorizontal: theme.spacing.normal,
    paddingBottom: theme.spacing.large,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: theme.spacing.tiny,
  },
  sectionTitle: {
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 24,
    color: theme.colors.tertiary,
  },
  viewAll: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 14,
    color: theme.colors.primary,
    fontWeight: theme.typography.body.weights.semiBold as any,
  },
  sectionSubtitle: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 14,
    color: '#666',
    marginBottom: theme.spacing.normal,
  },
  productsGrid: {
    gap: theme.spacing.normal,
  },
});
