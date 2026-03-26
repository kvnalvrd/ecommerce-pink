import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';

// Mocked fetch function for a single product
const getProduct = (id: string) => {
  const ALL_PRODUCTS = [
    {
      id: '1',
      name: 'Labial Mate Terciopelo',
      description: 'Un labial de larga duración con acabado mate aterciopelado que no reseca tus labios. Enriquecido con vitamina E para mantener la hidratación durante todo el día. Su fórmula innovadora proporciona un color intenso con una sola pasada.',
      price: 18.99,
      category: 'Labios',
      imageUrl: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop',
      ingredients: 'Isododecane, Dimethicone, Trimethylsiloxysilicate, Polybutene, Petrolatum, Cyclohexasiloxane, Kaolin, Disteardimonium Hectorite, Beeswax, Silica Dimethyl Silylate.',
      volume: '5ml',
    },
    {
      id: '2',
      name: 'Paleta de Sombras Sunset',
      description: '12 tonos cálidos inspirados en el atardecer, con acabados mate y metálicos de alta pigmentación.',
      price: 34.50,
      category: 'Ojos',
      imageUrl: 'https://images.unsplash.com/photo-1512496115851-a408e51e51dc?q=80&w=1200&auto=format&fit=crop',
      ingredients: 'Talc, Mica, Magnesium Stearate, Polyethylene, Mineral Oil, Ethylhexyl Palmitate, Silica.',
      volume: '12x1.5g',
    },
  ];
  return ALL_PRODUCTS.find((p) => p.id === id);
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-tertiary/60 font-sans">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">Inicio</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary transition-colors">Productos</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="font-medium text-tertiary" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          {/* Product Image */}
          <div className="flex flex-col-reverse">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-neutral sm:aspect-h-3 sm:aspect-w-4 relative h-[500px]">
              <Image
                src={product.imageUrl}
                alt={`Imagen detallada de ${product.name}`}
                fill
                priority
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="mt-10 px-4 sm:px-0 lg:mt-0">
            <span className="text-sm font-bold tracking-widest text-primary uppercase">
              {product.category}
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-tertiary sm:text-4xl font-serif">
              {product.name}
            </h1>

            <div className="mt-4">
              <h2 className="sr-only">Información del producto</h2>
              <p className="text-3xl tracking-tight text-tertiary font-bold">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Descripción</h3>
              <div className="space-y-6 text-base text-tertiary/80 font-sans">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex gap-4">
                <div className="w-1/4">
                  <label htmlFor="quantity" className="sr-only">Cantidad</label>
                  <select
                    id="quantity"
                    name="quantity"
                    className="block w-full rounded-md border border-gray-300 py-3 px-4 text-base font-medium text-tertiary shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm bg-white"
                    defaultValue={1}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div className="w-3/4">
                  <Button size="lg" fullWidth aria-label={`Añadir ${product.name} al carrito`}>
                    Añadir al carrito
                  </Button>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="mt-12 border-t border-gray-200 pt-8 font-sans">
              <div className="prose prose-sm pb-6">
                <h3 className="text-lg font-medium text-tertiary font-serif mb-2">Ingredientes</h3>
                <p className="text-tertiary/70">{product.ingredients || 'Información no disponible.'}</p>
              </div>
              <div className="prose prose-sm">
                <h3 className="text-lg font-medium text-tertiary font-serif mb-2">Volumen/Cantidad</h3>
                <p className="text-tertiary/70">{product.volume || 'No especificado'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
