// src/components/categories/CategoryCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/data/categories';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link href={category.href} className="group relative block h-64 overflow-hidden rounded-lg shadow-lg">
      <Image
        src={category.imageUrl}
        alt={`Category: ${category.name}`}
        fill
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50"></div>
      <div className="relative flex h-full items-center justify-center">
        <h3 className="text-2xl font-bold text-white uppercase tracking-wider">
          {category.name}
        </h3>
      </div>
    </Link>
  );
};

export default CategoryCard;