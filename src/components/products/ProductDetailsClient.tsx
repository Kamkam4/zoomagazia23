// src/components/products/ProductDetailsClient.tsx
'use client';

import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import type { Product } from '@/data/products';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetailsClient({ product }: ProductDetailsProps) {
  const { addToCart } = useCartStore();

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={800}
          height={800}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Product Details */}
      <div>
        <p className="text-sm font-medium text-blue-600">{product.category}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {product.name}
        </h1>
        <p className="mt-4 text-3xl tracking-tight text-gray-900">
          {product.price.toFixed(2)} ₾
        </p>
        
        <div className="mt-6">
          <h3 className="sr-only">Description</h3>
          <div className="space-y-6 text-base text-gray-700">
            <p>{product.description}</p>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            კალათაში დამატება
          </button>
        </div>
      </div>
    </div>
  );
}