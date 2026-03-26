import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Mocked Cart Data
const CART_ITEMS = [
  {
    id: '1',
    name: 'Labial Mate Terciopelo',
    price: 18.99,
    quantity: 1,
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=200&auto=format&fit=crop',
    color: 'Rojo Carmesí',
  },
  {
    id: '3',
    name: 'Sérum Iluminador con Vitamina C',
    price: 28.00,
    quantity: 2,
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200&auto=format&fit=crop',
    size: '30ml',
  },
];

export default function CartPage() {
  const subtotal = CART_ITEMS.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.00; // Flat rate
  const total = subtotal + shipping;

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-tertiary sm:text-4xl font-serif">Carrito de Compras</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
          {/* Cart Items */}
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>

            <ul role="list" className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {CART_ITEMS.map((item) => (
                <li key={item.id} className="flex py-6 sm:py-10">
                  <div className="shrink-0">
                    <div className="relative h-24 w-24 rounded-md overflow-hidden bg-neutral sm:h-32 sm:w-32 border border-gray-100">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6 font-sans">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <Link href={`/products/${item.id}`} className="font-medium text-tertiary hover:text-primary">
                              {item.name}
                            </Link>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          {item.color && <p className="text-gray-500">{item.color}</p>}
                          {item.size && <p className="text-gray-500">{item.size}</p>}
                        </div>
                        <p className="mt-1 text-sm font-medium text-tertiary">${item.price.toFixed(2)}</p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <label htmlFor={`quantity-${item.id}`} className="sr-only">
                          Quantity, {item.name}
                        </label>
                        <select
                          id={`quantity-${item.id}`}
                          name={`quantity-${item.id}`}
                          className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium text-tertiary shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm bg-white"
                          defaultValue={item.quantity}
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>

                        <div className="absolute right-0 top-0">
                          <button type="button" className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Remove</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-tertiary/80">
                      <svg className="h-5 w-5 shrink-0 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>En stock</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 rounded-lg bg-neutral px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 border border-gray-100"
          >
            <h2 id="summary-heading" className="text-lg font-medium text-tertiary font-serif">
              Resumen del Pedido
            </h2>

            <dl className="mt-6 space-y-4 font-sans text-sm text-tertiary">
              <div className="flex items-center justify-between">
                <dt className="text-tertiary/70">Subtotal</dt>
                <dd className="font-medium">${subtotal.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="flex items-center text-tertiary/70">
                  <span>Envío estimado</span>
                </dt>
                <dd className="font-medium">${shipping.toFixed(2)}</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                <dt className="text-base font-bold text-tertiary">Total</dt>
                <dd className="text-base font-bold text-tertiary">${total.toFixed(2)}</dd>
              </div>
            </dl>

            <div className="mt-6">
              <Button size="lg" fullWidth>Confirmar Compra</Button>
            </div>

            <div className="mt-6 text-center text-sm font-sans">
              <p className="text-tertiary/70">
                o{' '}
                <Link href="/products" className="font-medium text-primary hover:text-primary/80">
                  Continuar Comprando
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
