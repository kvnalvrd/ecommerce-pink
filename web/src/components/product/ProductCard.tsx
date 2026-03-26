'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-lg bg-white shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <Link href={`/products/${product.id}`} className="relative h-64 w-full overflow-hidden bg-neutral block">
        <Image
          src={product.imageUrl}
          alt={`Imagen de ${product.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <span className="inline-block rounded-md bg-secondary px-2 py-1 text-xs font-medium text-tertiary">
            {product.category}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <Link href={`/products/${product.id}`}>
            <h3 className="text-lg font-semibold text-tertiary line-clamp-1">{product.name}</h3>
          </Link>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2 font-sans">{product.description}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-tertiary">${product.price.toFixed(2)}</span>
          <Button
            variant="primary"
            size="sm"
            aria-label={`Añadir ${product.name} al carrito`}
            onClick={() => console.log('Añadido al carrito:', product.id)}
          >
            Añadir
          </Button>
        </div>
      </div>
    </div>
  );
}
