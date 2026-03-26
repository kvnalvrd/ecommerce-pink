import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { theme } from '../theme';
import { Button } from './Button';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  onAddToCart: () => void;
}

export function ProductCard({ product, onPress, onAddToCart }: ProductCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.9}
      accessibilityRole="button"
      accessibilityLabel={`View details for ${product.name}`}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={product.image}
          contentFit="cover"
          transition={200}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{product.category}</Text>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{product.description}</Text>

        <View style={styles.footer}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Button
            title="Añadir"
            onPress={onAddToCart}
            variant="primary"
            style={styles.addButton}
            textStyle={styles.addButtonText}
            accessibilityLabel={`Add ${product.name} to cart`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    marginBottom: theme.spacing.normal,
    // Shadow for iOS
    shadowColor: theme.colors.tertiary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 3,
    borderWidth: 1,
    borderColor: theme.colors.background,
  },
  imageContainer: {
    height: 200,
    width: '100%',
    position: 'relative',
    backgroundColor: theme.colors.background,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
  badge: {
    position: 'absolute',
    top: theme.spacing.small,
    left: theme.spacing.small,
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: theme.spacing.small,
    paddingVertical: theme.spacing.tiny,
    borderRadius: theme.borderRadius.sm,
  },
  badgeText: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 12,
    color: theme.colors.tertiary,
    fontWeight: theme.typography.body.weights.medium as any,
  },
  contentContainer: {
    padding: theme.spacing.normal,
  },
  name: {
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 18,
    color: theme.colors.tertiary,
    marginBottom: theme.spacing.tiny,
    fontWeight: theme.typography.headings.weights.bold as any,
  },
  description: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 14,
    color: '#666', // slightly lighter for description
    marginBottom: theme.spacing.normal,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 18,
    fontWeight: theme.typography.body.weights.bold as any,
    color: theme.colors.tertiary,
  },
  addButton: {
    paddingVertical: theme.spacing.small,
    paddingHorizontal: theme.spacing.normal,
  },
  addButtonText: {
    fontSize: 14,
  }
});
