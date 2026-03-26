import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ProductCard, Product } from '@/components/product/ProductCard';

// Dummy data for featured products
const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Labial Mate Terciopelo',
    description: 'Un labial de larga duración con acabado mate aterciopelado que no reseca tus labios. Enriquecido con vitamina E.',
    price: 18.99,
    category: 'Labios',
    imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Paleta de Sombras Sunset',
    description: '12 tonos cálidos inspirados en el atardecer, con acabados mate y metálicos de alta pigmentación.',
    price: 34.50,
    category: 'Ojos',
    imageUrl: 'https://images.unsplash.com/photo-1512496115851-a408e51e51dc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Sérum Iluminador con Vitamina C',
    description: 'Sérum ligero que aporta un brillo natural mientras protege tu piel de los radicales libres. Ideal para uso diario.',
    price: 28.00,
    category: 'Cuidado Facial',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Base Líquida Acabado Natural',
    description: 'Cobertura construible de media a completa que deja respirar tu piel, con un acabado luminoso y natural.',
    price: 24.99,
    category: 'Rostro',
    imageUrl: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/50 py-16 sm:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block py-1 px-3 rounded-md bg-secondary text-tertiary font-medium text-sm mb-6">
              Nueva Colección 2024
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-tertiary mb-6 font-serif">
              Resalta tu Belleza <span className="text-primary">Natural</span>
            </h1>
            <p className="text-lg text-tertiary/80 mb-8 max-w-2xl mx-auto lg:mx-0 font-sans">
              Descubre nuestra nueva línea de productos formulados con ingredientes
              orgánicos para cuidar tu piel mientras te ves increíble.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/products" passHref legacyBehavior>
                <Button size="lg" className="w-full sm:w-auto">Comprar Ahora</Button>
              </Link>
              <Link href="/about" passHref legacyBehavior>
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/50">Conoce Más</Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto lg:h-[500px] h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1000&auto=format&fit=crop"
              alt="Modelo usando maquillaje E-commerce Pink"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-tertiary font-serif">Productos Destacados</h2>
              <p className="mt-2 text-tertiary/70 font-sans">Nuestros productos más vendidos y favoritos de los clientes.</p>
            </div>
            <Link href="/products" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
              Ver todo el catálogo
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2">Cruelty Free</h3>
              <p className="text-white/80 font-sans">Todos nuestros productos son libres de crueldad animal, siempre.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2">Ingredientes Premium</h3>
              <p className="text-white/80 font-sans">Seleccionamos cuidadosamente cada ingrediente por su alta calidad.</p>
            </div>
            <div className="flex flex-col items-center p-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
              </div>
              <h3 className="text-xl font-bold font-serif mb-2">Envío Rápido</h3>
              <p className="text-white/80 font-sans">Entregas en 24/48h para que disfrutes tus compras lo antes posible.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
