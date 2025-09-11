// src/components/home/CategoriesSection.tsx
import { productCategories } from '@/data/categories';
import CategoryCard from '@/components/categories/CategoryCard';

const CategoriesSection = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            აირჩიე კატეგორიის მიხედვით
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            იპოვე ყველაფერი, რაც შენს მეგობარს სჭირდება, მარტივად და სწრაფად.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;