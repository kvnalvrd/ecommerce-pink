import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../../theme';
import { Button } from '../../components/Button';
import { MOCK_PRODUCTS } from '../../data/products';

export default function CartScreen() {
  const router = useRouter();

  // Mock cart items
  const [cartItems, setCartItems] = useState([
    { ...MOCK_PRODUCTS[0], quantity: 2 },
    { ...MOCK_PRODUCTS[1], quantity: 1 },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items => items.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity + delta;
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const renderCartItem = ({ item }: { item: typeof cartItems[0] }) => (
    <View style={styles.cartItem}>
      <TouchableOpacity onPress={() => router.push(`/product/${item.id}`)} style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={item.image}
          contentFit="cover"
        />
      </TouchableOpacity>

      <View style={styles.itemDetails}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
          <TouchableOpacity onPress={() => removeItem(item.id)} accessibilityLabel="Eliminar producto">
            <MaterialCommunityIcons name="delete-outline" size={24} color="#999" />
          </TouchableOpacity>
        </View>

        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>

        <View style={styles.quantityContainer}>
          <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={() => updateQuantity(item.id, -1)} style={styles.quantityButton}>
              <MaterialCommunityIcons name="minus" size={16} color={theme.colors.tertiary} />
            </TouchableOpacity>
            <Text style={styles.quantityValue}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => updateQuantity(item.id, 1)} style={styles.quantityButton}>
              <MaterialCommunityIcons name="plus" size={16} color={theme.colors.tertiary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  if (cartItems.length === 0) {
    return (
      <View style={[styles.container, styles.emptyContainer]}>
        <MaterialCommunityIcons name="cart-outline" size={64} color="#ccc" style={styles.emptyIcon} />
        <Text style={styles.emptyTitle}>Tu carrito está vacío</Text>
        <Text style={styles.emptySubtitle}>¿No sabes qué comprar? Miles de productos te esperan.</Text>
        <Button
          title="Explorar Catálogo"
          onPress={() => router.push('/products')}
          style={styles.exploreButton}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderCartItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Envío</Text>
          <Text style={styles.summaryValue}>{shipping === 0 ? 'Gratis' : `$${shipping.toFixed(2)}`}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.summaryRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>

        <Button
          title="Proceder al Pago"
          onPress={() => alert('Procediendo al pago...')}
          style={styles.checkoutButton}
        />
      </View>
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
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.normal,
    marginBottom: theme.spacing.normal,
    // Shadow for iOS
    shadowColor: theme.colors.tertiary,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 2,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.md,
    overflow: 'hidden',
    backgroundColor: theme.colors.background,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  itemDetails: {
    flex: 1,
    marginLeft: theme.spacing.normal,
    justifyContent: 'space-between',
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  itemName: {
    flex: 1,
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 16,
    color: theme.colors.tertiary,
    fontWeight: theme.typography.headings.weights.semiBold as any,
    marginRight: theme.spacing.small,
  },
  itemPrice: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 16,
    color: theme.colors.primary,
    fontWeight: theme.typography.body.weights.bold as any,
    marginTop: theme.spacing.tiny,
  },
  quantityContainer: {
    alignItems: 'flex-start',
    marginTop: theme.spacing.small,
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
    padding: theme.spacing.small,
  },
  quantityValue: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 14,
    fontWeight: theme.typography.body.weights.semiBold as any,
    color: theme.colors.tertiary,
    paddingHorizontal: theme.spacing.normal,
  },
  summaryContainer: {
    backgroundColor: '#FFFFFF',
    padding: theme.spacing.large,
    borderTopLeftRadius: theme.borderRadius.lg,
    borderTopRightRadius: theme.borderRadius.lg,
    // Shadow for iOS
    shadowColor: theme.colors.tertiary,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 5,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.small,
  },
  summaryLabel: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 16,
    color: theme.colors.tertiary,
    fontWeight: theme.typography.body.weights.medium as any,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: theme.spacing.normal,
  },
  totalLabel: {
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 20,
    color: theme.colors.tertiary,
    fontWeight: theme.typography.headings.weights.bold as any,
  },
  totalValue: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 24,
    color: theme.colors.primary,
    fontWeight: theme.typography.body.weights.bold as any,
  },
  checkoutButton: {
    marginTop: theme.spacing.large,
    width: '100%',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.large,
  },
  emptyIcon: {
    marginBottom: theme.spacing.large,
  },
  emptyTitle: {
    fontFamily: theme.typography.headings.fontFamily,
    fontSize: 24,
    color: theme.colors.tertiary,
    marginBottom: theme.spacing.small,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontFamily: theme.typography.body.fontFamily,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: theme.spacing.large,
  },
  exploreButton: {
    width: '100%',
    maxWidth: 300,
  },
});
