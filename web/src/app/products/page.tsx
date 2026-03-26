import { ProductCard, Product } from '@/components/product/ProductCard';

const ALL_PRODUCTS: Product[] = [
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
  {
    id: '5',
    name: 'Máscara de Pestañas Volumen Extremo',
    description: 'Aporta longitud y volumen sin grumos. Fórmula resistente al agua y enriquecida con aceite de ricino.',
    price: 15.50,
    category: 'Ojos',
    imageUrl: 'https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Colorete en Crema',
    description: 'Textura suave que se funde con la piel para un rubor natural. Fácil de difuminar y de larga duración.',
    price: 16.00,
    category: 'Rostro',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
  },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-tertiary font-serif sm:text-4xl">
          Catálogo de Productos
        </h1>
        <p className="mt-4 text-lg text-tertiary/70 font-sans">
          Descubre nuestra colección completa de cosméticos diseñados para realzar tu belleza natural.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-bold text-tertiary mb-4 font-serif">Categorías</h2>
            <ul className="space-y-3 font-sans">
              <li>
                <button className="text-primary font-medium hover:underline">Todos los productos</button>
              </li>
              <li>
                <button className="text-tertiary hover:text-primary transition-colors">Rostro</button>
              </li>
              <li>
                <button className="text-tertiary hover:text-primary transition-colors">Ojos</button>
              </li>
              <li>
                <button className="text-tertiary hover:text-primary transition-colors">Labios</button>
              </li>
              <li>
                <button className="text-tertiary hover:text-primary transition-colors">Cuidado Facial</button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="flex-1">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-tertiary/70 font-sans">
              Mostrando {ALL_PRODUCTS.length} productos
            </span>
            <select className="rounded-md border border-gray-300 py-1.5 pl-3 pr-8 text-sm text-tertiary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sans bg-white">
              <option>Destacados</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
              <option>Novedades</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
