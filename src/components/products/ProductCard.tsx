// src/components/products/ProductCard.tsx
'use client'; // <-- ვაქცევთ კლიენტის კომპონენტად

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore'; // <-- ვიძახებთ ჩვენს store-ს

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // ვაჩერებთ Link-ზე გადასვლას
    e.stopPropagation(); // ვაჩერებთ ივენთის გავრცელებას
    addToCart(product);
    // მომავალში აქ შეგვიძლია დავამატოთ შეტყობინება "პროდუქტი დამატებულია"
    console.log(`${product.name} added to cart!`);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      {/* Link covers the whole card except the button area */}
      <Link href={`/products/${product.id}`} className="absolute inset-0 z-10" aria-label={`View details for ${product.name}`}>
        <span className="sr-only">View Details</span>
      </Link>
      
      <div className="aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <h3 className="text-base font-medium text-gray-900">
            {/* The link is now just for styling and semantics, the clickable area is handled above */}
            <span aria-hidden="true">{product.name}</span>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">{product.price.toFixed(2)} ₾</p>
          <button
            onClick={handleAddToCart}
            className="relative z-20 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100"
            aria-label={`Add ${product.name} to cart`}
          >
            დამატება
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;