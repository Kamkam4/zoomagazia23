// src/components/products/ProductList.tsx
'use client';

import { useState, useEffect } from 'react';
import { useSearchStore } from '@/store/searchStore';
import type { Product } from '@/data/products';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';

// ანიმაციის ვარიანტები
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <motion.div
      className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      key={searchTerm} // This forces re-animation on search
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <motion.div key={product.id} variants={itemVariants}>
            <ProductCard product={product} />
          </motion.div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">პროდუქტი ვერ მოიძებნა.</p>
      )}
    </motion.div>
  );
}