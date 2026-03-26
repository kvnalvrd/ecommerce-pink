import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../theme';
import { Button } from '../../components/Button';
import { MOCK_PRODUCTS } from '../../data/products';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const product = MOCK_PRODUCTS.find((p) => p.id === id) || MOCK_PRODUCTS[0];
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => q > 1 ? q - 1 : 1);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={product.image}
          contentFit="cover"
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{product.category}</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </View>

        <View style={styles.ratingContainer}>
          <View style={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <MaterialCommunityIcons
                key={star}
                name={star <= Math.floor(product.rating) ? "star" : (star - 0.5 <= product.rating ? "star-half-full" : "star-outline")}
                size={16}
                color="#FFC107"
              />
            ))}
          </View>
          <Text style={styles.ratingText}>{product.rating} ({product.reviews} reseñas)</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Descripción</Text>
        <Text style={styles.description}>{product.description}</Text>

        <View style={styles.divider} />

        <View style={styles.quantityContainer}>
          <Text style={styles.sectionTitle}>Cantidad</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
              <MaterialCommunityIcons name="minus" size={20} color={theme.colors.tertiary} />
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{quantity}</Text>
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <MaterialCommunityIcons name="plus" size={20} color={theme.colors.tertiary} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            title="Añadir al Carrito"
            onPress={() => alert(`Añadido ${quantity} al carrito`)}
            style={styles.addToCartButton}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    height: 350,
    width: '100%',
    position: 'relative',
    backgroundColor: theme.colors.background,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  badge: {
    position: 'absolute',
    top: theme.spacing.normal,
    right: theme.spacing.normal,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: theme.spacing.normal,
    paddingVertical: theme.spacing.small,
    borderRadius: theme.borderRadius.md,
  },
  badgeText: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 14,
    color: theme.colors.tertiary,
    fontWeight: theme.typography.body.weights.semiBold as any,
  },
  contentContainer: {
    padding: theme.spacing.large,
    borderTopLeftRadius: theme.borderRadius.lg * 2,
    borderTopRightRadius: theme.borderRadius.lg * 2,
    marginTop: -20,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: theme.spacing.small,
  },
  title: {
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 28,
    color: theme.colors.tertiary,
    marginBottom: theme.spacing.tiny,
    fontWeight: theme.typography.headings.weights.bold as any,
  },
  price: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 24,
    color: theme.colors.primary,
    fontWeight: theme.typography.body.weights.bold as any,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.normal,
  },
  stars: {
    flexDirection: 'row',
    marginRight: theme.spacing.small,
  },
  ratingText: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.background,
    marginVertical: theme.spacing.normal,
  },
  sectionTitle: {
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 18,
    color: theme.colors.tertiary,
    marginBottom: theme.spacing.small,
    fontWeight: theme.typography.headings.weights.semiBold as any,
  },
  description: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.large,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  quantityButton: {
    padding: theme.spacing.normal,
  },
  quantityValue: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 18,
    fontWeight: theme.typography.body.weights.semiBold as any,
    color: theme.colors.tertiary,
    paddingHorizontal: theme.spacing.normal,
  },
  footer: {
    marginTop: theme.spacing.small,
    marginBottom: theme.spacing.large,
  },
  addToCartButton: {
    width: '100%',
    paddingVertical: theme.spacing.large,
  },
});
