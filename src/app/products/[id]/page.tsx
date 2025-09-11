// src/app/products/[id]/page.tsx
import { allProducts } from '@/data/products';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ProductDetailsClient from '@/components/products/ProductDetailsClient'; // Import our new client component

interface ProductPageProps {
  params: {
    id: string;
  };
}

// generateMetadata can now live happily in this server component
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = allProducts.find(p => p.id === parseInt(params.id));
  
  if (!product) {
    return {
      title: 'პროდუქტი ვერ მოიძებნა',
    };
  }

  return {
    title: `${product.name} | PetShop Portfolio`,
    description: product.description,
  };
}

// This is now a Server Component
export default function ProductPage({ params }: ProductPageProps) {
  const product = allProducts.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {/* We render the client component and pass the product data to it */}
        <ProductDetailsClient product={product} />
      </div>
    </div>
  );
}